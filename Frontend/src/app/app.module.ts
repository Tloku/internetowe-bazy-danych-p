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
import { DialogModule } from 'primeng/dialog';
import {InputNumberModule} from 'primeng/inputnumber';
import { CreatePlanGiveNameComponent } from './create-plan/create-plan-pick-list/create-plan-give-name.component';
import { EditPlanContainerComponent } from './edit-plan/edit-plan-container/edit-plan-container.component';
import { EditPlanAllExercisesComponent } from './edit-plan/edit-plan-all-exercises/edit-plan-all-exercises.component';
import { EditPlanUserExercisesComponent } from './edit-plan/edit-plan-user-exercises/edit-plan-user-exercises.component';
import { EditPlanFilterComponent } from './edit-plan/edit-plan-filter/edit-plan-filter.component';
import { EditPlanService } from './edit-plan/services/edit-plan.service';
import { EditPlanRestSerivce } from './edit-plan/services/edit-plan.rest.service';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ConfirmationService } from 'primeng/api';

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
    CreatePlanGiveNameComponent,
    EditPlanContainerComponent,
    EditPlanAllExercisesComponent,
    EditPlanUserExercisesComponent,
    EditPlanFilterComponent
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
    MessagesModule,
    MessageModule,
    ReactiveFormsModule,
    DialogModule,
    InputNumberModule,
    ConfirmPopupModule,
  ],
  providers: [
    ExerciseListService,
    ExerciseListRestService,
    ExerciseDetailService,
    ExerciseDetailRestService,
    TrainingPlanListService,
    TrainingPlanListRestService,
    MessageService,
    CreatePlanService,
    CreatePlanRestService,
    EditPlanService,
    EditPlanRestSerivce,
    ConfirmationService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
