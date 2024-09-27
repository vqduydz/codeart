import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SystemTypePage } from './system-type.page';

describe('SystemTypePage', () => {
  let component: SystemTypePage;
  let fixture: ComponentFixture<SystemTypePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemTypePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
