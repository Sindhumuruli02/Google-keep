import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NotecardComponent } from './notecard/notecard.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotesContainerComponent } from './notes-container/notes-container.component';
import { ArchieveContainerComponent } from './archieve-container/archieve-container.component';
import { TrashContainerComponent } from './trash-container/trash-container.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'notecard',
    component: NotecardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'notes',
      },
      {
        path: 'notes',
        component: NotesContainerComponent,
      },
      {
        path: 'archieve',
        component: ArchieveContainerComponent,
      },
      {
        path: 'trash',
        component: TrashContainerComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}