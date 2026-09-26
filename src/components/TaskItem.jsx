function TaskItem({ task, onToggle, onDelete }) {
    return (
        <li className={task.done ? "task done" : "task"}>
            <label>
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => onToggle(task.id)}
                />
                <span>{task.text}</span>
            </label>

            <button className="delete" onClick={() => onDelete(task.id)}>
                ✕
            </button>
        </li>
    );
}

export default TaskItem;