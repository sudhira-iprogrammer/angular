import { Component, OnInit } from '@angular/core';
import { DesignDependancyService } from '../design-dependancy.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  customers:any
  constructor(private _service:DesignDependancyService) { }

  ngOnInit(): void {
    this._service.customers().subscribe(custData=>this.customers=custData);
  }
}
