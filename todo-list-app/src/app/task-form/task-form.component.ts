import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule], // Ensure CommonModule is imported here
})
export class TaskFormComponent {
  task = {
    name: '',
    assignedTo: '',
    status: 'Pending',
    dueDate: '',
    priority: 'Low',
    comments: '',
  };

  constructor(private taskService: TaskService) {}

  // Add new task
  onSubmit(): void {
    this.taskService.addTask(this.task);
    this.task = { name: '', assignedTo: '', status: 'Pending', dueDate: '', priority: 'Low', comments: '' }; // Reset the form after submission
  }
}
