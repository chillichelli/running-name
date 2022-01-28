import { createRouter } from "@/pages/api/trpc/[trpc]";
import { duffel } from "@/utils/duffel";
import { z } from "zod";

export const duffelRouter = createRouter().query("get-flight-offers", {
  input: z.object({
    return_offers: z.boolean(),
    slices: z.array(
      z.object({
        origin: z.string().min(3).max(3),
        destination: z.string().min(3).max(3),
        departure_date: z.string(),
      })
    ),
    passengers: z.array(
      z.union([
        z.object({
          type: z.string(),
        }),
        z.object({ age: z.number() }),
      ])
    ),
    cabin_class: z.string(),
  }),
  async resolve({ input }) {
    const flightOffers = await duffel.offerRequests.create({
      return_offers: input.return_offers,
      slices: input.slices,
      // @ts-ignore
      passengers: input.passengers,
      // @ts-ignore
      cabin_class: input.cabin_class,
    });
    return flightOffers.data;
  },
});
