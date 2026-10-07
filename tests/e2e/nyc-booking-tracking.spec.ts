import { expect, type Page, test } from "@playwright/test";

const bookingPath = "/destination/nyc/flight";
const femaleSoloPath = "/destination/nyc/nyc-female-solo-travel-guide";

type CapturedGtagEvent = {
  command: string;
  eventName: string;
  params: Record<string, unknown>;
};

async function installGtagCapture(page: Page) {
  await page.waitForFunction(() => Array.from(document.querySelectorAll("a")).some((link) => Object.keys(link).some((key) => key.startsWith("__reactProps$"))));
  await page.waitForTimeout(500);
  await page.evaluate(() => {
    const win = window as typeof window & {
      __capturedGtagEvents?: Array<{
        command: string;
        eventName: string;
        params: Record<string, unknown>;
      }>;
      gtag?: (command: string, eventName: string, params?: Record<string, unknown>) => void;
    };
    win.__capturedGtagEvents = [];
    const originalGtag = win.gtag;
    win.gtag = (command, eventName, params = {}) => {
      win.__capturedGtagEvents?.push({ command, eventName, params });
      originalGtag?.(command, eventName, params);
    };
  });
}

async function capturedEvents(page: Page) {
  return page.evaluate(() => {
    const win = window as typeof window & { __capturedGtagEvents?: CapturedGtagEvent[] };
    return win.__capturedGtagEvents ?? [];
  });
}

async function expectEvent(
  page: Page,
  eventName: string,
  expected: Record<string, RegExp | string>,
) {
  await expect
    .poll(async () => capturedEvents(page), {
      message: `Expected ${eventName} to be fired`,
    })
    .toContainEqual(
      expect.objectContaining({
        command: "event",
        eventName,
        params: expect.objectContaining(
          Object.fromEntries(
            Object.entries(expected).map(([key, value]) => [
              key,
              typeof value === "string" ? value : expect.stringMatching(value),
            ]),
          ),
        ),
      }),
    );
}

test.describe("NYC booking tracking guardrails", () => {
  test("live booking clicks emit explicit GA4 events", async ({ page, context }) => {
    await page.goto(bookingPath);
    await installGtagCapture(page);

    const firstFlight = page.getByRole("link", { name: /View Prices/i }).first();
    const flightPopup = context.waitForEvent("page");
    await firstFlight.click();
    await (await flightPopup).close();
    await expectEvent(page, "booking_flight_click", {
      booking_type: "flight",
      item_name: /Frontier|American|United/i,
      page_path: bookingPath,
      outbound_domain: /aviasales|emrldtp/i,
    });

    await page.goto("/destination/nyc/hotel");
    await installGtagCapture(page);
    const firstHotel = page.getByRole("link", { name: /Motto by Hilton New York City Chelsea/i }).first();
    const hotelPopup = context.waitForEvent("page");
    await firstHotel.click();
    await (await hotelPopup).close();
    await expectEvent(page, "booking_hotel_click", {
      booking_type: "hotel",
      item_name: "Motto by Hilton New York City Chelsea",
      page_path: "/destination/nyc/hotel",
      outbound_domain: /google\.com/i,
    });

    await page.goto("/destination/nyc/tours-and-tickets");
    await installGtagCapture(page);
    const firstActivity = page.locator('[data-booking-type="activity"]').filter({ hasText: /Guggenheim Ticket/i }).first();
    const activityPopup = context.waitForEvent("page");
    await firstActivity.click();
    await (await activityPopup).close();
    await expectEvent(page, "booking_activity_click", {
      booking_type: "activity",
      item_name: /Guggenheim Ticket/i,
      page_path: "/destination/nyc/tours-and-tickets",
      outbound_domain: /wegotrip|tpx\.lt/i,
    });
  });

  test("live SEO booking CTA emits booking_cta_click", async ({ page }) => {
    await page.goto(femaleSoloPath);
    await installGtagCapture(page);
    await page.evaluate(() => {
      document.addEventListener(
        "click",
        (event) => {
          const target = event.target;
          if (target instanceof Element && target.closest('a[href*="/destination/nyc/hotel"]')) {
            event.preventDefault();
          }
        },
        { capture: true },
      );
    });

    await page.getByRole("link", { name: /See safe-area hotels/i }).click();
    await expectEvent(page, "booking_cta_click", {
      page_path: femaleSoloPath,
      link_path: /\/destination\/nyc\/hotel\?from=female-solo/i,
      source_page: "female-solo",
    });
  });
});
