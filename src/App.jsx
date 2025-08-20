import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Read Surah Al-Kahf", dueDate: "2025-08-15", completed: false },
    { id: 2, title: "Morning and Evening Adhkar", dueDate: "2025-08-10", completed: false },
    { id: 3, title: "Pray Tahajjud", dueDate: "2025-08-10", completed: false },
  ]);

  const [newTask, setNewTask] = useState("");
  const [newDueDate, setNewDueDate] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;
    const task = {
      id: Date.now(),
      title: newTask,
      dueDate: newDueDate || "No due date",
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
    setNewDueDate("");
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <>
      <Header />

      <Routes>
        {/* Homepage */}
        <Route
          path="/"
          element={<h1 className="home-title">Welcome to My Islamic To-Do App</h1>}
        />

        {/* Tasks Page */}
        <Route
          path="/tasks"
          element={
            <main className="tasks-page">
              <h1>Tasks Page</h1>

              {/* New Task Inputs */}
              <div className="new-task-input">
                <input
                  type="text"
                  placeholder="Enter new task..."
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
                <input
                  type="date"
                  value={newDueDate}
                  onChange={(e) => setNewDueDate(e.target.value)}
                />
                <button onClick={addTask}>Add Task</button>
              </div>

              {/* Task List */}
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  title={task.title}
                  dueDate={task.dueDate}
                  completed={task.completed}
                  onToggle={() => toggleComplete(task.id)}
                />
              ))}
              
              {tasks.length > 0 && tasks.every((task) => task.completed) && (
  <p className="motivation-message">Keep up the good work!!</p>
)}
            </main>
          }
        />

        {/* Other Pages */}
        <Route path="/explore" element={<h1>Explore Page</h1>} />
        <Route path="/about" element={<h1>About Page</h1>} />
      </Routes>
    </>
  );
}
