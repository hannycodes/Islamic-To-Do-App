import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import TaskCard from "./components/TaskCard";
import TaskForm from "./components/TaskForm";
import "./App.css";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Read Surah Al-Kahf", dueDate: "2025-08-15", description: "", priority: "Medium", completed: false },
    { id: 2, title: "Morning and Evening Adhkar", dueDate: "2025-08-10", description: "", priority: "Low", completed: false },
    { id: 3, title: "Pray Tahajjud", dueDate: "2025-08-10", description: "", priority: "High", completed: false },
  ]);

  // Add new task from TaskForm
  const handleAddTask = (taskData) => {
    const newTask = {
      id: Date.now(),
      title: taskData.title,
      description: taskData.description || "",
      dueDate: taskData.dueDate || "No due date",
      priority: taskData.priority || "Low",
      completed: false,
    };

    setTasks([newTask, ...tasks]); // add to top
    console.log("Updated Task List:", [newTask, ...tasks]);
  };

  // Toggle completed
const handleToggleComplete = (taskId) => {
  const updatedTasks = tasks.map((task) =>
    task.id === taskId ? { ...task, completed: !task.completed } : task
  );
  setTasks(updatedTasks);
};

// Delete task
const handleDeleteTask = (taskId) => {
  const filteredTasks = tasks.filter((task) => task.id !== taskId);
  setTasks(filteredTasks);
};

// Edit task
const handleEditTask = (taskId, updatedTaskData) => {
  const updatedTasks = tasks.map((task) =>
    task.id === taskId ? { ...task, ...updatedTaskData } : task
  );
  setTasks(updatedTasks);
};

  // Toggle completed status
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

              {/* TaskForm */}
              <TaskForm onSubmit={handleAddTask} />

              {/* Task List */}
              {tasks.map((task) => (
                <TaskCard
                  key={task.id}
                  title={task.title}
                  description={task.description}
                  dueDate={task.dueDate}
                  priority={task.priority}
                  completed={task.completed}
                  onToggle={() => toggleComplete(task.id)}
                  onDelete={() => handleDeleteTask(task.id)}
                  onEdit={(updatedData) => handleEditTask(task.id, updatedData)}
                />
              ))}

              {/* Motivational Message */}
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
