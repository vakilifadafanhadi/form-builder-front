import { Injectable } from '@angular/core';
import { iTool } from '../shared/models/tool';

@Injectable({
  providedIn: 'root'
})
export class BackendServiceService {

  constructor() { }
  save(model: iTool[], name: string) {
    let list: any[] = JSON.parse(localStorage.getItem("list")!);
    if (list == null)
      list = [];
    list.push({ name: name, date: new Date(), data: model });
    localStorage.setItem("list", JSON.stringify(list));
  }
  update(model: iTool[], name: string, newName: string) {
    let list: any[] = JSON.parse(localStorage.getItem("list")!);
    if (list == null)
      list = [];
    let index = list.findIndex(current => current.name == name);
    if (index >= 0)
      list[index] = { newName, date: new Date(), model };
    localStorage.setItem("list", JSON.stringify(list));
  }
  get(name: string) {
    let list: any[] = JSON.parse(localStorage.getItem("list")!);
    if (list == null)
      list = [];
    let index = list.findIndex(current => current.name == name);
    if (index >= 0)
      return (list[index]);
    return false;
  }
  list() {
    return JSON.parse(localStorage.getItem("list")!);
  }
  delete(name: string) {
    let list: any[] = JSON.parse(localStorage.getItem("list")!);
    if (list == null)
      list = [];
    let index = list.findIndex(current => current.name == name);
    if (index >= 0) {
      list.splice(index, 1);
      localStorage.setItem("list", JSON.stringify(list));
      return true;
    }
    return false;
  }
}
