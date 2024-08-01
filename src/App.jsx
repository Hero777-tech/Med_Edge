import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import DoctorPage from "./pages/doctor/DoctorPage";
import PatientPage from "./pages/patient/PatientPage";
import PathologyPage from "./pages/pathology/PathologyPage";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Researcher from "./pages/researcher/Researcher";
import Professor from "./pages/professor/Professor";

// A simple auth check function
const isAuthenticated = () => !!localStorage.getItem('token');

// Protected route component
const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route 
          path="/doctor" 
          element={
            <ProtectedRoute>
              <DoctorPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/patient" 
          element={
            <ProtectedRoute>
              <PatientPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/pathology" 
          element={
            <ProtectedRoute>
              <PathologyPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/researcher" 
          element={
            <ProtectedRoute>
              <Researcher />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/professor" 
          element={
            <ProtectedRoute>
              <Professor />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;