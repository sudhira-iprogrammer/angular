import { Component, OnInit } from '@angular/core';
import { DesignService } from './app-services/design.service';
import { DesignDependancyService } from './design-dependancy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routing-concept';
  showFiller = false;

  constructor(private msg:DesignService) {
    
  }
  ngOnInit(){
    // this.msg.messageAlert()
  }
}
