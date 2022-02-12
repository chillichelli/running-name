import { FC, useState } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { trpc } from "@/utils/trpc";

const TRPCContext: FC = ({ children }) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      url: "http://localhost:3000/api/trpc/",

      // Dit ook
      headers() {
        return {
          // authorization: getAuthCookie(),
          // currently unused
          // authorization: "Bearer token voor authorisatie",
        };
      },
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};

export default TRPCContext;
