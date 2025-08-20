import React from "react";
import "./TaskCard.css";

const TaskCard = ({ title, dueDate, completed, onToggle }) => {
  return (
    <div className={`task-card ${completed ? "completed" : ""}`}>
      <div className="task-info">
        <h3>{title}</h3>
        <p>Due: {dueDate}</p>
      </div>
      <button className="complete-btn" onClick={onToggle}>
        {completed ? "Undo" : "Complete"}
      </button>
    </div>
  );
};

export default TaskCard;
