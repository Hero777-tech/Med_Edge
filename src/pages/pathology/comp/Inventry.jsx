import style from "./Inventry.module.css";

import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";

function PendingLabTests() {
  // Helper function to generate random item names, statuses, and stock quantities
  const randomItem = () => {
    const items = ["Bandages", "Syringes", "Gloves", "Masks", "Thermometers"];
    return items[Math.floor(Math.random() * items.length)];
  };

  const randomStatus = () => {
    const statuses = ["High", "Low"];
    return statuses[Math.floor(Math.random() * statuses.length)];
  };

  const randomStock = () => {
    return Math.floor(Math.random() * 2000) + 1; // Random quantity between 1 and 500
  };

  // Generate 50 random data entries
  const generateData = () => {
    let data = [];
    for (let i = 0; i < 50; i++) {
      data.push({
        id: 2130 + i,
        items: randomItem(),
        status: randomStatus(),
        stocks: randomStock(),
      });
    }
    return data;
  };

  const [data, setData] = useState(generateData());
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  const setDisplayData = (event) => {
    setSearchText(event.target.value.toLowerCase());
    const filtered = data.filter((item) => {
      const lowerItems = item.items.toLowerCase();
      return lowerItems.includes(event.target.value.toLowerCase());
    });
    setFilteredData(filtered);
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const displayedData = filteredData;

  return (
    <div className={style.contain}>
      <div className={style["search-container"]}>
        <input
          type="text"
          placeholder="Search by Item..."
          value={searchText}
          onChange={setDisplayData}
        />
        <button
          className={style["search-button"]}
          onClick={() => setDisplayData({ target: { value: searchText } })}
        >
          Search
        </button>
      </div>
      <div className={style["table-container"]}>
        <Table responsive>
          <thead>
            <tr>
              <th>Items</th>
              <th>Status</th>
              <th>Stocks</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((item) => (
              <tr key={item.id}>
                <td>{item.items}</td>
                <td>{item.status}</td>
                <td>{item.stocks}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default PendingLabTests;
