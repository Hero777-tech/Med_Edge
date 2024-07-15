import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import style from "./Collaboration.module.css";

function Collaboration() {
  const collaborators = [
    { name: 'Dr. John Smith', role: 'Doctor', description: 'Expert in cardiovascular diseases.',email:'johnsmith@gmail.com' },
    { name: 'Jane Doe', role: 'Engineer', description: 'Specialist in biomedical engineering.',email:'janedoe@gmail.com' },
    { name: 'Dr. Alice Johnson', role: 'Researcher', description: 'Conducts research in medical imaging.',email:'alice@gmail.com' },
  ];
  const CollaboratorCard = ({ name, role, description,email }) => {
    return (
      <div className="collaborator-card">  
        <div class="card w-75 mb-3">
          <div class="card-body">
              <h2 class="card-title">{name}</h2>
              <h5 class="card-title">{role}</h5>
              <p class="card-text">{description}</p>
              <p class="card-text">{email}</p>
                <a className="collablink" href={`mailto:${email}`} class="btn btn-primary">Collaborate</a>
              </div>
        </div>
        
        
      </div>
    );
  };

  return (
    
    <div>
      
       <h1>Collaboration Page</h1>
       <p>Connecting Doctors, Engineers, and Researchers</p>
      <div className="collaborators">
        {collaborators.map((collaborator, index) => (
          <CollaboratorCard
            key={index}
            name={collaborator.name}
            role={collaborator.role}
            email={collaborator.email}
            description={collaborator.description} 
          />
        ))}
      </div>
    </div>
  );
}

export default Collaboration;
