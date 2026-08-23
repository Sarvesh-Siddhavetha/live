import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseStrip } from './promise-strip';

describe('PromiseStrip', () => {
  let component: PromiseStrip;
  let fixture: ComponentFixture<PromiseStrip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PromiseStrip],
    }).compileComponents();

    fixture = TestBed.createComponent(PromiseStrip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
