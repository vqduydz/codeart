import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SchemaPage } from './schema.page';

describe('SchemaPage', () => {
  let component: SchemaPage;
  let fixture: ComponentFixture<SchemaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
