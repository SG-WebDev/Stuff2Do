import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-dolist',
  templateUrl: './dolist.component.html',
  styleUrls: ['./dolist.component.css']
})
export class DolistComponent  {
  @Input()
  list: Array<string> = [];
  @Output()
  emitRemove = new EventEmitter<string>();
  @Output()
  emitDone = new EventEmitter<string>();
  remove(task: string) {
    this.emitRemove.emit(task);
  }
  done(task: string) {
    this.emitDone.emit(task);
  }
}
