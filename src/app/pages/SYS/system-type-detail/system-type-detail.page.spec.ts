import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SystemTypeDetailPage } from './system-type-detail.page';

describe('SystemTypeDetailPage', () => {
  let component: SystemTypeDetailPage;
  let fixture: ComponentFixture<SystemTypeDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemTypeDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
