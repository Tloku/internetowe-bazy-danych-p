import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { difficultyMapperToString, muscleGroupMapperToString } from '../create-plan/service/create-plan.translator';
import { TrainingPlanTableData } from '../model/training-plan-table-data';
import { TrainingPlanListService } from './service/training-plan-list.service';

@Component({
  selector: 'app-training-plan-list',
  templateUrl: './training-plan-list.component.html',
  styleUrls: ['./training-plan-list.component.scss']
})
export class TrainingPlanListComponent implements OnInit {

  public trainingPlanData: TrainingPlanTableData[]; 
  public cols: any[] = [];
  private sub: Subscription = new Subscription();
  userLogin: string = "Admin";
  
  constructor(
    private router: Router,
    private trainingPlanListService: TrainingPlanListService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.cols = [
        { field: 'name', header: 'Nazwa' },
        { field: 'dateFrom', header: 'Początek' },
        { field: 'dateTo', header: 'Koniec' },
        { field: 'mainDifficulty', header: 'Trudność' },
        { field: 'mainMuscleGroup', header: 'Główna partia mięśniowa'},
        { field: '', header: ''},
        { field: '', header: ''},
    ];
  
    
    this.sub.add(
      this.trainingPlanListService.getTrainingPlans(this.userLogin).subscribe({
        next: data => {
          this.trainingPlanData = this.mapDataToTrainingPlanData(data);
        },
        error: err => {
          console.log(err);
        }
      })
    );
  }

  private mapDataToTrainingPlanData(data: TrainingPlanTableData[]) {
    var trainingPlanData: TrainingPlanTableData[] = [];  
    data.forEach(plan => {
        trainingPlanData.push({
          id: plan.id,
          name: plan.name,
          dateFrom: plan.dateFrom.toString().replaceAll(',', '/'),
          dateTo: plan.dateTo.toString().replaceAll(',', '/'),
          mainDifficulty: difficultyMapperToString(plan.mainDifficulty),
          mainMuscleGroup: muscleGroupMapperToString(plan.mainMuscleGroup),
         })
        }
    );
    return trainingPlanData;
  }

  public onRowClick($event, id) {
    this.router.navigateByUrl('/plans/' + id);
  }

  public goToEditPage(id) {
    this.router.navigateByUrl('edit-plan/' + id);
  }

  public deletePlanConfiramtionPopup(event, id) {
    this.confirmationService.confirm({
      target: event.target,
      message: 'Czy na pewno chcesz usunąć plan treningowy?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.deletePlan(id);
      },
      acceptButtonStyleClass: "p-button-success p-button-raised",
      rejectButtonStyleClass: "p-button-danger p-button-text",
      acceptLabel: "Tak",
      rejectLabel: "Nie"
    });
  }

  private deletePlan(id) {
      this.trainingPlanListService.deletePlan(id);
      window.location.reload();
  }
}

