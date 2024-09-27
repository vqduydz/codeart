import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntegrationTriggerDetailPage } from './integration-trigger-detail.page';

describe('IntegrationTriggerDetailPage', () => {
  let component: IntegrationTriggerDetailPage;
  let fixture: ComponentFixture<IntegrationTriggerDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationTriggerDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
