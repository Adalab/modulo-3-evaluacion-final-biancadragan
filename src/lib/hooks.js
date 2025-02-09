import { useEffect, useState } from "react";
import { generateSceneId } from "./utils";

function useFetchScenes() {
  const [scenes, setScenes] = useState([]);

  useEffect(() => {
    const storedScenes = localStorage.getItem("scenes");
    if (storedScenes) {
      setScenes(JSON.parse(storedScenes));
    } else {
      fetch("https://owen-wilson-wow-api.onrender.com/wows/random?results=50")
        .then((response) => response.json())
        .then((data) => {
          const updatedScenes = data.map((scene) => ({
            ...scene,
            generatedId: generateSceneId(scene),
          }));
          localStorage.setItem("scenes", JSON.stringify(updatedScenes));
          setScenes(updatedScenes);
        });
    }
  }, []);

  return { scenes };
}

export { useFetchScenes };
