import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { IndexPage } from "@/pages/index";
import { MainLayout } from "@/layouts/main-layout";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<IndexPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
