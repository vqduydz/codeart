import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IntegrationProviderPage } from './integration-provider.page';

describe('IntegrationProviderPage', () => {
  let component: IntegrationProviderPage;
  let fixture: ComponentFixture<IntegrationProviderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationProviderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
