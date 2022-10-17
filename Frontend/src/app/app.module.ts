import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrainingPlanListComponent } from './training-plan-list/training-plan-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { InputTextModule } from "primeng/inputtext";
import { ButtonModule } from 'primeng/button';
import { MainPageComponent } from './main-page/main-page.component'
import {TableModule} from 'primeng/table';
import {FieldsetModule} from 'primeng/fieldset';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule } from '@angular/router';
import { ExerciseListFromPlanComponent } from './exercise-list/exercise-list-from-plan/exercise-list-from-plan.component';
import { ExerciseListService } from './exercise-list/service/exercise-list.service';
import { ExerciseListRestService } from './exercise-list/service/exercise-list.rest.service';
import { HttpClientModule } from '@angular/common/http'
import { ExerciseDetailService } from './exercise-list/service/exercise-detali.service';
import { ExerciseDetailRestService } from './exercise-list/service/exercise-detail.rest.service';
import { TrainingPlanListService } from './training-plan-list/service/training-plan-list.service';
import { TrainingPlanListRestService } from './training-plan-list/service/training-plan-list.rest.service';

@NgModule({
  declarations: [
    AppComponent,
    TrainingPlanListComponent,
    NavBarComponent,
    MainPageComponent,
    ExerciseListFromPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    FieldsetModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [
    ExerciseListService,
    ExerciseListRestService,
    ExerciseDetailService,
    ExerciseDetailRestService,
    TrainingPlanListService,
    TrainingPlanListRestService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
