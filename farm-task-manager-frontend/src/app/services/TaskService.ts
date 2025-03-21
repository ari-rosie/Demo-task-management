import axios from "axios";

export class TaskService {
    static async createTask(task: string): Promise<any> {
        try {
            const res = await axios.post('http://localhost:8080/api/tasks', {name: task, completed: false});
            return res.data;
        }
        catch (error) { 
            console.error('Error adding task:', error); 
            return {};
        }
    }

    static async deleteTask(taskId: number): Promise<void> {
        try {
            await axios.delete(`http://localhost:8080/api/tasks/${taskId}`);
          } catch (error) {
            console.error('Error adding task:', error);
          }
        console.log("Deleting task with ID:", taskId);
    }

    static async getAllTasks(): Promise<any[]> {
        try {
            const res = await axios.get('http://localhost:8080/api/tasks')
            return res.data;
        }
        catch (error) { 
            console.error('Error getting tasks:', error); 
            return [];
        }
    }
}