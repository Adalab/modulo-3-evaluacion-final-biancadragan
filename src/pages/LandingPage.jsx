import { useState } from "react";
import Filters from "../components/Filters";
import SceneList from "../components/SceneList";
import PropTypes from "prop-types";

function LandingPage({ scenes }) {
  const [filterMovie, setFilterMovie] = useState("");
  const [filterYear, setFilterYear] = useState("");

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
      <SceneList scenes={filteredScenes} />
    </div>
  );
}

LandingPage.propTypes = {
  scenes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default LandingPage;
