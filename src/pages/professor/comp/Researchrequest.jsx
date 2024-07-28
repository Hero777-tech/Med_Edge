import style from "./ResearchRequest.module.css";
import React, { useState, useRef, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
// import InputGroup from "react-bootstrap/InputGroup";

function ResearchRequest() {
  const data = [
    {
      requestor: "Dr.Bijoy",
      projectTitle: "Genetic research on plant adaptions",
      Description: "Using lab equipments for genetic testing",
      teamMembers: ["Dr.krishna - Doctor", "M. keeravani - Researcher"],
    },
    {
      requestor: "Dr. Sarah Jones",
      projectTitle: "Investigating Social Behavior in Wolves",
      Description:
        "This project will study pack dynamics and communication methods in wolves through field observations and non-invasive genetic sampling.",
      teamMembers: [
        "Dr. Michael Chen - Ethologist",
        "Ms. Emily Garcia - Field Researcher",
      ],
    },
    {
      requestor: "Prof. Anya Kapoor",
      projectTitle: "Optimizing Solar Panel Efficiency",
      Description:
        "We aim to develop new materials and designs for solar panels to improve their energy conversion efficiency and reduce manufacturing costs.",
      teamMembers: [
        "Dr. David Li - Materials Science",
        "Mr. Rohan Patel - Electrical Engineer",
      ],
    },
    {
      requestor: "Dr. Antonio Rossi",
      projectTitle: "Impact of Climate Change on Crop Yields",
      Description:
        "This research investigates the effects of rising temperatures and changing precipitation patterns on agricultural productivity, aiming to develop adaptation strategies for farmers.",
      teamMembers: [
        "Dr. Maria Hernandez - Agronomist",
        "Mr. Pierre Dubois - Climate Scientist",
      ],
    },
    {
      requestor: "Dr. Emily Wang",
      projectTitle: "Identifying Novel Anti-Cancer Compounds",
      Description:
        "Utilizing high-throughput screening and computational modeling, we aim to discover new drug candidates with potential for effective and targeted cancer treatment.",
      teamMembers: [
        "Dr. William Zhang - Molecular biologist",
        "Ms. Sophia Garcia - Bioinformatics Specialist",
      ],
    },
  ];
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [declinedRequests, setDeclinedRequests] = useState([]);

  const setDisplay = (event) => {
    const newSearchText = event.target.value.toLowerCase();
    setSearchText(newSearchText);

    // Update filtered data using a callback to ensure latest searchText is used
    setFilteredData((prevFilteredData) => {
      return data.filter((item) => {
        const name = item.requestor.toString().toLowerCase();
        const title = item.projectTitle.toString().toLowerCase();
        return (
          (name.includes(newSearchText) || title.includes(newSearchText)) &&
          !declinedRequests.includes(item.requestor)
        );
      });
    });
  };

  const handleDecline = (item) => {
    setDeclinedRequests([...declinedRequests, item.requestor]); // Add declined requestor to the list
    const remain = filteredData.filter(
      (temp) => temp.requestor !== item.requestor
    );
    setFilteredData(remain);
  };

  return (
    <div className={style.contain}>
      <div className={style.left}>
        <h4>Research requests</h4>
        <input
          type="text"
          value={searchText}
          onChange={setDisplay}
          className={style.inp}
          placeholder="Search Requests..."
        />
        <Table responsive className={style.tabData}>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>
                  <p>
                    <b>Requestor:</b> {item.requestor}
                  </p>
                  <p>
                    <b>Project Title:</b> {item.projectTitle}
                  </p>
                  <p>
                    <b>Description:</b> {item.Description}
                  </p>
                  <Button variant="primary">Accept</Button>{" "}
                  <Button onClick={() => handleDecline(item)} variant="primary">
                    Decline
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className={style.right}>
        <h2>Create New Project</h2>
        <form className={style.list}>
          <label htmlFor="projectName">Project Name:</label>
          <input type="text" id="projectName" name="projectName" required />
          <label htmlFor="deadline">Deadline:</label>
          <input type="date" id="deadline" name="deadline" required />
          <label htmlFor="status">Status:</label>
          <select id="status" name="status">
            <option value="toStart">Yet to start</option>
            <option value="in-progress">In Progress</option>
            {/* <option value="completed">Completed</option> */}
          </select>
          <label>Team Members:</label>
          <div className="team-members">
            <input
              type="checkbox"
              id="student"
              name="teamMembers[]"
              value="student"
            />

            <label htmlFor="student">Student</label>
            <br />
            <input
              type="checkbox"
              id="professor"
              name="teamMembers[]"
              value="professor"
            />

            <label htmlFor="professor">Professor</label>
            <br />
            <input
              type="checkbox"
              id="researcher"
              name="teamMembers[]"
              value="researcher"
            />

            <label htmlFor="researcher">Researcher</label>
            <br />
            <input
              type="checkbox"
              id="doctor"
              name="teamMembers[]"
              value="doctor"
            />

            <label htmlFor="doctor">Doctor</label>
            <br />
          </div>
          <label htmlFor="notes">Notes:</label>
          <textarea id="notes" name="notes" rows="4"></textarea>
          <br />
          <Button variant="primary">Create Project</Button>
        </form>
      </div>
    </div>
  );
}

export default ResearchRequest;
