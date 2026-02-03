import { useState, useEffect } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { api } from './services/api';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch tasks on mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setIsLoading(true);
      const data = await api.getTasks();
      setTasks(data);
      setError(null);
    } catch (err) {
      setError('Failed to load tasks. Please check if the backend is running.');
      console.error('Error fetching tasks:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddTask = async (title) => {
    const newTask = await api.createTask(title);
    setTasks((prev) => [newTask, ...prev]);
  };

  const handleToggleComplete = async (id, completed) => {
    const updated = await api.updateTask(id, { completed });
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? updated : task))
    );
  };

  const handleDeleteTask = async (id) => {
    await api.deleteTask(id);
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  return (
    <div className="app">
      <div className="background-gradient"></div>
      <div className="container">
        <header className="header">
          <h1>Task Manager</h1>
          <p className="subtitle">Stay organized, get things done</p>
        </header>

        <main className="main">
          <TaskInput onAddTask={handleAddTask} />

          {error ? (
            <div className="error-message">
              <p>{error}</p>
              <button onClick={fetchTasks} className="retry-button">
                Try Again
              </button>
            </div>
          ) : (
            <TaskList
              tasks={tasks}
              onToggleComplete={handleToggleComplete}
              onDelete={handleDeleteTask}
              isLoading={isLoading}
            />
          )}
        </main>

        <footer className="footer">
          <p>Built with React + Django</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
