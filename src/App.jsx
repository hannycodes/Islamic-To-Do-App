import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<h1>Welcome to My Islamic To-Do App</h1>} />
        <Route path="/tasks" element={
          <main>
          
          <h1>Tasks Page</h1>
          <TaskCard title="Read Surah Al-Khaf" dueDate="15-08-2025"/>
          <TaskCard title="Morning and Evening Adhkar" dueDate="10-08-2025"/>
          <TaskCard title="Pray Tahajjud" dueDate="10-08-2025"/>
      
      </main>
    } 
    />

        <Route path="/explore" element={<h1>Explore Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </>
  );
}
