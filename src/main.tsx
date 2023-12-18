import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ConfigProvider } from "antd";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 2,
          controlHeight: 40,
        },
      }}
    >
      <App />
    </ConfigProvider>
  </QueryClientProvider>
);
