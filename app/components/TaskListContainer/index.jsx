import styles from "./style.module.scss";
import TaskItem from "../TaskItem";

export default function TaskListContainer({
  tasks,
  onDeleteTask,
  onToggleTaskCompletion,
}) {
  return (
    <section className={styles["task-list-container"]}>
      <h3>Suas tarefas de hoje</h3>
      <ul>
        {tasks
          .filter((task) => !task.completed)
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDeleteTask={onDeleteTask}
              onToggleTaskCompletion={onToggleTaskCompletion}
            />
          ))}
      </ul>
      <h3>Tarefas finalizadas</h3>
      <ul>
        {tasks
          .filter((task) => task.completed)
          .map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onDeleteTask={onDeleteTask}
              onToggleTaskCompletion={onToggleTaskCompletion}
            />
          ))}
      </ul>
    </section>
  );
}
