import { useEffect, useState } from "react";
import { generateSceneId } from "./utils";

function useFetchScenes() {
    const [scenes, setScenes] = useState([]);
  
    useEffect(() => {
      fetch("https://owen-wilson-wow-api.onrender.com/wows/random?results=50")
        .then((response) => response.json())
        .then((data) => {
          const updatedScenes = data.map((scene) => ({
            ...scene,
            generatedId: generateSceneId(scene),
          }));
          setScenes(updatedScenes);
        });
    }, []);
  
    return { scenes };
  }
  
  export { useFetchScenes };
