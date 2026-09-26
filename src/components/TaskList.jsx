import TaskItem from "./TaskItem";

function TaskList({
    tasks,
    newTask,
    onNewTaskChange,
    onAddTask,
    onToggleTask,
    onDeleteTask,
}) {
    const remaining = tasks.filter((t) => !t.done).length;

    return (
        <section className="card">
            <h2>Tasks · props + state + events</h2>

            <form onSubmit={onAddTask} className="row">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => onNewTaskChange(e.target.value)}
                    placeholder="Add a new task..."
                />
                <button type="submit">Add</button>
            </form>

            <ul className="task-list">
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onToggle={onToggleTask}
                        onDelete={onDeleteTask}
                    />
                ))}
            </ul>

            <p className="muted">{remaining} task(s) remaining</p>
        </section>
    );
}

export default TaskList;