import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent {
  @Input() parentValue: string;
  @Output() childEvent = new EventEmitter<Date>();

  onChildClick() {
    this.childEvent.emit(new Date());
  }
}
