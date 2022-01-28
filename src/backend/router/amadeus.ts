import { createRouter } from "@/pages/api/trpc/[trpc]";
import { amadeus } from "@/utils/amadeus";
import { z } from "zod";

export const amadeusRouter = createRouter().query("get-travel-restrictions", {
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
    return restrictions.result;
  },
});
