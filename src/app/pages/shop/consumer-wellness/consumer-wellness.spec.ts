import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerWellness } from './consumer-wellness';

describe('ConsumerWellness', () => {
  let component: ConsumerWellness;
  let fixture: ComponentFixture<ConsumerWellness>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumerWellness],
    }).compileComponents();

    fixture = TestBed.createComponent(ConsumerWellness);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
