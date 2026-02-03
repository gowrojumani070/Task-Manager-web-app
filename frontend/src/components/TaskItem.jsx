import { useState } from 'react';
import './TaskItem.css';

function TaskItem({ task, onToggleComplete, onDelete }) {
    const [isDeleting, setIsDeleting] = useState(false);
    const [isToggling, setIsToggling] = useState(false);

    const handleToggle = async () => {
        if (isToggling) return;
        setIsToggling(true);
        try {
            await onToggleComplete(task.id, !task.completed);
        } catch (error) {
            console.error('Failed to toggle task:', error);
        } finally {
            setIsToggling(false);
        }
    };

    const handleDelete = async () => {
        if (isDeleting) return;
        setIsDeleting(true);
        try {
            await onDelete(task.id);
        } catch (error) {
            console.error('Failed to delete task:', error);
            setIsDeleting(false);
        }
    };

    return (
        <div className={`task-item ${task.completed ? 'completed' : ''} ${isDeleting ? 'deleting' : ''}`}>
            <button
                className={`checkbox ${task.completed ? 'checked' : ''}`}
                onClick={handleToggle}
                disabled={isToggling}
                aria-label={task.completed ? 'Mark as incomplete' : 'Mark as complete'}
            >
                {task.completed && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                )}
            </button>

            <span className="task-title">{task.title}</span>

            <button
                className="delete-button"
                onClick={handleDelete}
                disabled={isDeleting}
                aria-label="Delete task"
            >
                {isDeleting ? (
                    <span className="spinner"></span>
                ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                )}
            </button>
        </div>
    );
}

export default TaskItem;
