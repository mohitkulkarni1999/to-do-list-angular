import { Injectable } from '@angular/core';

// Define the Task interface with the new properties
interface Task {
  name: string;
  assignedTo: string;
  status: string;
  dueDate: string;
  priority: string;
  comments: string;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: Task[] = []; // Initialize tasks as an empty array

  // Fetch all tasks
  getTasks() {
    return this.tasks;
  }

  // Add a task
  addTask(task: Task) {
    if (task.name.trim()) {
      this.tasks.push(task);
    }
  }

  // Delete a task
  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  // Reset the task list (for refresh)
  resetTasks() {
    this.tasks = []; // Reset tasks to an empty array
  }
}
