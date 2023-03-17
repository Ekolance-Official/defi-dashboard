import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { theme } from "./utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import Trade from "./pages/Trade";
import { Provider } from "react-redux";
import store from "./store/store";
import Analytics from "./pages/Analytics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/trade",
    element: <Trade />,
  },
  {
    path: "/analytics",
    element: <Analytics />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider {...{ store }}>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </Provider>
);
