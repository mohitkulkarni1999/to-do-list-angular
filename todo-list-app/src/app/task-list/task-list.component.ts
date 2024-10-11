import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule], // Import necessary modules
})
export class TaskListComponent implements OnInit {
toggleForm() {
throw new Error('Method not implemented.');
}
  tasks: any[] = []; // Array to hold all tasks
  filteredTasks: any[] = []; // Array to hold filtered tasks
  searchText: string = ''; // Search input text
  currentPage: number = 1; // Current page number
  pageSize: number = 5; // Number of tasks per page
  totalPages: number = 0; // Total number of pages

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.loadTasks(); // Load tasks when the component initializes
  }

  loadTasks() {
    this.tasks = this.taskService.getTasks(); // Fetch tasks from the service
    this.filteredTasks = this.tasks; // Initialize filtered tasks
    this.totalPages = Math.ceil(this.filteredTasks.length / this.pageSize); // Calculate total pages
    this.updateFilteredTasks(); // Set the initial tasks to display
  }

  filterTasks() {
    // Filter tasks based on search text
    if (this.searchText.trim()) {
      this.filteredTasks = this.tasks.filter(task => 
        task.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        task.assignedTo.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.filteredTasks = this.tasks; // Reset to all tasks if search text is empty
    }
    // Recalculate total pages based on filtered tasks
    this.totalPages = Math.ceil(this.filteredTasks.length / this.pageSize);
    this.currentPage = 1; // Reset to first page after filtering
    this.updateFilteredTasks(); // Update displayed tasks
  }

  deleteTask(index: number) {
    this.taskService.deleteTask(index); // Delete the task
    this.loadTasks(); // Reload tasks to update the list
  }

  changePage(page: number) {
    if (page < 1 || page > this.totalPages) return; // Prevent invalid page numbers
    this.currentPage = page; // Set current page
    this.updateFilteredTasks(); // Update displayed tasks based on current page
  }

  updateFilteredTasks() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.filteredTasks = this.tasks.slice(startIndex, endIndex); // Paginate tasks
  }

  refreshTasks() {
    this.loadTasks(); // Refresh the task list
  }
}
