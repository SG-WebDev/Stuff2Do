import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-adder',
  templateUrl: './adder.component.html',
  styleUrls: ['./adder.component.css']
})
export class AdderComponent {
  newTask: string;
  @Output()
  emitTask = new EventEmitter<string>();
  add() {
   this.emitTask.emit(this.newTask);
   this.newTask = '';
  }

}
