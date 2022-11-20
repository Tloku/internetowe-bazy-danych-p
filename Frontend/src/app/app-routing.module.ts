import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlanContainer } from './create-plan/create-plan-container/create-plan.container';
import { EditPlanContainerComponent } from './edit-plan/edit-plan-container/edit-plan-container.component';
import { ExerciseDetailContainer } from './exercise-list/exercise-detail/exercise-detail.container/exercise-detail.container';
import { ExerciseListFromPlanComponent } from './exercise-list/exercise-list-from-plan/exercise-list-from-plan.component';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [{
    path: "", component: MainPageComponent
  },
  {
    path: "plans/:id", component: ExerciseListFromPlanComponent
  },
  {
    path: "exercise/:id", component: ExerciseDetailContainer
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "register", component: RegisterComponent
  },
  {
    path: "create-plan", component: CreatePlanContainer
  },
  {
    path: "edit-plan/:id", component: EditPlanContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
