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
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
