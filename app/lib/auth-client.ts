"use client";

import { createAuthClient } from "better-auth/react";
import { emailOTPClient, inferAdditionalFields } from "better-auth/client/plugins";

export const authClient = createAuthClient({
  basePath: "/api/auth",
  plugins: [emailOTPClient(), inferAdditionalFields({
    user: { phone: { type: "string", required: false, input: true } },
  })],
  fetchOptions: { cache: "no-store" },
});
