import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-concept',
  templateUrl: './form-concept.component.html',
  styleUrls: ['./form-concept.component.css']
})
export class FormConceptComponent implements OnInit {

  clicked=''

  constructor() { }

  ngOnInit(): void {
  }

  btnClick(data:string){
    this.clicked=data
  }

}
