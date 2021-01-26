import { Injectable } from '@angular/core';
import { employees } from '../assets/data.js';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  sortOrder: string = "nameasc";

  setSortOrder(order: string) {
    this.sortOrder = order;
  }

  getSortOrder(): string {
    return this.sortOrder;
  }

  getData(): any[] {
    return this.getDataSorted(this.getSortOrder());
  }

  getDepartments() {
    const departments = Array.from(new Set(employees.map(el => el.departments).flat()));
    return departments;
  }

  getDataSorted(sortType: string): any[] {
    if (sortType === "nameasc") {
      return employees.sort((a, b) => {
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    } else if (sortType === "namedsc") {
      return employees.sort((a, b) => {
        let fa = a.name.toLowerCase(),
          fb = b.name.toLowerCase();
        if (fa < fb) {
          return 1;
        }
        if (fa > fb) {
          return -1;
        }
        return 0;
      });
    } else if (sortType === "emailasc") {
      return employees.sort((a, b) => {
        let fa = a.email.toLowerCase(),
          fb = b.email.toLowerCase();
        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
    } else {
      return employees.sort((a, b) => {
        return a.age - b.age;
      });
    }
  } 

}
