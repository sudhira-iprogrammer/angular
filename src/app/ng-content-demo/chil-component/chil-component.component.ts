import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chil-component',
  templateUrl: './chil-component.component.html',
  styleUrls: ['./chil-component.component.css']
})
export class ChilComponentComponent implements OnInit {

  @Input() selected:any
  @Output() propertyBind=new EventEmitter<any>()

  constructor() { }

  ngOnInit(): void {
  }

  addCart(){
    this.propertyBind.emit(this.selected)
  }
}
