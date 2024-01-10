import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercises.component";
import CreatExercise from "./components/creat-exercises.component";
import CreatUser from "./components/creat-user.component";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <br />
        <Routes>
          <Route path="/" exact element={<ExerciseList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/creat" element={<CreatExercise />} />
          <Route path="/user" element={<CreatUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
