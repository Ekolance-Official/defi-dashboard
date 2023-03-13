import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { theme } from "./utils/theme";
import { ChakraProvider } from "@chakra-ui/react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);
