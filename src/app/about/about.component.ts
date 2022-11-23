import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DesignDependancyService } from '../design-dependancy.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {

  users=['']
  customers:any
  constructor(private _service:DesignDependancyService,private router:Router) { }

  ngOnInit(): void {
    this._service.customers().subscribe(custData=>this.customers=custData);
  }

  onCreate(data:any){
    this.users.push(data.value)

    if(this.users.length>3){
      // alert('record is more than 3')
      this.router.navigate(['product']);
    }
  }
  onRemove(data:any){
    this.users= this.users.filter(u=>u!==data)
  }
  
}
