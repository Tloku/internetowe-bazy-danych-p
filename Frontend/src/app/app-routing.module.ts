import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlanContainer } from './create-plan/create-plan-container/create-plan.container';
import { ExerciseDetailContainer } from './exercise-list/exercise-detail/exercise-detail.container/exercise-detail.container';
import { ExerciseListFromPlanComponent } from './exercise-list/exercise-list-from-plan/exercise-list-from-plan.component';
import { MainPageComponent } from './main-page/main-page.component';

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
    path: "create-plan", component: CreatePlanContainer
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
