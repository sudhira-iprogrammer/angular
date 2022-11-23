import { Component, OnInit } from '@angular/core';
import { DesignService } from 'src/app/app-services/design.service';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  // userName='sudhir'
  userName:any;
  constructor(private ser:DesignService) {
    ser.userName.subscribe(u=>{this.userName=u})
   }

  ngOnInit(): void {
  }

  addBtn(info:any){
    this.ser.userName.next(info.value)
  }
}
