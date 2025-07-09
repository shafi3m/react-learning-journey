import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="min-h-screen flex justify-center items-center gap-6 bg-gray-100 p-10">
      <App />
    </div>
  </StrictMode>
);
