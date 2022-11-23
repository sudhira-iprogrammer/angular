import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilComponentComponent } from './chil-component.component';

describe('ChilComponentComponent', () => {
  let component: ChilComponentComponent;
  let fixture: ComponentFixture<ChilComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChilComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChilComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
