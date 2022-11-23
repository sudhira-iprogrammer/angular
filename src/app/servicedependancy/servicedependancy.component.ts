import { Component, OnInit } from '@angular/core';
import { DesignService } from '../app-services/design.service';

@Component({
  selector: 'app-servicedependancy',
  templateUrl: './servicedependancy.component.html',
  styleUrls: ['./servicedependancy.component.css']
})
export class ServicedependancyComponent implements OnInit {

  constructor(private msg:DesignService) { }

  ngOnInit(): void {
    this.msg.messageAlert()
    this.msg.users().subscribe(u=>this.users=u)
  }

  users:any

}
