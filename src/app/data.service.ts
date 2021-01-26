import { Injectable } from '@angular/core';
import { employees } from '../assets/data.js';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData(): any[] {
    return employees;
  }

  getDepartments() {
    const departments = Array.from(new Set(employees.map(el => el.departments).flat()));
    return (departments)
  }

}
