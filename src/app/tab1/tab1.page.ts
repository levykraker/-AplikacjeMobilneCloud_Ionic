import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {
  }
  todos = [
    { task: 'Zrobić zakupy', completed: false },
    { task: 'Umyć samochód', completed: true },
    { task: 'Przygotować obiad', completed: false },
  ];

  newTask: string = '';

  addTask() {
    if (this.newTask.trim() !== '') {
      this.todos.push({ task: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.todos.splice(index, 1);
  }

  toggleCompletion(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
  }


}
