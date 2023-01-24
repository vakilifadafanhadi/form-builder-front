import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent {
  @Input() bSClass?: string;
  @Input() name?: string;
  @Input() label?: string = "label";
  @Input() placeHolder: string = "";
  // @Input() type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week" = "text";
  @Input() type: string | undefined = "text";
  @Output() keyUpEvent: EventEmitter<any> = new EventEmitter<any>();
  onInputChange() {

  }
  timer: number = 1000;
  timeoutVal: number = 1000;

  KeyPress(e: any) {

    window.clearTimeout(this.timer);

  }

  KeyUp(e: any) {
    window.clearTimeout(this.timer);
    this.timer = window.setTimeout(() => {

      this.keyUpEvent.emit(e.target.value);

    }, this.timeoutVal)
  };
}
