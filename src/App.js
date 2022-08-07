import React, { useState } from "react";
import DisplayEntries from "./Components/DisplayEntries/DisplayEntries";
import AddEntryForm from "./Components/AddEntry/AddEntryFrom";

function App() {
  const [entries, setEntries] = useState([
    { weight: 175, date: "11-23-2021" },
    { weight: 200, date: "11-24-2021" },
  ]);

  function addNewEnrty(entry) {
    let tempEntries = [entry, ...entries];

    setEntries(tempEntries);
  }

  return (
    <div>
      <DisplayEntries parentEntries={entries} />
      <AddEntryForm addNewEntryProperty={addNewEnrty} />
    </div>
  );
}

export default App;
