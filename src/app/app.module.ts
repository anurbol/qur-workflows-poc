import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { HomeComponent } from './routes/home/home.component';
import { MyWorkflowsComponent } from './routes/my-workflows/my-workflows.component';
import { WorkflowComponent } from './routes/workflow/workflow.component';
import { WorkflowInstancesComponent } from './routes/workflow-instances/workflow-instances.component';
import { NavigationComponent } from './routes.includables/navigation/navigation.component';
import { DashboardComponent } from './routes.includables/dashboard/dashboard.component';
import { ContentComponent } from './routes.includables/content/content.component';
import { AddWorkflowComponent } from './routes/add-workflow/add-workflow.component';
import { appRoutes } from './app.routes';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DashboardComponent,
    MyWorkflowsComponent,
    HomeComponent,
    WorkflowInstancesComponent,
    WorkflowComponent,
    ContentComponent,
    AddWorkflowComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: !environment.production }
    ),
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
