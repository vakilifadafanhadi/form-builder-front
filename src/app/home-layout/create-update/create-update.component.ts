import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { inputTypes } from 'src/app/shared/data/input-types-data';
import { tool } from 'src/app/shared/models/tool';
import { toolVM } from 'src/app/shared/views/toolVM';
@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.less']
})
export class CreateUpdateComponent {
  inputTypes = inputTypes;
  inputs: tool[] = [];
  selectedItem?: tool;
  propertiesFormGroup: FormGroup<toolVM> = new FormGroup<toolVM>({
    label: new FormControl(null),
    name: new FormControl(null),
    bSClass: new FormControl(null)
  })
  insertTool(item: tool) {
    this.inputs.push(item);
  }
  showProperties(item: tool) {
    this.selectedItem = item;
    console.log("selected", this.selectedItem);
  }
  updateTool(index: number, item: tool) {
    // let index = this.inputs.findIndex(current => current.id == item.id);
    this.inputs[index] = item;
  }
}
