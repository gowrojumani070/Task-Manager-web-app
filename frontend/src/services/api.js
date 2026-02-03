// API service for Task Manager
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

export const api = {
    // Get all tasks
    async getTasks() {
        const response = await fetch(`${API_BASE_URL}/tasks/`);
        if (!response.ok) throw new Error('Failed to fetch tasks');
        return response.json();
    },

    // Create a new task
    async createTask(title) {
        const response = await fetch(`${API_BASE_URL}/tasks/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title }),
        });
        if (!response.ok) throw new Error('Failed to create task');
        return response.json();
    },

    // Update a task (toggle completed status)
    async updateTask(id, data) {
        const response = await fetch(`${API_BASE_URL}/tasks/${id}/`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) throw new Error('Failed to update task');
        return response.json();
    },

    // Delete a task
    async deleteTask(id) {
        const response = await fetch(`${API_BASE_URL}/tasks/${id}/`, {
            method: 'DELETE',
        });
        if (!response.ok) throw new Error('Failed to delete task');
        return true;
    },
};
