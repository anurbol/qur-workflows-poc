import { HomeComponent } from './routes/home/home.component';
import { Routes } from '@angular/router';
import { MyWorkflowsComponent } from './routes/my-workflows/my-workflows.component';
import { WorkflowComponent } from './routes/workflow/workflow.component';
import { WorkflowInstancesComponent } from './routes/workflow-instances/workflow-instances.component';
import { AddWorkflowComponent } from './routes/add-workflow/add-workflow.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'my-workflows', component: MyWorkflowsComponent },
    { path: 'workflow/new', component: AddWorkflowComponent },
    { path: 'workflow/:id', component: WorkflowComponent },
    { path: 'workflow/:id/instances', component: WorkflowInstancesComponent },
    // todo
    // todo
    // { path: '**', component: PageNotFoundComponent }
];
