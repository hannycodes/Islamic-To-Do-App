import React, { useState, useEffect } from "react";
import "./TaskForm.css"

const TaskForm = ({ onSubmit, initialTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Low");
   const [error, setError] = useState("");

  // Prefill fields if editing a task
  useEffect(() => {
    if (initialTask) {
      setTitle(initialTask.title);
      setDescription(initialTask.description);
      setDueDate(initialTask.dueDate);
      setPriority(initialTask.priority);
    }
  }, [initialTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    //validation
    if(!title.trim()){
      setError("Task title cannot be blank");
      return;
    }

    onSubmit({ title, description, dueDate, priority });

    setError("");

    // Reset form only if adding a new task
    if (!initialTask) {
      setTitle("");
      setDescription("");
      setDueDate("");
      setPriority("Low");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task title"
      />

      {error && <p className="error-message">{error}</p>}

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description (optional)"
      />
      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">{initialTask ? "Update Task" : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
