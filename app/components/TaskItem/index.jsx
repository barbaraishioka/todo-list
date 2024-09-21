import { useState } from "react";
import Image from "next/image";
import styles from "./style.module.scss";
import DeleteTaskModal from "../DeleteTaskModal";

export default function TaskItem({
  task,
  onDeleteTask,
  onToggleTaskCompletion,
}) {
  const [isDeleteTaskModalOpen, setIsDeleteTaskModalOpen] = useState(false);

  const openDeleteTaskModal = () => setIsDeleteTaskModalOpen(true);
  const closeDeleteTaskModal = () => setIsDeleteTaskModalOpen(false);

  return (
    <li className={styles["task-item-container"]}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTaskCompletion(task.id)}
      />
      <span
        style={{ textDecoration: task.completed ? "line-through" : "none" }}
      >
        {task.title}
      </span>
      <Image
        className="trash-icon"
        src="/trash.svg"
        alt="Ícone de lixeira para excluir item"
        width={24}
        height={24}
        onClick={openDeleteTaskModal}
      />
      {isDeleteTaskModalOpen && (
        <DeleteTaskModal
          onClose={closeDeleteTaskModal}
          onDelete={() => {
            onDeleteTask(task.id);
            closeDeleteTaskModal();
          }}
        />
      )}
    </li>
  );
}
