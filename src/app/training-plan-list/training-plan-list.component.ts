import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface TestData {
  id: number;
  name: string;
  date: string;
  difficulty: string;
  mainMuscleGroup: string;
}


@Component({
  selector: 'app-training-plan-list',
  templateUrl: './training-plan-list.component.html',
  styleUrls: ['./training-plan-list.component.scss']
})
export class TrainingPlanListComponent implements OnInit {

  cols: any[] = [];

  testData: TestData[] = [
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

  constructor(private router: Router) { }

  ngOnInit() {

    this.cols = [
        { field: 'name', header: 'Nazwa' },
        { field: 'date', header: 'Data' },
        { field: 'difficulty', header: 'Trudność' },
        { field: 'mainMuscleGroup', header: 'Główna partia mięśniowa'},
        { field: '', header: ''},
        { field: '', header: ''},
    ];
  }

  public onRowClick($event, id) {
    this.router.navigateByUrl('/plans/' + id);
  }

}
