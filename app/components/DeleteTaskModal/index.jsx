import "../../styles/modals.scss";

export default function AddTaskModal({ onClose, onDelete }) {
  return (
    <div className="modal-container">
      <section className="modal" id="delete-task-modal">
        <h2>Deletar tarefa</h2>
        <p>Tem certeza que você deseja deletar essa tarefa?</p>
        <div className="modal-buttons-container">
          <button className="cancel-button" onClick={onClose}>
            Cancelar
          </button>
          <button className="delete-button" onClick={onDelete}>
            Deletar
          </button>
        </div>
      </section>
    </div>
  );
}
