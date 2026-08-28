import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerWellnessComponent } from './consumer-wellness';

describe('ConsumerWellnessComponent', () => {
  let component: ConsumerWellnessComponent;
  let fixture: ComponentFixture<ConsumerWellnessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumerWellnessComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsumerWellnessComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
