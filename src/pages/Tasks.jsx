import React from "react";
import TaskCard from "../components/TaskCard";

export default function Tasks() {
  return (
    <div>
      <h2>My Tasks</h2>
      <TaskCard title="Read 5 pages of Quran" dueDate="2025-08-15" />
      <TaskCard title="Attend Islamic lecture" dueDate="2025-08-17" />
      <TaskCard title="Donate to charity" dueDate="2025-08-20" />
    </div>
  );
}
