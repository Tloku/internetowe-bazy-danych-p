import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ExerciseWithRepsTableData } from "src/app/model/exercise-table-data";
import { CreatePlanService } from "../service/create-plan.service";


@Component({
    selector: 'app-create-plan-give-name-component',
    templateUrl: './create-plan-give-name.component.html',
    styleUrls: ['./create-plan-pick-list.component.scss']
})
export class CreatePlanGiveNameComponent implements OnInit {

    public chosenExercisesWithRowsTableData: ExerciseWithRepsTableData[]; 
    public name: string;
    private sub = new Subscription()

    constructor(
        private createPlanService: CreatePlanService
    ) {}

    ngOnInit(): void {
        this.sub.add(
            this.createPlanService.chosenExercises$.subscribe(data => {
                if(data) {
                    this.chosenExercisesWithRowsTableData = data;
                }
            })
        )

    } 

    public createPlan() {
        if (this.name && this.chosenExercisesWithRowsTableData) { 
            this.createPlanService.createPlan(this.name, this.chosenExercisesWithRowsTableData);
        }

    }

}