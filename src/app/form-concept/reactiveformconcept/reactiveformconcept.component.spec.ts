import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveformconceptComponent } from './reactiveformconcept.component';

describe('ReactiveformconceptComponent', () => {
  let component: ReactiveformconceptComponent;
  let fixture: ComponentFixture<ReactiveformconceptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactiveformconceptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveformconceptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
