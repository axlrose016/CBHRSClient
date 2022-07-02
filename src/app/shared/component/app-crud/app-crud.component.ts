import { B } from '@angular/cdk/keycodes';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'axl-app-crud',
  templateUrl: './app-crud.component.html',
  styleUrls: ['./app-crud.component.scss']
})
export class AppCrudComponent implements OnInit {

  @Output() public appcrudbtnclick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(btnclick:string){
    switch(btnclick){
      case "Save":
        this.appcrudbtnclick.emit(btnclick);
        break;
      case "Edit":
        this.appcrudbtnclick.emit(btnclick);
        break;
      case "Delete":
        this.appcrudbtnclick.emit(btnclick);
        break;
      default:
        this.appcrudbtnclick.emit(btnclick);
        break;
    }
  }
}
