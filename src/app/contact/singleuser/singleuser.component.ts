import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DesignDependancyService } from 'src/app/design-dependancy.service';

@Component({
  selector: 'app-singleuser',
  templateUrl: './singleuser.component.html',
  styleUrls: ['./singleuser.component.css']
})
export class SingleuserComponent implements OnInit {

  cutsomers:any
  constructor(private _ser:DesignDependancyService,private activated:ActivatedRoute) { }

  ngOnInit(): void {
    let id=this.activated.snapshot.paramMap.get('id')
   this._ser.getCust(id).subscribe(e=>this.cutsomers=e)
  }

}
