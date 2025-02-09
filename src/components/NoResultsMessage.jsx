import PropTypes from "prop-types";

function NoResultsMessage({ scenes, filterMovie, filterYear }) {
  const movieMatches = scenes.filter((scene) =>
    scene.movie.toLowerCase().includes(filterMovie.toLowerCase())
  );

  const movieExists = movieMatches.length > 0;
  const yearExistsForMovie = movieMatches.some(
    (scene) => scene.year === parseInt(filterYear)
  );

  const availableYears = [...new Set(movieMatches.map((scene) => scene.year))].sort((a, b) => a - b);

  return (
    <p className="no-results">
      {!movieExists ? (
        <>No movie matches the search term <strong>"{filterMovie}"</strong>.</>
      ) : !yearExistsForMovie ? (
        <>
          The movie <strong>"{filterMovie}"</strong> exists, but not for the selected year <strong>"{filterYear}"</strong>.<br />
          Available years: <strong>{availableYears.join(", ")}</strong>.
        </>
      ) : (
        <>No results found.</>
      )}
    </p>
  );
}

NoResultsMessage.propTypes = {
  scenes: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterMovie: PropTypes.string.isRequired,
  filterYear: PropTypes.string.isRequired,
};

export default NoResultsMessage;

