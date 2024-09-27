import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiCollectionDetailPage } from './api-collection-detail.page';

describe('ApiCollectionDetailPage', () => {
  let component: ApiCollectionDetailPage;
  let fixture: ComponentFixture<ApiCollectionDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCollectionDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
