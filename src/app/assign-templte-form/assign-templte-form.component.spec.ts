import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTemplteFormComponent } from './assign-templte-form.component';

describe('AssignTemplteFormComponent', () => {
  let component: AssignTemplteFormComponent;
  let fixture: ComponentFixture<AssignTemplteFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignTemplteFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignTemplteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
