import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterMainComponent } from './filter-main.component';

describe('FilterMainComponent', () => {
  let component: FilterMainComponent;
  let fixture: ComponentFixture<FilterMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilterMainComponent]
    });
    fixture = TestBed.createComponent(FilterMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
