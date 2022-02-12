// import { PrismaClient } from "@prisma/client";
import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import superjson from "superjson";
import { duffelRouter } from "@/backend/router/duffel";
import { amadeusRouter } from "@/backend/router/amadeus";

// const prisma = new PrismaClient();

// create context based of incoming request
// set as optional here so it can also be re-used for `getStaticProps()`
export const createContext = async ({
  req,
  res,
}: trpcNext.CreateNextContextOptions) => {
  return {
    req,
    res,
  };
};

export type Context = trpc.inferAsyncReturnType<typeof createContext>;

export function createRouter() {
  return trpc.router<Context>();
}

const appRouter = createRouter()
  .transformer(superjson)
  .merge("amadeus.", amadeusRouter);
// .merge("duffel.", duffelRouter);

export type AppRouter = typeof appRouter;

export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext,
  // teardown: () => prisma.$disconnect(),
  onError({ error }) {
    if (error.code === "INTERNAL_SERVER_ERROR") {
      // send to bug reporting
      console.error("Something went wrong", error);
    }
  },
  batching: {
    enabled: true,
  },
});
