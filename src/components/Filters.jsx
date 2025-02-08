import PropTypes from "prop-types";

function Filters({ filterMovie, filterYear, onFilterMovie, onFilterYear, uniqueYears }) {
  return (
    <form className="filters">
      <input
        id="filterMovie"
        className="filter__input"
        type="text"
        placeholder="Filter by movie"
        value={filterMovie}
        onChange={onFilterMovie}
      />
      <select
        id="filterYear" className="filter__select" value={filterYear} onChange={onFilterYear}>
        <option value="">Select year</option>
        {uniqueYears.map((year) => (
          <option key={year} value={year}>
            {year}
          </option>
        ))}
      </select>
    </form>
  );
}

Filters.propTypes = {
  filterMovie: PropTypes.string.isRequired,
  filterYear: PropTypes.string.isRequired,
  onFilterMovie: PropTypes.func.isRequired,
  onFilterYear: PropTypes.func.isRequired,
  uniqueYears: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Filters;
