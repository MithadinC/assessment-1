import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'assessment';
  data: any[];
  departments: any[];
  searchData: string;
   constructor(private dataService: DataService) {}

   ngOnInit() {
      this.data = this.dataService.getData();
      this.departments = this.dataService.getDepartments();
   }

   onDeptOptionsSelected(value: string) {
    this.data = this.dataService.getData().filter((el) => {
      return el.departments.indexOf(value) > -1;
    });
   }

   onSearch(value: string) {
    const searchValue: string = this.searchData.toLowerCase();
    this.data = this.dataService.getData().filter((el) => {
      return ((el.name.toLowerCase().search(searchValue) > -1 || el.email.toLowerCase().search(searchValue) > -1) ) &&  el.departments.indexOf(value) > -1 ;
    });
   }

   resetData() {
    this.data = this.dataService.getData();
  }

  sortOrderChange(value: string) {
    this.dataService.setSortOrder(value);
    this.data = this.dataService.getData();
  }
}
