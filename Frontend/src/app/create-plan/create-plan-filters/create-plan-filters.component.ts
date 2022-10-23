import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Difficulty } from "src/app/model/difficulty";
import { MuscleGroup } from "src/app/model/muscle-group";
import { CreatePlanService } from "../service/create-plan.service";

@Component({
    selector: 'app-create-plan-filters',
    templateUrl: './create-plan-filters.component.html',
    styleUrls:  ['./create-plan-filters.component.scss']
})
export class CreatePlanFiltersComponent implements OnInit {

    public name = new FormControl();
    public difficulty;
    public muscleGroup;

    difficultyOptions: any[] = Object.values(Difficulty) // [Difficulty.EASY, Difficulty.MEDIUM, Difficulty.HARD];
    muscleGroupOptions: any[] =  Object.values(MuscleGroup);

    constructor(private createPlanService: CreatePlanService) {}

    ngOnInit(): void {
    }

    public filter() {
        this.createPlanService.setFilters(this.name.value, this.muscleGroup, this.difficulty);
    }
}