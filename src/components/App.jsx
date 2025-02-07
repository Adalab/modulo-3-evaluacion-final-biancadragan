import { useEffect, useState } from "react";
import '../styles/App.scss';

function App() {
  const [scenes, setScenes] = useState([]);
  const [filterMovie, setFilterMovie] = useState('');
  const [filterYear, setFilterYear] = useState('');

  useEffect(() => {
    fetch('https://owen-wilson-wow-api.onrender.com/wows/random?results=50')
      .then(response => response.json())
      .then(data => setScenes(data));
  }, []);

  const handleFilterMovie = (ev) => {
    setFilterMovie(ev.target.value);
  };

  const handleFilterYear = (ev) => {
    setFilterYear(ev.target.value);
  };

  const allYears = scenes.map(scene => scene.year);
  const uniqueYears = [];
  allYears.forEach(year => {
    if (!uniqueYears.includes(year)) {
      uniqueYears.push(year);
    }
  });

  uniqueYears.sort((a, b) => a - b);

  const filteredScenes = scenes.filter(scene =>
    scene.movie.toLowerCase().includes(filterMovie.toLowerCase()) &&
    (filterYear ? scene.year === parseInt(filterYear) : true)
  );

  return (
    <div className="page">
      <header className="header">
        <h1 className="header__title">Owen Wilson's WoW</h1>
        <hr className="header__separator" />
        <form className="filters">
          
          <input
            id="filterMovie"
            className="filter__input"
            type="text"
            placeholder="Filter by movie"
            value={filterMovie}
            onChange={handleFilterMovie}
          />

         
          <select
            id="filterYear"
            className="filter__select"
            value={filterYear}
            onChange={handleFilterYear}
          >
            <option value="">Select year</option>
              {uniqueYears.map(year => (
                <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </form>

      </header>
      <main>
        <ul className="scene__list">
          {filteredScenes.map((scene, index) => (
            <li key={scene.movie + scene.full_line + index} className="scene__card">
              <article className="scene__info">
                <img
                  className="scene__info__image"
                  src={scene.poster}
                  alt={`Poster of ${scene.movie}`}
                />
                <h3 className="scene__info__title">{scene.movie} - {scene.year}</h3>
                <p className="scene__info__quote">"{scene.full_line}"</p>
              </article>
            </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export default App;

