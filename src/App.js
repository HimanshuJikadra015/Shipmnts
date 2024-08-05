import React, { useState, useEffect } from "react";
import Table from "./components/Table";
import SearchBar from "./components/SearchBar";
import Filter from "./components/Filter";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/mockData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setFilteredData(jsonData);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error.message);
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <SearchBar data={data} setFilteredData={setFilteredData} />
      <Filter data={data} setFilteredData={setFilteredData} />
      <Table data={filteredData} />
    </div>
  );
};

export default App;