import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastNavComponent } from './forecast-nav.component';

describe('ForecastNavComponent', () => {
  let component: ForecastNavComponent;
  let fixture: ComponentFixture<ForecastNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForecastNavComponent]
    });
    fixture = TestBed.createComponent(ForecastNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
