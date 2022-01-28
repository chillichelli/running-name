import { Duffel } from "@duffel/api";

export const duffel = new Duffel({
  token: process.env.DUFFEL_ACCESS_TOKEN || "",
  debug: {
    verbose:
      process.env.NEXT_PUBLIC_VERCEL_ENV === "development" ||
      process.env.VERCEL_ENV === "development",
  },
});
