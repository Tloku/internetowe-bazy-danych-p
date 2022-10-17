import { TemplateBindingParseResult } from '@angular/compiler';
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
  private sub: Subscription;

  testData: TrainingPlanTableData[] = [
      {
        id: 1,
        name: "plan 1",
        date: "08.08.2022",
        difficulty: "Łatwy",
        mainMuscleGroup: "Klatka piersiowa"
      },
      {
        id: 2,
        name: "plan 2",
        date: "10.08.2022",
        difficulty: "Średni",
        mainMuscleGroup: "Nogi"
      },
      {
        id: 3,
        name: "plan 3",
        date: "12.08.2022",
        difficulty: "Trudny",
        mainMuscleGroup: "Plecy"
      },
];

  constructor(
    private router: Router,
    private trainingPlanListService: TrainingPlanListService  
  ) { }

  ngOnInit() {
    this.cols = [
        { field: 'name', header: 'Nazwa' },
        { field: 'date', header: 'Data' },
        { field: 'difficulty', header: 'Trudność' },
        { field: 'mainMuscleGroup', header: 'Główna partia mięśniowa'},
        { field: '', header: ''},
        { field: '', header: ''},
    ];

    let userLogin: string;
    this.sub.add(
      this.trainingPlanListService.getTrainingPlans(userLogin).subscribe(
        data => this.trainingPlanData = data
      )
    );
  }

  public onRowClick($event, id) {
    this.router.navigateByUrl('/plans/' + id);
  }


}
