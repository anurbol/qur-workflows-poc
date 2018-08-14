import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-workflows',
  templateUrl: './my-workflows.component.html',
  styleUrls: ['./my-workflows.component.css']
})
export class MyWorkflowsComponent implements OnInit {

  workflows = [
    {name: 'foo'},
    {name: 'bar'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
