import TaskItem from './TaskItem';
import './TaskList.css';

function TaskList({ tasks, onToggleComplete, onDelete, isLoading }) {
    if (isLoading) {
        return (
            <div className="task-list-loading">
                <div className="loading-spinner"></div>
                <p>Loading tasks...</p>
            </div>
        );
    }

    if (tasks.length === 0) {
        return (
            <div className="task-list-empty">
                <div className="empty-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                        <line x1="12" y1="12" x2="12" y2="12.01"></line>
                    </svg>
                </div>
                <h3>No tasks yet</h3>
                <p>Add your first task to get started!</p>
            </div>
        );
    }

    const completedCount = tasks.filter(t => t.completed).length;
    const totalCount = tasks.length;

    return (
        <div className="task-list-container">
            <div className="task-list-header">
                <span className="task-count">
                    {completedCount} of {totalCount} completed
                </span>
                <div className="progress-bar">
                    <div
                        className="progress-fill"
                        style={{ width: `${(completedCount / totalCount) * 100}%` }}
                    ></div>
                </div>
            </div>
            <div className="task-list">
                {tasks.map((task) => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        onToggleComplete={onToggleComplete}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
}

export default TaskList;
