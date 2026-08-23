import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureCardComponent } from './feature-card';

describe('FeatureCardComponent', () => {
  let component: FeatureCardComponent;
  let fixture: ComponentFixture<FeatureCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeatureCardComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the provided image when available', () => {
    component.image = 'assets/images/institutions/digital1.jpeg';
    component.title = 'SiddhaAI';

    fixture.detectChanges();

    const img = fixture.nativeElement.querySelector('img.feature-image');
    expect(img).toBeTruthy();
    expect(img.getAttribute('src')).toContain('assets/images/institutions/digital1.jpeg');
    expect(img.getAttribute('alt')).toBe('SiddhaAI');
  });
});
