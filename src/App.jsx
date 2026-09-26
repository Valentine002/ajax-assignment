import { useState } from "react";
import Header from "./components/Header";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import TaskList from "./components/TaskList";
import UserProfile from "./components/UserProfile";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Learn React basics", done: true },
    { id: 2, text: "Understand props and state", done: false },
    { id: 3, text: "Practice event handling", done: false },
  ]);

  const [newTask, setNewTask] = useState("");

  function addTask(event) {
    event.preventDefault(); // stop page reload
    const text = newTask.trim();
    if (!text) return;

    setTasks([...tasks, { id: Date.now(), text, done: false }]);
    setNewTask("");
  }

  function toggleTask(id) {
    setTasks(
      tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  function deleteTask(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  return (
    <div className="app">
      <Header
        title="React Concepts Demo"
        subtitle="Components · JSX · Props · State · Events"
      />

      <Greeting />
      <Counter />

      <TaskList
        tasks={tasks}
        newTask={newTask}
        onNewTaskChange={setNewTask}
        onAddTask={addTask}
        onToggleTask={toggleTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
}

export default App;