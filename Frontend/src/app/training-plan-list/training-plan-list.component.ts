import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private trainingPlanListService: TrainingPlanListService  
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
  
    let userLogin: string = "Admin";
    
    this.sub.add(
      this.trainingPlanListService.getTrainingPlans(userLogin).subscribe({
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
    console.log(id)
    this.router.navigateByUrl('edit-plan/' + id);
  }
}

