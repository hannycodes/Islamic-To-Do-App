import React from "react";
import "./TaskCard.css";

export default function TaskCard({ title, dueDate }) {
  return (
    <div className="task-card">
      <h3>{title}</h3>
      <p>Due Date: {dueDate}</p>
    </div>
  );
}
