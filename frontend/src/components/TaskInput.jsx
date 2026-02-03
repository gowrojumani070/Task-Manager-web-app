import { useState } from 'react';
import './TaskInput.css';

function TaskInput({ onAddTask }) {
    const [title, setTitle] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim() || isLoading) return;

        setIsLoading(true);
        try {
            await onAddTask(title.trim());
            setTitle('');
        } catch (error) {
            console.error('Failed to add task:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form className="task-input" onSubmit={handleSubmit}>
            <div className="input-wrapper">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Add a new task..."
                    className="task-input-field"
                    disabled={isLoading}
                />
                <button
                    type="submit"
                    className="add-button"
                    disabled={!title.trim() || isLoading}
                >
                    {isLoading ? (
                        <span className="spinner"></span>
                    ) : (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="12" y1="5" x2="12" y2="19"></line>
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                    )}
                </button>
            </div>
        </form>
    );
}

export default TaskInput;
