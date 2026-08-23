import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustainableLiving } from './sustainable-living';

describe('SustainableLiving', () => {
  let component: SustainableLiving;
  let fixture: ComponentFixture<SustainableLiving>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SustainableLiving],
    }).compileComponents();

    fixture = TestBed.createComponent(SustainableLiving);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
