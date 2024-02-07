import { Component, OnInit  } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { FirebaseService } from '../firebase.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  tasks: any;
  newTask: any;

 constructor(private firebaseService: FirebaseService ) { }

  ngOnInit() {
    this.firebaseService.getTasks().subscribe(data => {
      this.tasks = data.map(e => {
        return {
          id: e.payload.key,
          name: e.payload.val()['title']
        };
      });
    });
  }

  addTask() {
    this.firebaseService.addTask(this.newTask);
    this.newTask = '';
  }

  removeTask(taskId: string) {
    this.firebaseService.removeTask(taskId);
  }

}
