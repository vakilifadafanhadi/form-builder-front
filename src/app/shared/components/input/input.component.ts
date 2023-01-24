import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent {
  @Input() bSClass?: string;
  @Input() name?: string;
  @Input() label?: string = "label";
  @Input() placeHolder: string | undefined = "";
  // @Input() type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week" = "text";
  @Input() type: string | undefined = "text";
  @Input() required: boolean | undefined = false;
  @Input() control!: FormControl<any>;
  @Input() formGroup!: FormGroup<any>;
  @Output() keyUpEvent: EventEmitter<any> = new EventEmitter<any>();
  objectFn = Object;
  timer: number = 1;
  timeoutVal: number = 1;
  keydown(event: KeyboardEvent) {
    window.clearTimeout(this.timer);
  }
  keyup(event: any) {
    window.clearTimeout(this.timer);
    this.timer = window.setTimeout(() => {
      this.keyUpEvent.emit(event.target.value);
    }, this.timeoutVal);
  };
}
