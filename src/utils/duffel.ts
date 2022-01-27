import { Duffel } from "@duffel/api";

export const duffel = new Duffel({
  token: process.env.DUFFEL_TOKEN || "",
  debug: { verbose: process.env.VERCEL_ENV === "development" },
});
