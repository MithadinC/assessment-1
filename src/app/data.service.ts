import { Injectable } from '@angular/core';
import { employees } from '../assets/data.js';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): any[] {
    return this.getDataSorted("nameasc");;
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
    }
  }

}
