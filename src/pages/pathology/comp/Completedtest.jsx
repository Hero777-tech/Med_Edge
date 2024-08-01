import style from "./Completedtest.module.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";
import axios from 'axios';

function PendingLabTests() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async () => {
    const result = await axios.get('http://localhost:5000/api/tests');
    setData(result.data);
    setFilteredData(result.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const setDisplayData = (event) => {
    setSearchText(event.target.value.toLowerCase());
    const filtered = data.filter((item) => {
      const lowerId = item.patientId.toString().toLowerCase();
      return lowerId.includes(event.target.value.toLowerCase());
    });
    setFilteredData(filtered);
  };

  const handleFileUpload = async (id) => {
    const fileInput = document.getElementById(`file-input-${id}`);
    const formData = new FormData();
    formData.append('file', fileInput.files[0]);

    await axios.post(`http://localhost:5000/api/upload/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });

    setData((prevData) =>
      prevData.map((item) =>
        item.patientId === id ? { ...item, isUploaded: true } : item
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
              <tr key={item.patientId}>
                <td>{item.patientId}</td>
                <td>{item.patientName}</td>
                <td>{item.testType}</td>
                <td>{item.dueDate}</td>
                <td>{item.referBy}</td>
                <td>
                  <input
                    type="file"
                    style={{ display: "none" }}
                    id={`file-input-${item.patientId}`}
                    onChange={() => handleFileUpload(item.patientId)}
                  />
                  <label htmlFor={`file-input-${item.patientId}`}>
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
