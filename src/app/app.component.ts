import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  list: Array<string> = [];
  doneList: Array<string> = [];
  UserToDoList = localStorage.getItem('ToDoList');
  UserDoneList = localStorage.getItem('DoneList');
  ngOnInit(): void {
    if (this.UserToDoList == null) {
      localStorage.setItem('ToDoList', '[]');
    } else {
      this.list = JSON.parse(localStorage.getItem('ToDoList'));
    }
    if (this.UserDoneList == null) {
      localStorage.setItem('DoneList', '[]');
    } else {
      this.doneList = JSON.parse(localStorage.getItem('DoneList'));
    }
  }
  add(task: string) {
    this.list.push(task);
    localStorage.setItem('ToDoList', JSON.stringify(this.list));
  }
  remove(task: string) {
    this.list = this.list.filter(e => e !== task);
    localStorage.setItem('ToDoList', JSON.stringify(this.list));
  }
  done(task: string) {
    this.doneList.push(task);
    this.remove(task);
    localStorage.setItem('DoneList', JSON.stringify(this.doneList));
  }
}
