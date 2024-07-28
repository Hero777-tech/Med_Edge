import React, { useState } from "react";
import style from "./Research.module.css";

const projects = [
  {
    name: "Genetic Research on Plant Adaptations",
    status: "Ongoing",
    teamMembers: ["Dr. Alice", "Dr. Bob", "Dr. Carol", "Dr. Dave"],
    deadline: "Dec 2024",
  },
  {
    name: "AI in Healthcare",
    status: "Completed",
    teamMembers: ["Dr. Eve", "Dr. Frank", "Dr. Grace", "Dr. Heidi"],
    deadline: "Jan 2023",
  },
  {
    name: "Quantum Computing Advances",
    status: "In Progress",
    teamMembers: ["Dr. Ivan", "Dr. Judy", "Dr. Ken", "Dr. Leo"],
    deadline: "Sep 2024",
  },
  {
    name: "Climate Change Impact Studies",
    status: "Ongoing",
    teamMembers: ["Dr. Mallory", "Dr. Nancy", "Dr. Oscar", "Dr. Peggy"],
    deadline: "Mar 2025",
  },
  {
    name: "Blockchain Security",
    status: "Planned",
    teamMembers: ["Dr. Quentin", "Dr. Robert", "Dr. Sybil", "Dr. Trent"],
    deadline: "Jun 2024",
  },
  {
    name: "Renewable Energy Solutions",
    status: "In Progress",
    teamMembers: ["Dr. Ursula", "Dr. Victor", "Dr. Walter", "Dr. Xavier"],
    deadline: "Nov 2024",
  },
];

function ResearchProject() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);

  const handleSelectProject = (index) => {
    setSelectedProjectIndex(index);
  };

  return (
    <div className={style.main}>
      <div className={style.name}>
        <h5>Project Name</h5>
        {projects.map((project, index) => (
          <div
            key={index}
            className={`${style.projectName} ${
              selectedProjectIndex === index ? style.active : ""
            }`}
            onClick={() => handleSelectProject(index)}
          >
            {project.name}
          </div>
        ))}
      </div>

      <div className={style.details}>
        <h5>Project Details</h5>
        <hr />
        {selectedProjectIndex !== null && (
          <>
            <p>
              <strong>Project Name:</strong>{" "}
              {projects[selectedProjectIndex].name}
            </p>
            <p>
              <strong>Status:</strong> {projects[selectedProjectIndex].status}
            </p>
            <p>
              <strong>Team Members:</strong>
            </p>
            <ul>
              {projects[selectedProjectIndex].teamMembers.map(
                (member, memberIndex) => (
                  <li key={memberIndex}>{member}</li>
                )
              )}
            </ul>
            <p>
              <strong>Deadline:</strong>{" "}
              {projects[selectedProjectIndex].deadline}
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default ResearchProject;
