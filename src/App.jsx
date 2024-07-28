import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DoctorPage from "./pages/doctor/DoctorPage";
import PatientPage from "./pages/patient/PatientPage";
import PathologyPage from "./pages/pathology/PathologyPage";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Researcher from "./pages/researcher/Researcher";
import Professor from "./pages/professor/Professor";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/doctor" element={<DoctorPage />} />
        <Route path="/patient" element={<PatientPage />} />
        <Route path="/pathology" element={<PathologyPage />} />
        <Route path="/researcher" element={<Researcher />} />
        <Route path="/professor" element={<Professor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
