import React, { useState, useEffect } from 'react';
import { getLocation } from "./api";

function App() {
  const [locations, setLocations] = useState('');
  const [query, setQuery] = useState('');
  useEffect(() => {
    async function fetch() {
      try {
        const data = await getLocation(query);
        console.log(data)
        setLocations(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetch()
  }, [query])
  return (
    <div className="App">
      <form>
        <input type="text"
            placeholder="Search by title or teacher name..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        <div id="results">
          {locations && locations.map((location, index) => <div key={index}>{location}</div>)}
        </div>
      </form>
    </div>
  );
}

export default App;
