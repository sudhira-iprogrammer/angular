import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConceptComponent } from './form-concept.component';

describe('FormConceptComponent', () => {
  let component: FormConceptComponent;
  let fixture: ComponentFixture<FormConceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConceptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormConceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
