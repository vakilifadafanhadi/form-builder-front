import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.less']
})
export class RadioButtonComponent {
  @Input() control!: FormControl<any>;
  @Input() formGroup!: FormGroup<any>;
  @Input() name?: string;
  @Input() label?: string;
  @Input() value?: string;
  @Input() required: boolean = false;
  @Input() type: "radio" | "checkbox" | undefined = "radio";
  @Input() checked: boolean = false;
  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  changed(event: any) {
    this.checkedChange.emit(event.target.checked);
  }
}
