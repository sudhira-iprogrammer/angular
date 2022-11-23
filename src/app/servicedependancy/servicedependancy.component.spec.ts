import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicedependancyComponent } from './servicedependancy.component';

describe('ServicedependancyComponent', () => {
  let component: ServicedependancyComponent;
  let fixture: ComponentFixture<ServicedependancyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicedependancyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicedependancyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
