import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import Header from "./Header.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import DetailPage from "../pages/DetailPage.jsx";
import "../styles/main.scss";

function App() {
  const [scenes, setScenes] = useState([]);

  useEffect(() => {
    fetch("https://owen-wilson-wow-api.onrender.com/wows/random?results=50")
      .then((response) => response.json())
      .then((data) => {
        const updatedScenes = data.map((scene) => ({
          ...scene,
          generatedId: `${scene.movie.replace(/\s+/g, "-")}-${scene.year}-${scene.timestamp}`,
        }));
        setScenes(updatedScenes);
      });
  }, []);

  return (
    <div className="page">
      <Header title="Owen Wilson's WoW" />
      <main>
        <Routes>
          <Route index element={<LandingPage scenes={scenes} />} />
          <Route path="detail/:id" element={<DetailPage scenes={scenes} />} />
          <Route path="*" element={<p>Error 404: Page Not Found</p>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;



