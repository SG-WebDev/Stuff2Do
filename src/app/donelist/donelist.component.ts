import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-donelist',
  templateUrl: './donelist.component.html',
  styleUrls: ['./donelist.component.css']
})
export class DonelistComponent {
  @Input()
  doneList: Array<string> = [];
  reset() {
    this.doneList.length = 0;
  }
}
