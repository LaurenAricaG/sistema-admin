import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./App.css"; 

// 🌙 inicializar tema ANTES de React
const storedTheme = localStorage.getItem("theme");

const isDark =
  storedTheme === "dark" ||
  (!storedTheme &&
    window.matchMedia("(prefers-color-scheme: dark)").matches);

document.documentElement.classList.toggle("dark", isDark);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
