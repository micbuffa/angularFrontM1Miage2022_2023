import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AssignmentsComponent } from './assignments/assignments.component';
import { AssignmentsDetailsComponent } from './assignments/assignments-details/assignments-details.component';
import { RenduDirective } from './shared/rendu.directive';
import { FormsModule } from '@angular/forms';
import { AddAssignmentComponent } from './assignments/add-assignment/add-assignment.component';
import { RouterModule, Routes } from '@angular/router';
import { EditAssignmentComponent } from './assignments/edit-assignment/edit-assignment.component';
import { AuthGuard } from './shared/auth.guard';

const routes:Routes = [
  {path: '', component: AssignmentsComponent},
  {path: 'home', component: AssignmentsComponent},
  {path: 'add', component: AddAssignmentComponent},
  {path: 'assignment/:id', component: AssignmentsDetailsComponent},
  {
    path: 'assignment/:id/edit',
    component: EditAssignmentComponent,
    canActivate: [AuthGuard]
  }
]
@NgModule({
  declarations: [
    AppComponent,
    AssignmentsComponent, AssignmentsDetailsComponent,
    RenduDirective,
    AddAssignmentComponent,
    EditAssignmentComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule, MatIconModule, MatDividerModule,
    MatInputModule, MatFormFieldModule,
    MatDatepickerModule, MatNativeDateModule, MatListModule,
    MatCardModule, MatCheckboxModule, MatSlideToggleModule,
    FormsModule, HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
