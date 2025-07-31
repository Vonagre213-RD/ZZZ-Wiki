import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import FavoritesProvider from "@/providers/FavoritesProvider.tsx";
import FiltersProviders from "./providers/FiltersProvider.tsx";
import UserDataProvider from "./providers/UserDataProvider.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <UserDataProvider>
        <FiltersProviders>
          <FavoritesProvider>
            <App />
          </FavoritesProvider>
        </FiltersProviders>
      </UserDataProvider>
    </BrowserRouter>
  </StrictMode>
);
