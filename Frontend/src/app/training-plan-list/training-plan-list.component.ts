import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TrainingPlanTableData } from '../model/training-plan-table-data';
import { TrainingPlanListService } from './service/training-plan-list.service';

@Component({
  selector: 'app-training-plan-list',
  templateUrl: './training-plan-list.component.html',
  styleUrls: ['./training-plan-list.component.scss']
})
export class TrainingPlanListComponent implements OnInit {

  // @Input() userLogin: string
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
        { field: 'difficulty', header: 'Trudność' },
        { field: 'mainMuscleGroup', header: 'Główna partia mięśniowa'},
        { field: '', header: ''},
        { field: '', header: ''},
    ];
  
    let userLogin: string = "login";
    
    this.sub.add(
      this.trainingPlanListService.getTrainingPlans(userLogin).subscribe({
        next: data => {
          this.trainingPlanData = data;
        },
        error: err => {
          console.log(err);
        }
      })
    );
  }

  public onRowClick($event, id) {
    this.router.navigateByUrl('/plans/' + id);
  }


}
