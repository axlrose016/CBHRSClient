import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'axl-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.scss']
})
export class AppListComponent implements OnInit {

  constructor() { }
  @Output() public applistbtnclick = new EventEmitter();

  ngOnInit(): void {
  }
 
  onClick(btnclick:string){
    switch(btnclick){
      case "Add":{
        this.applistbtnclick.emit(btnclick);
        break;
      }
      case "Edit":{
        break;
      }
      case "Delete":{
        break;
      }
      case "Refresh":{
        this.applistbtnclick.emit(btnclick);
        break;
      }
      default:{
        this.applistbtnclick.emit(btnclick);
        break;
      }
    }
  }
}
