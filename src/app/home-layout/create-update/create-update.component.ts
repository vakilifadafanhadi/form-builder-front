import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BackendServiceService } from 'src/app/core/backend-service.service';
import { buttonStyles } from 'src/app/shared/data/button-styles-data';
import { inputTypes } from 'src/app/shared/data/input-types-data';
import { sizes } from 'src/app/shared/data/size-data';
import { userTypes } from 'src/app/shared/data/user-types-data';
import { iTool } from 'src/app/shared/models/tool';
import { toolVM } from 'src/app/shared/views/toolVM';
@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.less']
})
export class CreateUpdateComponent implements OnInit {
  name: string = "";
  propertyTab: boolean = false;
  inputTypes!: iTool[];
  inputs: iTool[] = [];
  sizes = sizes;
  selectedItem?: iTool;
  selectedIndex: number[] = [];
  dragStart: number = 0;
  buttonStyles = buttonStyles;
  propertiesFormGroup: FormGroup<toolVM> = new FormGroup<toolVM>({
    id: new FormControl<string | null>(null),
    label: new FormControl<string | null>(null),
    name: new FormControl<string | null>(null),
    bSClass: new FormControl<string | null>(null),
    description: new FormControl<string | null>(null),
    placeHolder: new FormControl<string | null>(null),
    required: new FormControl<boolean | null>(null),
    requiredTo: new FormControl<boolean | null>(null),
    premissions: new FormControl<iTool[]>([]),
    tag: new FormControl<string | null>(null),
    type: new FormControl<string | null>(null),
    splitChar: new FormControl<string | null>(null),
    splitCount: new FormControl<string | null>(null),
    max: new FormControl<string | number | null>(null),
    min: new FormControl<string | number | null>(null),
    maxTo: new FormControl<string | null>(null),
    minTo: new FormControl<string | null>(null),
    action: new FormControl<string | null>(null)
  });
  formBuilder: FormGroup = new FormGroup({});
  control: FormControl = new FormControl(null);
  userTypes = userTypes;
  constructor(
    private _backendService: BackendServiceService,
    private _toastrService: ToastrService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.name = this._activatedRoute.snapshot.params["name"];
    if (this.name)
      this.inputs = this._backendService.get(this.name).data;
    if (!this.inputs)
      this._toastrService.warning("not found");

    this.inputTypes = [];
    inputTypes.forEach(element => this.inputTypes.push(element));
  }
  updatePremissions(event: iTool[]) {
    if (this.selectedIndex.length == 2) {
      this.inputs[this.selectedIndex[0]].childs![this.selectedIndex[1]].premissions = event;
      return;
    }
    this.inputs[this.selectedIndex[0]].premissions = event;
  }
  updateTool(event: string, propertyName: "name" | "label" | "label2" | "bSClass" | "description" | "placeHolder" | "type" | "splitChar" | "splitCount" | "min" | "max" | "maxTo" | "minTo" | "icon" | "action") {
    if (this.selectedIndex.length == 2) {
      this.inputs[this.selectedIndex[0]].childs![this.selectedIndex[1]][propertyName] = event;
      return;
    }
    this.inputs[this.selectedIndex[0]][propertyName] = event;
    console.log("update", this.selectedItem);

  }
  required(event: boolean) {
    if (this.selectedIndex.length == 2) {
      this.inputs[this.selectedIndex[0]].childs![this.selectedIndex[1]].required = event;
      return;
    }
    this.inputs[this.selectedIndex[0]].required = event;
  }
  deleteTool(index: number) {
    this.inputs.splice(index, 1);
    this.selectedIndex = [];
    this.selectedItem = undefined;
  }
  deletechild(parentIndex: number, childIndex: number) {
    this.inputs[parentIndex].childs?.splice(childIndex, 1);
    this.selectedIndex = [];
    this.selectedItem = undefined;
  }
  editchild(parentIndex: number, childIndex: number) {
    this.selectedIndex = [parentIndex, childIndex];
    this.selectedItem = this.inputs[parentIndex].childs![childIndex];
    this.propertiesFormGroup.reset();
    this.propertiesFormGroup.patchValue(this.inputs[parentIndex].childs![childIndex]);
  }
  editTool(index: number) {
    this.selectedIndex = [index];
    this.selectedItem = this.inputs[index];
    this.propertiesFormGroup.reset();
    this.propertiesFormGroup.patchValue(this.inputs[index]);
  }
  dragstart(item: iTool) {
    this.selectedItem = { ...item };
    this.selectedIndex = [];
    this.dragStart = 1;
  }
  dragover(event: any) {
    event.preventDefault();
  }
  drop(index: number) {
    if (this.dragStart == 2)
      this.inputs.splice(this.selectedIndex[0], 1);
    if (this.dragStart == 3)
      this.inputs[this.selectedIndex[0]].childs!.splice(this.selectedIndex[1], 1);
    this.inputs.splice(index, 0, { ...this.selectedItem });
    this.dragStart = 0;
  }
  dropchild(parentIndex: number, childIndex: number) {
    if (this.dragStart == 3)
      this.inputs[this.selectedIndex[0]].childs!.splice(this.selectedIndex[1], 1);
    if (this.inputs[parentIndex].childs == null)
      this.inputs[parentIndex].childs = [];
    this.inputs[parentIndex].childs?.splice(childIndex, 0, { ...this.selectedItem });
    if (this.dragStart == 2)
      this.inputs.splice(this.selectedIndex[0], 1);
    this.dragStart = 0
  }
  moveStart(index: number) {
    this.selectedIndex = [index];
    this.selectedItem = this.inputs[index];
    setTimeout(() => {
      this.dragStart = 2;
    }, 100);
  }
  movechild(parentIndex: number, childIndex: number) {
    this.selectedIndex = [parentIndex, childIndex];
    this.selectedItem = this.inputs[parentIndex].childs![childIndex];
    setTimeout(() => {
      this.dragStart = 3;
    }, 100);
  }
  save() {
    if (this.name) {
      this._backendService.update(this.inputs, this.name, this.control.value);
      this._toastrService.success("updated");
    }
    else {
      this._backendService.save(this.inputs, this.control.value);
      this._toastrService.success("created");
    }
    this._router.navigate(["/"]);
  }
}