import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mat-card',
  templateUrl: './mat-card.component.html',
  styleUrls: ['./mat-card.component.less']
})
export class MatCardComponent {
  @Input() value: any;
  @Input() icon!: string;
  @Output() dragstart = new EventEmitter<any>();
  drag() {
    this.dragstart.emit();
  }
}
