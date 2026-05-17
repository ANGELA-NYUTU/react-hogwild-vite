import { useState } from "react";
import Nav from "./Nav";
import hogsData from "../porkers_data";

import HogList from "./HogList";
import FilterSortBar from "./FilterSortBar";
import HogForm from "./HogForm";

function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [showGreasedOnly, setShowGreasedOnly] = useState(false);
  const [sortBy, setSortBy] = useState("");
  const [hiddenHogs, setHiddenHogs] = useState([]);

  function hideHog(name) {
    setHiddenHogs([...hiddenHogs, name]);
  }

  function addHog(newHog) {
    setHogs(prev => [...prev, newHog]);
  }

  function getDisplayedHogs() {
    let list = hogs.filter(hog => !hiddenHogs.includes(hog.name));

    if (showGreasedOnly) {
      list = list.filter(hog => hog.greased);
    }

    if (sortBy === "name") {
      list = [...list].sort((a, b) =>
        a.name.localeCompare(b.name)
      );
    }

    if (sortBy === "weight") {
      list = [...list].sort((a, b) => a.weight - b.weight);
    }

    return list;
  }

  return (
    <div className="App">
      <Nav />

      <h1>HogWild</h1>

      <FilterSortBar
        showGreasedOnly={showGreasedOnly}
        setShowGreasedOnly={setShowGreasedOnly}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <HogForm onAddHog={addHog} />

      <HogList hogs={getDisplayedHogs()} onHide={hideHog} />
    </div>
  );
}

export default App;