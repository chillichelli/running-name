import { createRouter } from "@/pages/api/trpc/[trpc]";
import { amadeus, getLocations } from "@/utils/amadeus";
import { z } from "zod";

export const amadeusRouter = createRouter()
  .query("get-travel-restrictions", {
    input: z.object({
      countryCode: z.string(),
    }),
    async resolve({ input }) {
      const restrictions = await amadeus.client.get(
        "/v1/duty-of-care/diseases/covid19-area-report",
        {
          ...input,
        }
      );
      console.log(restrictions.result);
      return restrictions.result.data;
    },
  })
  .query("get-location", {
    input: z.string(),
    async resolve({ input }) {
      // Airports and City Search (autocomplete)
      // Find all the cities and airports starting
      // with a specific string.
      console.log(input);
      const locations = getLocations(input);
      console.log(locations);
      return locations;
    },
  });
