import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ExerciseTableData } from 'src/app/model/exercise-table-data';


const EXERCISES: ExerciseTableData[] = [
  {
    id: 1,
    name: "Podciąganie",
    reps: 5,
    series: 3,
    muscleGroup: "plecy",
    difficulty: "trudne"
  },
  {
    id: 2,
    name: "Wyciskanie na ławce płaskiej",
    reps: 10,
    series: 3,
    muscleGroup: "Klatka piersiowa",
    difficulty: "średnie"
  },
  {
    id: 3,
    name: "Bieganie na bieżni",
    reps: 0,
    series: 0,
    muscleGroup: "Kardio",
    difficulty: "Łatwe"
  },
];


@Component({
  selector: 'app-exercise-list-from-plan',
  templateUrl: './exercise-list-from-plan.component.html',
  styleUrls: ['./exercise-list-from-plan.component.scss']
})
export class ExerciseListFromPlanComponent implements OnInit, OnDestroy {

  private routeSub: Subscription;
  public exercises: ExerciseTableData[] = [];
  private planId: number;
  public cols: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router  
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.planId = params['id'];
    })

    this.cols = [
      { field: 'name', header: 'Nazwa' },
      { field: 'reps', header: 'Powtórzenia' },
      { field: 'series', header: 'Serie' },
      { field: 'difficulty', header: 'Trudność' },
      { field: 'muscleGroup', header: 'Partia mięśniowa'},
    ];
    this.exercises = EXERCISES;
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  onRowClick($event, exerciseId) {
    this.router.navigateByUrl('/exercise/' + exerciseId);
  }
}
