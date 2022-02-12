import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import { withTRPC } from "@trpc/next";
import { AppType } from "next/dist/shared/lib/utils";
import { transformer } from "@/utils/trpc";
import TRPCContext from "@/components/TRPCContext";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <TRPCContext>
      <Component {...pageProps} />
    </TRPCContext>
  );
};

export default withTRPC({
  config() {
    return {
      url: "/api/trpc",
      // transformer,
    };
  },
  ssr: false,
})(MyApp);
