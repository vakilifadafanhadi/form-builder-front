import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { BackendServiceService } from 'src/app/core/backend-service.service';
import { MatPaginator } from '@angular/material/paginator';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  list: any[] = [];
  constructor(
    private _backendService: BackendServiceService,
    private _toastr: ToastrService
  ) {
  }
  ngOnInit() {
    this.list = this._backendService.list();
  }
  deleteItem(name: string, index: number) {
    if (this._backendService.delete(name)) {
      this._toastr.success("deleted");
      this.list.splice(index, 1);
    }
    else this._toastr.warning("not found");
  }
  displayedColumns: string[] = ['position', 'name', 'date', 'action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
}