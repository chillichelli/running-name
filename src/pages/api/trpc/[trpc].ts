// import { appRouter } from "@/backend/router";
// import * as trpcNext from "@trpc/server/adapters/next";

// // export API handler
// export default trpcNext.createNextApiHandler({
//   router: appRouter,
//   createContext: () => null,
// });

import { PrismaClient } from "@prisma/client";
import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import superjson from "superjson";
import { duffelRouter } from "@/backend/router";
import { amadeusRouter } from "@/backend/router/amadeus";

// const prisma = new PrismaClient();

// create context based of incoming request
// set as optional here so it can also be re-used for `getStaticProps()`
export const createContext = async (
  opts?: trpcNext.CreateNextContextOptions
) => {
  return {
    req: opts?.req,
    // prisma,
  };
};
export type Context = trpc.inferAsyncReturnType<typeof createContext>;

export function createRouter() {
  return trpc.router<Context>();
}
const router = createRouter()
  .transformer(superjson)
  .merge("duffel.", duffelRouter)
  .merge("amadeus.", amadeusRouter);

export const appRouter = router;
export type AppRouter = typeof router;

export default trpcNext.createNextApiHandler({
  router,
  createContext,
  // teardown: () => prisma.$disconnect(),
  onError({ error }) {
    if (error.code === "INTERNAL_SERVER_ERROR") {
      // send to bug reporting
      console.error("Something went wrong", error);
    }
  },
});
