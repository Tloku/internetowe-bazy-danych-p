import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExerciseListService } from '../service/exercise-list.service';
import { catchError, Subscription, throwError } from 'rxjs';
import { ExerciseWithRepsTableData } from 'src/app/model/exercise-table-data';

@Component({
  selector: 'app-exercise-list-from-plan',
  templateUrl: './exercise-list-from-plan.component.html',
  styleUrls: ['./exercise-list-from-plan.component.scss']
})
export class ExerciseListFromPlanComponent implements OnInit, OnDestroy {

  private routeSub: Subscription;
  private sub: Subscription = new Subscription();
  public exercises: ExerciseWithRepsTableData[] = [];
  private planId: number;
  public cols: any[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private exerciseListService: ExerciseListService 
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

    this.sub.add(
      this.exerciseListService.getExercisesFromPlan(this.planId).subscribe({
        next: data => {
          console.log(data);
          this.exercises = data;
        },
        error: msg => {
          console.log("Error: ", msg);
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  onRowClick($event, exerciseId) {
    this.router.navigateByUrl('/exercise/' + exerciseId);
  }
}
