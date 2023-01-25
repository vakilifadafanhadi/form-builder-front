import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { inputTypes } from 'src/app/shared/data/input-types-data';
import { iTool } from 'src/app/shared/models/tool';
import { toolVM } from 'src/app/shared/views/toolVM';
@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.less']
})
export class CreateUpdateComponent {
  inputTypes = inputTypes;
  inputs: iTool[] = [];
  selectedIndex!: number;
  selectedItem!: iTool;
  pushedIndex: number = -1;
  propertiesFormGroup: FormGroup<toolVM> = new FormGroup<toolVM>({
    label: new FormControl(null),
    name: new FormControl(null),
    bSClass: new FormControl(null)
  })
  insertTool(item: iTool) {
    this.inputs.push(item);
  }
  showProperties(i: number) {
    this.selectedIndex = i;
  }
  updateTool(event: string, propertyName: "name" | "label" | "bSClass" | "description" | "placeHolder") {
    this.inputs[this.selectedIndex][propertyName] = event;
    this.inputTypes = inputTypes;
  }
  deleteTool() {
    this.inputs.splice(this.selectedIndex, 1);
    this.selectedIndex = -1;
  }
  dragTool(item: iTool) {
    this.pushedIndex = -1;
    if (this.inputs.length < 1) {
      let newTool = this.inputTypes.find(current => current.type == "1x row");
      if (newTool)
        this.inputs.push(newTool);
    }
    this.selectedItem = item;
    console.log("inputs", this.inputs);

  }
  dragover(index: number, childIndex?: number) {

    // if (this.pushedIndex > -1)
    if (this.pushedIndex != index)
      if (childIndex == null || childIndex == undefined)
        this.inputs[index].childs?.push(this.selectedItem);
      else {
        this.inputs[index].childs?.splice(this.pushedIndex, 1);
        this.inputs[index].childs?.splice(index, 0, this.selectedItem);
      }
    this.pushedIndex = index;
    console.log("inputs", this.inputs);
  }
}