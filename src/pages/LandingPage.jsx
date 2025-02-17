import { useState, useEffect } from "react";
import Filters from "../components/Filters";
import SceneList from "../components/SceneList";
import NoResultsMessage from "../components/NoResultsMessage";
import PropTypes from "prop-types";

function LandingPage({ scenes }) {
  const storedMovie = localStorage.getItem("filterMovie") || "";
  const storedYear = localStorage.getItem("filterYear") || "";

  const [filterMovie, setFilterMovie] = useState(storedMovie);
  const [filterYear, setFilterYear] = useState(storedYear);

  useEffect(() => {
    localStorage.setItem("filterMovie", filterMovie);
    localStorage.setItem("filterYear", filterYear);
  }, [filterMovie, filterYear]);

  const handleFilterMovie = (ev) => setFilterMovie(ev.target.value);
  const handleFilterYear = (ev) => setFilterYear(ev.target.value);

  const handleClearFilters = () => {
    setFilterMovie("");
    setFilterYear("");
  };

  const allYears = scenes.map((scene) => scene.year);
  const uniqueYears = [...new Set(allYears)].sort((a, b) => a - b);

  // Ordenamos escenas alfabéticamente por el nombre de la película
const sortedScenes = [...scenes].sort((a, b) => a.movie.localeCompare(b.movie));

// Filtramos las escenas ordenadas
const filteredScenes = sortedScenes.filter(
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
        onClearFilters={handleClearFilters}
      />
      {filteredScenes.length > 0 ? (
        <SceneList scenes={filteredScenes} />
      ) : (
        <NoResultsMessage
          scenes={scenes}
          filterMovie={filterMovie}
          filterYear={filterYear}
        />
      )}
    </div>
  );
}

LandingPage.propTypes = {
  scenes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LandingPage;