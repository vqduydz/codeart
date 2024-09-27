import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntegrationActionPage } from './integration-action.page';

describe('IntegrationActionPage', () => {
  let component: IntegrationActionPage;
  let fixture: ComponentFixture<IntegrationActionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationActionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
