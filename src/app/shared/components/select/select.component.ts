import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})
export class SelectComponent {
  @Input() bSClass?: string;
  @Input() name?: string;
  @Input() label?: string = "label";
  @Input() items: any[] = [];
  @Input() bindValue!: string;
  selected(item: any) {
    console.log("selected", item.target.value);
  }
}
