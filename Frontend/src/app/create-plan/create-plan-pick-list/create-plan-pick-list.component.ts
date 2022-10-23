import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { ExerciseTableData } from "src/app/model/exercise-table-data";
import { CreatePlanService } from "../service/create-plan.service";

@Component({
    selector: 'app-create-plan-pick-list-component',
    templateUrl: './create-plan-pick-list.component.html',
    styleUrls: ['./create-plan-pick-list.component.scss']
})
export class CreatePlanPickListComponent implements OnInit {
    public allExercises: ExerciseTableData[] = [];
    public chosenExercises: ExerciseTableData[] = [];
    private sub = new Subscription();


    constructor(private createPlanService: CreatePlanService) {}

    ngOnInit(): void {
       this.createPlanService.setPageAndSize(0, 10);
       this.sub.add(
            this.createPlanService.allExercises$.subscribe({
                next: data => {
                    this.allExercises = data;
                    console.log("sub", this.allExercises);
                },
                error: error => console.log(error)
            })
       )
       console.log("oninit", this.allExercises);
    }
    
    addToPlan(id: number) {
        this.chosenExercises.push(this.allExercises.find(e => e.id = id));
    }

    removeFromPlan(id: number) {
        const index = this.chosenExercises.indexOf(
            this.chosenExercises.find(e => e.id = id)
        )

        if (index > -1) {
            this.chosenExercises.splice(index, 1);
        }
    }

    
}