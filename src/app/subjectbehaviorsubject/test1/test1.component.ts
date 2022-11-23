import { Component, OnInit } from '@angular/core';
import { DesignService } from 'src/app/app-services/design.service';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {

  // userName:string='sudhir'
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
