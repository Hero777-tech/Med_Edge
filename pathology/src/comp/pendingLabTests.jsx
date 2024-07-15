import style from "./PendingLabTest.module.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import React, { useState, useEffect } from "react";
import UploadButton from "./upload/upload";
function PendingLabTests() {
  const fakedata = [
    {
      id: 2130,
      patientName: `John Doe`,
      testType: "CBC",
      dueDate: "June22 2024",
      referby: "Dr.Lee",
      doctorNum: 7386801664,
      patientNum: 6000644121,
    },
    {
      id: 2131,
      patientName: `John Kade`,
      testType: "CBC",
      dueDate: "June22 2024",
      referby: "Dr.Yaskin",
      patientNum: 6000644121,
      doctorNum: 6000644121,
    },
    {
      id: 2132,
      patientName: `John Daisy`,
      testType: "CBC",
      dueDate: "June22 2024",
      referby: "Dr.Lee",
      patientNum: 6000644121,
      doctorNum: 6000644121,
    },
    {
      id: 2133,
      patientName: `John Daisy`,
      testType: "CBC",
      dueDate: "June22 2024",
      referby: "Dr.Lee",
      patientNum: 6000644121,
      doctorNum: 6000644121,
    },
    {
      id: 2134,
      patientName: `John Daisy`,
      testType: "CBC",
      dueDate: "June22 2024",
      referby: "Dr.Lee",
      patientNum: 6000644121,
      doctorNum: 6000644121,
    },
    {
      id: 2135,
      patientName: `John Daisy`,
      testType: "CBC",
      dueDate: "June22 2024",
      referby: "Dr.Lee",
      patientNum: 6000644121,
      doctorNum: 6000644121,
    },
    {
      id: 2136,
      patientName: `John Daisy`,
      testType: "CBC",
      dueDate: "June22 2024",
      referby: "Dr.Lee",
      patientNum: 6000644121,
      doctorNum: 6000644121,
    },
    {
      id: 2137,
      patientName: `John Daisy`,
      testType: "CBC",
      dueDate: "June22 2024",
      referby: "Dr.Lee",
      patientNum: 6000644121,
      doctorNum: 6000644121,
    },
    {
      id: 2138,
      patientName: `John Daisy`,
      testType: "CBC",
      dueDate: "June22 2024",
      referby: "Dr.Lee",
      patientNum: 6000644121,
      doctorNum: 6000644121,
    },
    {
      id: 2139,
      patientName: `John Daisy`,
      testType: "CBC",
      dueDate: "June22 2024",
      referby: "Dr.Lee",
      patientNum: 6000644121,
      doctorNum: 6000644121,
    },
    {
      id: 2140,
      patientName: `John Daisy`,
      testType: "CBC",
      dueDate: "June22 2024",
      referby: "Dr.Lee",
      patientNum: 6000644121,
      doctorNum: 6000644121,
    },
    {
      id: 2141,
      patientName: `John Daisy`,
      testType: "CBC",
      dueDate: "June22 2024",
      referby: "Dr.Lee",
      patientNum: 6000644121,
      doctorNum: 6000644121,
    },
    {
      id: 2142,
      patientName: `John Daisy`,
      testType: "CBC",
      dueDate: "June22 2024",
      referby: "Dr.Lee",
      patientNum: 6000644121,
      doctorNum: 6000644121,
    },
  ];

  const [data, setData] = useState(fakedata);
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
        item.id === id
          ? { ...item, isUploaded: true, className: "uploaded" }
          : item
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
                  {/* <input
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
                  </label>{" "} */}
                  <UploadButton
                    handleFileUpload={handleFileUpload}
                    item={item}
                  />
                  <Button variant="success">Done</Button>
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
