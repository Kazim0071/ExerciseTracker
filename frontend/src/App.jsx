import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar.component";
import ExerciseList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercises.component";
import CreatExercise from "./components/creat-exercises.component";
import CreatUser from "./components/creat-user.component";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navbar />
        <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" exact element={<ExerciseList />} />
            <Route path="/edit/:id" element={<EditExercise />} />
            <Route path="/creat" element={<CreatExercise />} />
            <Route path="/user" element={<CreatUser />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
