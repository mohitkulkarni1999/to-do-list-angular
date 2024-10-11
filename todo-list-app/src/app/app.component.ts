import { Component } from '@angular/core';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, TaskListComponent, TaskFormComponent],
})
export class AppComponent {
  showForm = false;

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
