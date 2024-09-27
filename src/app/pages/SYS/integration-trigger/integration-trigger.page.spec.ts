import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntegrationTriggerPage } from './integration-trigger.page';

describe('IntegrationTriggerPage', () => {
  let component: IntegrationTriggerPage;
  let fixture: ComponentFixture<IntegrationTriggerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationTriggerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
