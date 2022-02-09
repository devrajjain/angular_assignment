import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  { path: 'posts', component: PostListComponent },
  { path: 'employee', component: EmployeeFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [PostListComponent, EmployeeFormComponent]