import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  tasksRef: AngularFireList<any>;
  tasks: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.tasksRef = this.db.list('/tasks');
    this.tasks = this.tasksRef.snapshotChanges();
  }

  getTasks() {
    return this.tasks;
  }

  addTask(task: string) {
    this.tasksRef.push({ name: task });
  }

  removeTask(taskId: string) {
    this.tasksRef.remove(taskId);
  }
}
