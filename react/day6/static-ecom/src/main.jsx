import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRouter";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { LanguageProvider } from "./context/LanguageProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </LanguageProvider>
  </StrictMode>,
);
