import { Component, OnInit } from '@angular/core';
import { AssignmentsService } from '../shared/assignments.service';
import { Assignment } from './assignment.model';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  titre="Mon application sur les assignments";
  formVisible=false;

  assignments!:Assignment[];

  assignmentSelectionne!:Assignment;


  constructor(private assignmentsService:AssignmentsService) { }

  ngOnInit(): void {
   this.assignmentsService.getAssignments()
   .subscribe(tableauDesAssignmentsObservable => {
    this.assignments = tableauDesAssignmentsObservable
   });
  }


  onAssignmentClicke(assignment:Assignment) {
    this.assignmentSelectionne = assignment;
  }

  onAddAssignmentBtnClick() {
    this.formVisible = true;
  }

  onNouvelAssignment(assignment:Assignment) {
    this.assignments.push(assignment);
    this.formVisible = false;
  }
}
