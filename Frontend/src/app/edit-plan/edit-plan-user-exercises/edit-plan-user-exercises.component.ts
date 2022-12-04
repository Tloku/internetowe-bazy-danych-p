import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ExerciseWithRepsTableData } from "src/app/model/exercise-table-data";
import { EditPlanService } from "../services/edit-plan.service";


@Component({
    selector: "app-edit-plan-user-exercises",
    templateUrl: './edit-plan-user-exercises.component.html',
    styleUrls: ['./edit-plan-user-exercises.component.scss']
})
export class EditPlanUserExercisesComponent {

    public chosenExercisesTableData: ExerciseWithRepsTableData[] = [];
    private sub = new Subscription();
    private planId: number;

    constructor(
        private editPlanService: EditPlanService,
        private activatedRoute: ActivatedRoute,
        private router: Router,
    ) {}

    ngOnInit(): void {
        this.planId = +this.activatedRoute.snapshot.paramMap.get('id');
        this.editPlanService.getUsersExercises(this.planId);

        this.sub.add(
            this.editPlanService.userExercises$.subscribe(data => {
                if (data) {
                    this.chosenExercisesTableData = data;
                }
            })
        )

    }

    public updatePlan() {
        this.editPlanService.updatePlan(this.planId, this.chosenExercisesTableData);
        this.router.navigateByUrl('/');
    }

    public removeExerciseFromChosenExercises(id) {
        this.chosenExercisesTableData = this.chosenExercisesTableData.filter(e => e.id !== id);
        this.editPlanService.serUserExercisesData(this.chosenExercisesTableData);
    }
}