import PropTypes from "prop-types";

function Filters({ filterMovie, filterYear, onFilterMovie, onFilterYear, uniqueYears, onClearFilters }) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form className="filters" onSubmit={handleSubmit}>
      <div className="filters__group">
        <input
          id="filterMovie"
          className="filter__input"
          type="text"
          placeholder="Filter by movie"
          value={filterMovie}
          onChange={onFilterMovie}
        />
        <select
          id="filterYear"
          className="filter__select"
          value={filterYear}
          onChange={onFilterYear}
        >
          <option value="">Select year</option>
          {uniqueYears.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <button type="button" className="filter__clear-button" onClick={onClearFilters}>
          Clear Filters
        </button>
      </div>
    </form>

  );
}

export default Filters;

Filters.propTypes = {
  filterMovie: PropTypes.string.isRequired,
  filterYear: PropTypes.string.isRequired,
  onFilterMovie: PropTypes.func.isRequired,
  onFilterYear: PropTypes.func.isRequired,
  uniqueYears: PropTypes.arrayOf(PropTypes.number).isRequired,
  onClearFilters: PropTypes.func.isRequired,
};
