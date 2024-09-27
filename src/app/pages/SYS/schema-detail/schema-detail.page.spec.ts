import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchemaDetailPage } from './schema-detail.page';

describe('SchemaDetailPage', () => {
  let component: SchemaDetailPage;
  let fixture: ComponentFixture<SchemaDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
