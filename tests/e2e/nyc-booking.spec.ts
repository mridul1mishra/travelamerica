import { expect, test } from "@playwright/test";

const bookingPath = "/destination/nyc/booking";

test.describe("NYC booking conversion page", () => {
  test("booking hub loads with NYC-specific conversion copy and tabbed inventory", async ({ page }) => {
    await page.goto(bookingPath);

    await expect(page).toHaveTitle(/Book Your New York Trip/i);
    await expect(page.getByRole("heading", { level: 1, name: /Book Your New York Trip/i })).toBeVisible();
    await expect(page.getByText(/Pick the area first: Midtown East/i)).toBeVisible();
    await expect(page.getByText(/airport transfer/i)).toBeVisible();

    await expect(page.getByRole("tab", { name: /Flights/i })).toHaveAttribute("aria-selected", "true");
    await expect(page.getByRole("heading", { name: /Book Flights to New York/i })).toBeVisible();
    const firstFlight = page.getByRole("link", { name: /View Prices/i }).first();
    await expect(firstFlight).toHaveAttribute("href", /aviasales|emrldtp/i);
    await expect(firstFlight).toHaveAttribute("target", "_blank");
    await expect(firstFlight).toHaveAttribute("data-booking-type", "flight");
    await expect(firstFlight).toHaveAttribute("data-item-name", /Frontier|American|United/i);

    await page.getByRole("tab", { name: /Hotels/i }).click();
    await expect(page.getByRole("tab", { name: /Hotels/i })).toHaveAttribute("aria-selected", "true");
    await expect(page.getByRole("heading", { name: /Book Hotels in New York/i })).toBeVisible();
    await expect(page.getByLabel(/Hotel filters/i)).toBeVisible();
    await expect(page.getByRole("link", { name: /Motto by Hilton New York City Chelsea/i })).toBeVisible();
    await expect(page.getByRole("link", { name: /Where to stay in NYC/i })).toHaveAttribute(
      "href",
      "/destination/nyc/best-areas-to-stay",
    );

    const firstHotel = page.getByRole("link", { name: /Motto by Hilton New York City Chelsea/i }).first();
    await expect(firstHotel).toHaveAttribute("href", /google\.com\/travel\/hotels/i);
    await expect(firstHotel).toHaveAttribute("target", "_blank");
    await expect(firstHotel).toHaveAttribute("data-booking-type", "hotel");
    await expect(firstHotel).toHaveAttribute("data-item-name", "Motto by Hilton New York City Chelsea");

    await page.getByRole("button", { name: /Next: things to do in NYC/i }).click();
    await expect(page.getByRole("tab", { name: /Things to Do/i })).toHaveAttribute("aria-selected", "true");
    await expect(page.getByRole("heading", { name: /Things to Do in New York/i })).toBeVisible();
    await expect(page.getByLabel(/Activity filters/i)).toBeVisible();
    await expect(page.getByRole("link", { name: /Guggenheim Ticket/i }).first()).toBeVisible();

    const firstActivity = page.getByRole("link", { name: /Guggenheim Ticket/i }).first();
    await expect(firstActivity).toHaveAttribute("href", /wegotrip|tpx\.lt/i);
    await expect(firstActivity).toHaveAttribute("target", "_blank");
    await expect(firstActivity).toHaveAttribute("data-booking-type", "activity");
    await expect(firstActivity).toHaveAttribute("data-item-name", /Guggenheim Ticket/i);

    await expect(page.getByRole("link", { name: /Full NYC attractions guide/i })).toHaveAttribute(
      "href",
      "/destination/nyc/things-to-do",
    );
  });
});
