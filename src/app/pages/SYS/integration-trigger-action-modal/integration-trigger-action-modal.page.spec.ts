import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntegrationTriggerActionModalPage } from './integration-trigger-action-modal.page';

describe('IntegrationTriggerActionModalPage', () => {
  let component: IntegrationTriggerActionModalPage;
  let fixture: ComponentFixture<IntegrationTriggerActionModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationTriggerActionModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
