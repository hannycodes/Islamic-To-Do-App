import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Layout/Header";
import TaskApp from "./components/Task/TaskApp";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={<Home/>}
        />

        {/* Tasks Page */}
        <Route
          path="/tasks"
          element={<TaskApp/>}
        />

        {/* Other Pages */}
        <Route path="/explore" element={<h1>Explore Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </>
  );
}
