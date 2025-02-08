import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import Header from "./Header.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import DetailPage from "../pages/DetailPage.jsx";
import "../styles/main.scss";
import { useFetchScenes } from "../lib/hooks";

function App() {
  const { scenes } = useFetchScenes();  // Solo obtenemos scenes

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Owen Wilson's WoW</h1>
      </header>
      <main>
        <Routes>
          <Route index element={<LandingPage scenes={scenes} />} />
          <Route path="detail/:id" element={<DetailPage scenes={scenes} />} />
          <Route path="*" element={<p>Error 404: Page not found</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;