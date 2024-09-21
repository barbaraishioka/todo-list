import "../../styles/modals.scss";
import { useState } from "react";

export default function AddTaskModal({ onClose, onAddTask }) {
  const [taskTitle, setTaskTitle] = useState("");

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      onAddTask(taskTitle);
      setTaskTitle(""); // Limpa o campo de entrada
    }
  };

  return (
    <div className="modal-container">
      <section className="modal" id="add-task-modal">
        <h2>Nova tarefa</h2>

        <div>
          <label htmlFor="new-task-input">Título</label>
          <input
            type="text"
            id="new-task-input"
            name="new-task-input"
            placeholder="Digite"
            maxLength={50}
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            autoFocus
          />
        </div>

        <div className="modal-buttons-container">
          <button className="cancel-button" onClick={onClose}>
            Cancelar
          </button>
          <button className="add-button" onClick={handleAddTask}>
            Adicionar
          </button>
        </div>
      </section>
    </div>
  );
}
