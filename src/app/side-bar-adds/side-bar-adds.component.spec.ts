import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarAddsComponent } from './side-bar-adds.component';

describe('SideBarAddsComponent', () => {
  let component: SideBarAddsComponent;
  let fixture: ComponentFixture<SideBarAddsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideBarAddsComponent]
    });
    fixture = TestBed.createComponent(SideBarAddsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
