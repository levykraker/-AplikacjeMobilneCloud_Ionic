import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Task {
  payload: any;
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  tasksRef: any;

  constructor(private db: AngularFireDatabase) {
    this.tasksRef = this.db.list('/tasks').valueChanges();
  }

  getTasks(): Observable<Task[]> {
    return this.tasksRef.pipe(
      map((tasks: any[]) => {
        return tasks.map((task, index) => {
          return { id: index.toString(), name: task.name } as Task;
        });
      })
    );
  }

  addTask(task: string) {
    this.tasksRef.push({ name: task });
  }

  removeTask(taskId: string) {
    this.tasksRef.remove(taskId);
  }
}
