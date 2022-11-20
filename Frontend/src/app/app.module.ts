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
import { ExerciseDetailComponent } from './exercise-list/exercise-detail/exercise.detail.component/exercise-detail.component';
import { ExerciseDetailContainer } from './exercise-list/exercise-detail/exercise-detail.container/exercise-detail.container';
import { CardModule } from 'primeng/card';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { PickListModule } from 'primeng/picklist'
import { CreatePlanContainer } from './create-plan/create-plan-container/create-plan.container';
import { CreatePlanPickListComponent } from './create-plan/create-plan-pick-list/create-plan-pick-list.component';
import { DropdownModule } from 'primeng/dropdown';
import { CreatePlanFiltersComponent } from './create-plan/create-plan-filters/create-plan-filters.component';
import { FlexModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { GMapModule } from 'primeng/gmap';
import { GMapService } from './g-map/g-map.service';
import { GMapComponent } from './g-map/g-map.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { LoginComponent } from './login/login.component';
import { MenuModule } from 'primeng/menu';
import { RegisterComponent } from './register/register.component';
import { PanelModule } from 'primeng/panel';
import {PasswordModule} from 'primeng/password';
import {CalendarModule} from 'primeng/calendar';
import { ReactiveFormsModule } from '@angular/forms';
import { CreatePlanService } from './create-plan/service/create-plan.service';
import { CreatePlanRestService } from './create-plan/service/create-plan.rest.service';

import { httpInterceptorProviders } from './_helpers/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TrainingPlanListComponent,
    NavBarComponent,
    MainPageComponent,
    ExerciseListFromPlanComponent,
    ExerciseDetailComponent,
    ExerciseDetailContainer,
    LoginComponent,
    RegisterComponent,
    ExerciseDetailContainer,
    CreatePlanPickListComponent,
    CreatePlanContainer,
    CreatePlanFiltersComponent,
    GMapComponent,
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
    HttpClientModule,
    CardModule,
    YouTubePlayerModule,
    MenuModule,
    PanelModule,
    PasswordModule,
    DropdownModule,
    CalendarModule,
    FormsModule,
    YouTubePlayerModule,
    PickListModule,
    DropdownModule,
    FlexModule,
    FormsModule,
    GMapModule,
    MessagesModule,
    MessageModule,
    ReactiveFormsModule
  ],
  providers: [
    ExerciseListService,
    ExerciseListRestService,
    ExerciseDetailService,
    ExerciseDetailRestService,
    TrainingPlanListService,
    TrainingPlanListRestService,
    GMapService,
    MessageService,
    CreatePlanService,
    CreatePlanRestService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
