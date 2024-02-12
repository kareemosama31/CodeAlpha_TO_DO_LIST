// todo.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  newTask: '' | undefined;
  tasks: Array<{ text: string, done: boolean, completed?: boolean }> = [];

  addTask() {
    if (this.newTask) {
      this.tasks.push({ text: this.newTask, done: false });
      this.newTask = ''; // Clear the input after adding a task
    }
  }

  markAsDone(task: any) {
    task.done = true;
    task.completed = true; // Set the completed property to true
  }

  removeTask(task: any) {
    this.tasks = this.tasks.filter(t => t !== task);
  }
}
