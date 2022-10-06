import { Component, Input, OnInit } from '@angular/core';
import { Assignment } from '../assignment.model';

@Component({
  selector: 'app-assignments-details',
  templateUrl: './assignments-details.component.html',
  styleUrls: ['./assignments-details.component.css'],
})
export class AssignmentsDetailsComponent implements OnInit {
  @Input() assignmentTransmis!: Assignment;

  constructor() {}

  ngOnInit(): void {}
  onAssignmentRendu() {
    this.assignmentTransmis.rendu = true;
  }
}
