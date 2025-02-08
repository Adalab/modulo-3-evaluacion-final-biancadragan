import { useState, useEffect } from "react";
import Filters from "../components/Filters";
import SceneList from "../components/SceneList";
import PropTypes from "prop-types";

function LandingPage({ scenes }) {
  // Recuperar valores de localStorage o usar valores por defecto
  const storedMovie = localStorage.getItem("filterMovie") || "";
  const storedYear = localStorage.getItem("filterYear") || "";

  const [filterMovie, setFilterMovie] = useState(storedMovie);
  const [filterYear, setFilterYear] = useState(storedYear);

  // Guardar en localStorage cada vez que cambien los filtros
  useEffect(() => {
    localStorage.setItem("filterMovie", filterMovie);
    localStorage.setItem("filterYear", filterYear);
  }, [filterMovie, filterYear]);

  const handleFilterMovie = (ev) => setFilterMovie(ev.target.value);
  const handleFilterYear = (ev) => setFilterYear(ev.target.value);

  const allYears = scenes.map((scene) => scene.year);
  const uniqueYears = [...new Set(allYears)].sort((a, b) => a - b);

  const filteredScenes = scenes.filter(
    (scene) =>
      scene.movie.toLowerCase().includes(filterMovie.toLowerCase()) &&
      (filterYear ? scene.year === parseInt(filterYear) : true)
  );

  return (
    <div>
      <Filters
        filterMovie={filterMovie}
        filterYear={filterYear}
        onFilterMovie={handleFilterMovie}
        onFilterYear={handleFilterYear}
        uniqueYears={uniqueYears}
      />
      {filteredScenes.length > 0 ? (
        <SceneList scenes={filteredScenes} />
      ) : (
        <p className="no-results">No movie matches the search term <strong>"{filterMovie}"</strong></p>
      )}
    </div>
  );
}

LandingPage.propTypes = {
  scenes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LandingPage;
