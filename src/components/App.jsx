import { useEffect, useState } from "react";
import '../styles/App.scss';

function App() {

  const [scenes, setScenes] = useState([]);

  useEffect(() => {

  fetch ('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
  .then(response => response.json())
  .then(data => setScenes(data));
  }, []);

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Owen Wilson's WoW</h1>
        <hr className="header__separator"/>
      </header>
      <main>
      <ul className="scene-list">
          {scenes.map((scene, index)=> (
            <li key={scene.movie + scene.full_line + index} className="scene-card">
              <article className="scene-info">
                <img
                  className="scene-info__image"
                  src={scene.poster}
                  alt={`Poster of ${scene.movie}`}
                />
                <h3 className="scene-info__title">{scene.movie} - {scene.year}</h3>
                <p className="scene-info__quote">"{scene.full_line}"</p>
              </article>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App;
