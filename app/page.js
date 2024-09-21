"use client";
import { useState } from "react";
import Header from "./components/Header";
import AddTaskModal from "./components/AddTaskModal";
import TaskListContainer from "./components/TaskListContainer";

export default function Home() {
  const [tasks, setTasks] = useState([]); // Estado para armazenar tarefas
  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);

  const openAddTaskModal = () => setIsAddTaskModalOpen(true);
  const closeAddTaskModal = () => setIsAddTaskModalOpen(false);

  const addTask = (taskTitle) => {
    const newTask = { id: Date.now(), title: taskTitle, completed: false }; // Adiciona um ID único
    setTasks([...tasks, newTask]);
    closeAddTaskModal();
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <>
      <Header />
      <main>
        <TaskListContainer
          tasks={tasks}
          onDeleteTask={deleteTask}
          onToggleTaskCompletion={toggleTaskCompletion}
        />
        <button onClick={openAddTaskModal} id="open-add-task-modal-button">
          Adicionar nova tarefa
        </button>

        {isAddTaskModalOpen && (
          <AddTaskModal onClose={closeAddTaskModal} onAddTask={addTask} />
        )}
      </main>
    </>
  );
}
