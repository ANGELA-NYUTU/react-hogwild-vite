function FilterSortBar({
  showGreasedOnly,
  setShowGreasedOnly,
  sortBy,
  setSortBy
}) {
  return (
    <div>

      <div>
        <input
          type="checkbox"
          id="greased"
          checked={showGreasedOnly}
          onChange={() => setShowGreasedOnly(!showGreasedOnly)}
        />
        <label htmlFor="greased">
          Greased Pigs Only?
        </label>
      </div>

      <div>
        <label htmlFor="sort">Sort by:</label>
        <select
          id="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>

    </div>
  );
}

export default FilterSortBar;