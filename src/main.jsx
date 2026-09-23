import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles.css";
import { Router, BrowserRouter, Route, Routes } from "react-router-dom";
import ProgramShow from "./pages/ProgramShow.jsx";
import NewsArticle from "./pages/NewsArticle.jsx";

// detta main.jsx fil används för att koppla jsx filen till index.html filen så att allt fungerar.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/program/:programmename" element={<ProgramShow />} />
      <Route path="/news/:slug" element={<NewsArticle />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);