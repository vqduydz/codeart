import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SystemStatusDetailPage } from './system-status-detail.page';

describe('SystemStatusDetailPage', () => {
  let component: SystemStatusDetailPage;
  let fixture: ComponentFixture<SystemStatusDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemStatusDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
