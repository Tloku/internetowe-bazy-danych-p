import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { catchError, Subscription, throwError } from "rxjs";
import { ExerciseDetail } from "src/app/model/exercise-detail";
import { ExerciseDetailService } from "../../service/exercise-detali.service";


const DETAIL: ExerciseDetail = {
    name: "Podciąganie",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint?",
    url: "https://youtu.be/YYbqPzlwY6c",
    difficulty: "Trudne",
    muscleGroup: "Plecy"
} 

@Component({
    selector: 'app-exercise-detail-component',
    templateUrl: './exercise-detail.component.html',
    styleUrls: ['./exercise-detail.component.scss']
})
export class ExerciseDetailComponent implements OnInit, OnDestroy{
    public exerciseDetail: ExerciseDetail;
    private sub: Subscription = new Subscription();
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
        this.exerciseDetail = DETAIL;
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
        this.routeSub.unsubscribe();
        this.exerciseDetail = null;
    }

}