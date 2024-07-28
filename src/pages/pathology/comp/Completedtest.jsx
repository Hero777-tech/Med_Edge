import style from "./Completedtest.module.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";

function PendingLabTests() {
  // Helper function to generate random names and dates
  const randomName = () => {
    const names = [
      "John Doe",
      "John Kade",
      "John Daisy",
      "Jane Doe",
      "Jane Kade",
    ];
    return names[Math.floor(Math.random() * names.length)];
  };

  const randomDate = () => {
    const month = "June";
    const day = Math.floor(Math.random() * 30) + 1;
    return `${month} ${day}, 2024`;
  };

  const randomDoctor = () => {
    const doctors = ["Dr.Lee", "Dr.Yaskin", "Dr.Smith"];
    return doctors[Math.floor(Math.random() * doctors.length)];
  };

  // Generate 50 random data entries
  const generateData = () => {
    let data = [];
    for (let i = 0; i < 50; i++) {
      data.push({
        id: 2130 + i,
        patientName: randomName(),
        testType: "CBC",
        dueDate: randomDate(),
        referby: randomDoctor(),
        isUploaded: false,
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
      const lowerId = item.id.toString().toLowerCase();
      return lowerId.includes(event.target.value.toLowerCase());
    });
    setFilteredData(filtered);
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleFileUpload = (id) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, isUploaded: true } : item
      )
    );
  };

  const displayedData = filteredData;

  return (
    <div className={style.contain}>
      <div className={style["search-container"]}>
        <input
          type="text"
          placeholder="Search by ID..."
          value={searchText}
          onChange={setDisplayData}
        />
        <Button
          variant="primary"
          onClick={() => setDisplayData({ target: { value: searchText } })}
        >
          Search
        </Button>
      </div>
      <div className={style["table-container"]}>
        <Table responsive>
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Patient Name</th>
              <th>Test type</th>
              <th>Due Date</th>
              <th>Referal by</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {displayedData.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.patientName}</td>
                <td>{item.testType}</td>
                <td>{item.dueDate}</td>
                <td>{item.referby}</td>
                <td>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    id={`file-input-${item.id}`}
                    onChange={() => handleFileUpload(item.id)}
                  />
                  <label htmlFor={`file-input-${item.id}`}>
                    <Button
                      variant={item.isUploaded ? "danger" : "primary"}
                      as="span"
                    >
                      {item.isUploaded ? "Uploaded" : "Upload"}
                    </Button>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default PendingLabTests;
