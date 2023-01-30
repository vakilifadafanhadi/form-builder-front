import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})
export class SelectComponent {
  @Input() bSClass?: string;
  @Input() name?: string;
  @Input() label?: string;
  @Input() items: any[] = [];
  @Input() bindValue!: any;
  @Input() multiple: boolean = false;
  @Input() closeOnSelect: boolean = true;
  @Input() searchable: boolean = false;
  @Input() bindLabel: any;
  @Input() control!: FormControl<any>;
  @Input() formGroup!: FormGroup<any>;
  @Input() placeHolder: string | undefined = "";
  @Input() required: boolean | undefined = false;
  @Output() onChangeOutput: EventEmitter<any> = new EventEmitter<any>();
  onChange(value: any) {
    this.onChangeOutput.emit(value);
  }
  objectFn = Object;
}
