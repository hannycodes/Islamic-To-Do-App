import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<h1>Welcome to My Islamic To-Do App</h1>} />
        <Route path="/tasks" element={<h1>Tasks Page</h1>} />
        <Route path="/explore" element={<h1>Explore Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </>
  );
}
