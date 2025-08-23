import React from "react";
import "./TaskCard.css";

const TaskCard = ({ title, description, dueDate, priority, completed, onToggle, onDelete, onEdit }) => {

  const handleEditClick = () => {
    const updatedTitle = prompt("Edit Title:", title);
    const updatedDescription = prompt("Edit Description:", description);
    const updatedDueDate = prompt("Edit Due Date:", dueDate);
    const updatedPriority = prompt("Edit Priority (Low/Medium/High):", priority);

    if (updatedTitle) {
      onEdit({
        title: updatedTitle,
        description: updatedDescription,
        dueDate: updatedDueDate,
        priority: updatedPriority,
      });
    }
  };

  return (
    <div className={`task-card ${completed ? "completed" : ""}`}>
      <div>
        <h3>{title}</h3>
        {description && <p className="description">{description}</p>}
        <p>Due: {dueDate}</p>
        <p className={`priority ${priority.toLowerCase()}`}>{priority}</p>
      </div>
      <div className="task-buttons">
        <button className="complete-btn" onClick={onToggle}>{completed ? "Undo" : "Complete"}</button>
        <button className="edit-btn" onClick={handleEditClick}>Edit</button>
        <button className="delete-btn" onClick={onDelete}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;
