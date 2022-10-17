import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { catchError, Subscription, throwError } from "rxjs";
import { ExerciseDetail } from "src/app/model/exercise-detail";
import { ExerciseDetailService } from "../../service/exercise-detali.service";


@Component({
    selector: 'app-exercise-detail-component',
    templateUrl: './exercise-detail.component.html',
    styleUrls: ['./exercise-detail.component.scss']
})
export class ExerciseDetailComponent implements OnInit, OnDestroy{
    public exerciseDetail: ExerciseDetail;
    private sub: Subscription;
    private routeSub: Subscription;
    private exerciseId: number;

    constructor(
        private exerciseDetailService: ExerciseDetailService,
        private route: ActivatedRoute,
    ) {}

    ngOnInit(): void {
        this.routeSub = this.route.params.subscribe(params => {
            this.exerciseId = params['id'];
          })

        this.sub.add(
            this.exerciseDetailService.getExerciseDetail(this.exerciseId).subscribe(
                data => this.exerciseDetail = data,
                catchError(e => throwError(e))
            )
        )
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
        this.routeSub.unsubscribe();
        this.exerciseDetail = null;
    }

}