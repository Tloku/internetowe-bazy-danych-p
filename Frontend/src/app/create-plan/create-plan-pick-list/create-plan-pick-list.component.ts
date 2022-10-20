import { Component } from "@angular/core";
import { ExerciseTableData } from "src/app/model/exercise-table-data";

@Component({
    selector: 'app-create-plan-pick-list-component',
    templateUrl: './create-plan-pick-list.component.html',
    styleUrls: ['./create-plan-pick-list.component.scss']
})
export class CreatePlanPickListComponent {

    addToPlan(id: number) {
        console.log(id);
    }

    removeFromPlan(id: number) {
        console.log(id);
    }

    exercise: ExerciseTableData[] = [
        {
            id: 1,
            name: "Podciaganie",
            difficulty: "trudne",
            muscleGroup: "Plecy"
        },
        {
            id: 2,
            name: "Wyciskanie na ławce płaskiej",
            difficulty: "Łatwe",
            muscleGroup: "Klatka piersiowa"
        },
        {
            id: 2,
            name: "Wyciskanie na ławce płaskiej",
            difficulty: "Łatwe",
            muscleGroup: "Klatka piersiowa"
        },
        {
            id: 2,
            name: "Wyciskanie na ławce płaskiej",
            difficulty: "Łatwe",
            muscleGroup: "Klatka piersiowa"
        },
        {
            id: 2,
            name: "Wyciskanie na ławce płaskiej",
            difficulty: "Łatwe",
            muscleGroup: "Klatka piersiowa"
        },
        {
            id: 2,
            name: "Wyciskanie na ławce płaskiej",
            difficulty: "Łatwe",
            muscleGroup: "Klatka piersiowa"
        },
        {
            id: 2,
            name: "Wyciskanie na ławce płaskiej",
            difficulty: "Łatwe",
            muscleGroup: "Klatka piersiowa"
        },
        {
            id: 2,
            name: "Wyciskanie na ławce płaskiej",
            difficulty: "Łatwe",
            muscleGroup: "Klatka piersiowa"
        },
        {
            id: 2,
            name: "Wyciskanie na ławce płaskiej",
            difficulty: "Łatwe",
            muscleGroup: "Klatka piersiowa"
        },
        {
            id: 2,
            name: "Wyciskanie na ławce płaskiej",
            difficulty: "Łatwe",
            muscleGroup: "Klatka piersiowa"
        },
        {
            id: 2,
            name: "Wyciskanie na ławce płaskiej",
            difficulty: "Łatwe",
            muscleGroup: "Klatka piersiowa"
        }
    ]


}