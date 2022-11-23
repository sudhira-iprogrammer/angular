import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveformconcept',
  templateUrl: './reactiveformconcept.component.html',
  styleUrls: ['./reactiveformconcept.component.css']
})
export class ReactiveformconceptComponent implements OnInit {

  name=new FormControl('');

  profileForm=new FormGroup({
    'name':new FormControl('',Validators.required),
    'email':new FormControl('',[Validators.required,Validators.email]),
    'address':new FormGroup({
      'city':new FormControl(''),
      'state':new FormControl('',Validators.required)
    }),
    'skills':new FormArray([
      new FormControl('')
    ])
  });

  userForm=this.fb.group({
    'fname':['Hari',Validators.required],
    'lname':[''],
    'address':this.fb.group({
      'street':[''],
      'city':[''],
      'state':['']
    })
  })

  get skills() {
    return this.profileForm.get('skills') as FormArray;
  }

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    console.log("name : "+this.name);
  }

  onUpdate(){
    this.name.setValue('Ram')
  }

  onSubmit(){
    console.warn(this.profileForm.value);
    // this.profileForm.reset();
  }

  onUpdateForm(){
    this.profileForm.patchValue({
      name:'Krishna',
      address:{
        city:'Dawaraka'
      }
    })
  }

  onSubmitForm(){
    console.warn(this.userForm.value);
  }

  onAdd(info:any){
    this.skills.push(new FormControl(info.value))
  }
}
