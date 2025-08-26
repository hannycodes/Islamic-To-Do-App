import React, { useState } from "react";
import TaskForm from "./TaskForm";
import TaskCard from "./TaskCard";

const TaskApp = () => {
  const [tasks, setTasks] = useState([]);
  const [taskBeingEdited, setTaskBeingEdited] = useState(null);

  // Add or update task
  const handleAddTask = (taskData) => {
    if (taskBeingEdited) {
      setTasks(tasks.map(task =>
        task.id === taskBeingEdited.id ? { ...task, ...taskData } : task
      ));
      setTaskBeingEdited(null);
    } else {
      setTasks([...tasks, { ...taskData, id: Date.now(), completed: false }]);
    }
  };

  // Toggle complete
  const handleToggleComplete = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ));
  };

  // Delete task
  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  // Edit task (pre-fill form)
  const handleEditTask = (task) => {
    setTaskBeingEdited(task);
  };

  return (
    <div className="task-app">
      <h1>Task Manager</h1>

      <TaskForm
        onSubmit={handleAddTask}
        initialTask={taskBeingEdited}
      />

      {/* Empty state */}
      {tasks.length === 0 && (
        <p className="empty-message">Start by adding your first task!!</p>
      )}

      {/* Task list */}
      <div className="task-list">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            title={task.title}
            description={task.description}
            dueDate={task.dueDate}
            priority={task.priority}
            completed={task.completed}
            onToggle={() => handleToggleComplete(task.id)}
            onDelete={() => handleDeleteTask(task.id)}
            onEdit={() => handleEditTask(task)}
          />
        ))}
      </div>

      {/* Motivational message */}
      {tasks.length > 0 && tasks.every(task => task.completed) && (
        <p className="motivation-message">Keep up the good work!!</p>
      )}
    </div>
  );
};

export default TaskApp;
