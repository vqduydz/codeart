import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntegrationActionDetailPage } from './integration-action-detail.page';

describe('IntegrationActionDetailPage', () => {
  let component: IntegrationActionDetailPage;
  let fixture: ComponentFixture<IntegrationActionDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationActionDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
