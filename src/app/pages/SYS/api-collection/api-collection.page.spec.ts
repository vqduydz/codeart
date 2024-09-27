import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiCollectionPage } from './api-collection.page';

describe('ApiCollectionPage', () => {
  let component: ApiCollectionPage;
  let fixture: ComponentFixture<ApiCollectionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiCollectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
