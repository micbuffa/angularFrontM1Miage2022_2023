import { Injectable } from '@angular/core';
import { Assignment } from '../assignments/assignment.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {
  assignments:Assignment[] = [
    {
      nom: "Devoir Angular à rendre",
      dateDeRendu: new Date('2022-10-10'),
      rendu: false
    },
    {
      nom: "Devoir JAVA à rendre",
      dateDeRendu: new Date('2022-09-10'),
      rendu: true
    },
    {
      nom: "Devoir BD à rendre",
      dateDeRendu: new Date('2022-12-01'),
      rendu: false
    }
    ];

  constructor() { }

  getAssignments():Observable<Assignment[]> {
    return of(this.assignments);
  }
}
