import { Component, OnInit } from '@angular/core';
import { addWorkflowState } from './add-workflow.state';

@Component({
  selector: 'app-add-workflow',
  templateUrl: './add-workflow.component.html',
  styleUrls: ['./add-workflow.component.css']
})
export class AddWorkflowComponent implements OnInit {

  state = addWorkflowState;

  constructor() { }

  ngOnInit() {}

}
