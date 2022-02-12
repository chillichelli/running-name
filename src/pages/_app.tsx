import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { withTRPC } from "@trpc/next";
import { AppType } from "next/dist/shared/lib/utils";
import superjson from "superjson";

const MyApp: AppType = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default withTRPC({
  config() {
    return {
      url: "/api/trpc",
      transformer: superjson,
    };
  },
  ssr: false,
})(MyApp);
