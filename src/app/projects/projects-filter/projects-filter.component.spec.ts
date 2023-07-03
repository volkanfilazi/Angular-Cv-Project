import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsFilterComponent } from './projects-filter.component';

describe('ProjectsFilterComponent', () => {
  let component: ProjectsFilterComponent;
  let fixture: ComponentFixture<ProjectsFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsFilterComponent]
    });
    fixture = TestBed.createComponent(ProjectsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
