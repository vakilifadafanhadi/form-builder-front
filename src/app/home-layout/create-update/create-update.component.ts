import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { inputTypes } from 'src/app/shared/data/input-types-data';
import { iTool } from 'src/app/shared/models/tool';
import { toolVM } from 'src/app/shared/views/toolVM';
@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.less']
})
export class CreateUpdateComponent implements OnInit {
  inputTypes!: iTool[];
  inputs: iTool[] = [];
  selectedItem!: iTool;
  selectedIndex!: number;
  propertiesFormGroup: FormGroup<toolVM> = new FormGroup<toolVM>({
    label: new FormControl(null),
    name: new FormControl(null),
    bSClass: new FormControl(null)
  });
  ngOnInit() {
    this.inputTypes = [];
    inputTypes.forEach(element => this.inputTypes.push(element));
  }
  insertTool(item: iTool) {
    this.inputs.push(item);
  }
  showProperties(i: number) {
    this.selectedIndex = i;
  }
  updateTool(event: string, propertyName: "name" | "label" | "bSClass" | "description" | "placeHolder") {
    this.inputs[this.selectedIndex][propertyName] = event;
    this.inputTypes = [];
    inputTypes.forEach(element => this.inputTypes.push(element));
  }
  deleteTool() {
    this.inputs.splice(this.selectedIndex, 1);
    this.selectedIndex = -1;
  }
  dragstart(item: iTool) {
    this.selectedItem = item;
  }
  dragover(event: any) {
    event.preventDefault();
  }
  drop(index: number, list: iTool[]) {
    try {
      list.splice(index, 0, this.selectedItem);
    }
    catch (error) {
      list.push(this.selectedItem);
    }
  }
}