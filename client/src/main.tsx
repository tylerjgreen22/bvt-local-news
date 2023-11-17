import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "@fontsource/roboto-condensed/400.css";
import "@fontsource/roboto-condensed/700.css";
import { ChakraProvider } from "@chakra-ui/react";
import router from "./app/router/Routes";
import { RouterProvider } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        color: "#FBFFFE",
        bg: "#121212",
      },
    },
  },
  fonts: {
    heading: `'roboto-condensed-700', sans-serif`,
    body: `'roboto-condensed-400', sans-serif`,
  },
  colors: {
    main: "rgba(102, 106, 134, 0.2)",
    text: "#FBFFFE",
    accent: "#28AFB0",
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
