import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-content-demo',
  templateUrl: './ng-content-demo.component.html',
  styleUrls: ['./ng-content-demo.component.css'],
})
export class NgContentDemoComponent implements OnInit {
  selected: any;
  alertText: any;
  constructor() {}

  ngOnInit(): void {}

  onSelect(data: any) {
    this.selected = data;
  }

  receivedData(data:any) {
    this.alertText = data;
  }
}
