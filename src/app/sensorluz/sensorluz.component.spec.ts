import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SensorluzComponent } from './sensorluz.component';

describe('SensorluzComponent', () => {
  let component: SensorluzComponent;
  let fixture: ComponentFixture<SensorluzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SensorluzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SensorluzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
