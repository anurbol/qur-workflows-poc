import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowInstancesComponent } from './workflow-instances.component';

describe('WorkflowInstancesComponent', () => {
  let component: WorkflowInstancesComponent;
  let fixture: ComponentFixture<WorkflowInstancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowInstancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowInstancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
