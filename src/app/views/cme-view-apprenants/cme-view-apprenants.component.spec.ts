import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmeViewApprenantsComponent } from './cme-view-apprenants.component';

describe('CmeViewApprenantsComponent', () => {
  let component: CmeViewApprenantsComponent;
  let fixture: ComponentFixture<CmeViewApprenantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmeViewApprenantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmeViewApprenantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
