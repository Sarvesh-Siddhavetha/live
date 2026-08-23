import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetreatsComponent } from './retreats.component';

describe('RetreatsComponent', () => {
  let component: RetreatsComponent;
  let fixture: ComponentFixture<RetreatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RetreatsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RetreatsComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
