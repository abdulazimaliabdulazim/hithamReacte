import React from "react";
import { createRoot } from "react-dom/client";
import App from "./Commponent/App/App";
import "./Commponent/App/App.module.css";
import "./Commponent/CssMine/normalize.css"; // Normalize
import "./Commponent/CssMine/all.min.css"; // font awesome

createRoot(document.getElementById("root")).render(<App tab="home" />);
