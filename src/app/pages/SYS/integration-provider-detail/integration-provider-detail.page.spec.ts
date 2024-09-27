import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntegrationProviderDetailPage } from './integration-provider-detail.page';

describe('IntegrationProviderDetailPage', () => {
  let component: IntegrationProviderDetailPage;
  let fixture: ComponentFixture<IntegrationProviderDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationProviderDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
