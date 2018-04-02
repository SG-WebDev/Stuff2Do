import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  list: Array<string> = [];
  doneList: Array<string> = [];

  ngOnInit(): void {
  this.list = ['Zadanie 1', 'Zadanie 2', 'Zadanie 3'];
  }

  add(task: string) {
    this.list.push(task);
  }
  remove(task: string) {
    this.list = this.list.filter(e => e !== task);
  }
  done(task: string) {
    this.doneList.push(task);
    this.remove(task);
  }
}
