import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent implements OnInit {

  chartData: any =[];
  chartLegend: any = [];
  constructor() { }

  ngOnInit(): void {
    this.chartLegend = ['Male','Female','LGBTQ'];
    this.chartData = [
      {value:100,name:'Male'},{value:200,name:'Female'},{value:90,name:'LGBTQ'}];
  }

}
