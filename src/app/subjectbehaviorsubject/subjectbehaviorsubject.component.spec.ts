import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectbehaviorsubjectComponent } from './subjectbehaviorsubject.component';

describe('SubjectbehaviorsubjectComponent', () => {
  let component: SubjectbehaviorsubjectComponent;
  let fixture: ComponentFixture<SubjectbehaviorsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectbehaviorsubjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectbehaviorsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
