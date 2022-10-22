import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { Difficulty } from "src/app/model/difficulty";
import { Exercise } from "src/app/model/exercise";
import { ExerciseDetailService } from "../../service/exercise-detali.service";



@Component({
    selector: 'app-exercise-detail-component',
    templateUrl: './exercise-detail.component.html',
    styleUrls: ['./exercise-detail.component.scss']
})
export class ExerciseDetailComponent implements OnInit, OnDestroy{
    public exerciseDetail: Exercise;
    private sub: Subscription = new Subscription();
    private routeSub: Subscription;
    private exerciseId: number;

    constructor(
        private exerciseDetailService: ExerciseDetailService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit() {
        this.routeSub = this.route.params.subscribe(params => {
            this.exerciseId = params['id'];
          })

        this.sub.add(
            this.exerciseDetailService.getExerciseDetail(this.exerciseId).subscribe({
                next: data => {
                    this.exerciseDetail = data;
                },
                error: msg => {
                    console.log("error:", msg);
                }
            })
        );
    }

    private mapToDetail(exercise: Exercise) {

    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
        this.routeSub.unsubscribe();
        this.exerciseDetail = null;
    }

}