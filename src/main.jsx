import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import RootRouter from "./routes/RootRouter.jsx";
import { FoodProvider } from "./context/FoodContext.jsx";
import AuthProvider from "./firebase/AuthProvider.jsx";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <FoodProvider>
        <RouterProvider router={RootRouter} />
        <Toaster />
      </FoodProvider>
    </AuthProvider>
  </StrictMode>
);
