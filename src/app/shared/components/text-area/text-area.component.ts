import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.less']
})
export class TextAreaComponent {
  @Input() bSClass?: string;
  @Input() name?: string;
  @Input() label?: string = "label";
  @Input() placeHolder: string | undefined = "";
  // @Input() type: "button" | "checkbox" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "radio" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week" = "text";
  @Input() type: string | undefined = "text";
  @Input() required: boolean = false;
  @Input() control!: FormControl<any>;
  @Input() formGroup!: FormGroup<any>;
  @Output() keyUpEvent: EventEmitter<any> = new EventEmitter<any>();
  objectFn = Object;
}
