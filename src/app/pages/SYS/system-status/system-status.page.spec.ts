import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SystemStatusPage } from './system-status.page';

describe('SystemStatusPage', () => {
  let component: SystemStatusPage;
  let fixture: ComponentFixture<SystemStatusPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
