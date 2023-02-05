import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenantCardComponent } from './apprenant-card.component';

describe('ApprenantCardComponent', () => {
  let component: ApprenantCardComponent;
  let fixture: ComponentFixture<ApprenantCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprenantCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApprenantCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
