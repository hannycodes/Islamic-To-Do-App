import React from "react";
import "./TaskCard.css";

const TaskCard = ({ title, description, dueDate, priority, completed, onToggle }) => {
  return (
    <div className={`task-card ${completed ? "completed" : ""}`}>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      <p>Due: {dueDate}</p>
      <p>Priority: {priority}</p>
      <button onClick={onToggle}>{completed ? "Undo" : "Complete"}</button>
    </div>
  );
};

export default TaskCard;
