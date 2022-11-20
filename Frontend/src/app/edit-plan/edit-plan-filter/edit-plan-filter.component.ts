import { Component } from "@angular/core";
import { FormControl } from "@angular/forms";
import { difficultyMapperToEntity, muscleGroupMapperToEntity } from "src/app/create-plan/service/create-plan.translator";
import { Difficulty } from "src/app/model/difficulty";
import { MuscleGroup } from "src/app/model/muscle-group";
import { EditPlanService } from "../services/edit-plan.service";



@Component({
    selector: "app-edit-plan-filter",
    templateUrl: './edit-plan-filter.component.html',
    styleUrls: ['./edit-plan-filter.component.scss']
})
export class EditPlanFilterComponent {
    public name = new FormControl();
    public difficulty;
    public muscleGroup;

    difficultyOptions: any[] = Object.values(Difficulty)
    muscleGroupOptions: any[] =  Object.values(MuscleGroup);

    constructor(private editPlanService: EditPlanService) {}

    ngOnInit(): void {
    }

    public filter() {
        this.editPlanService.setFilters(this.name.value, muscleGroupMapperToEntity(this.muscleGroup), difficultyMapperToEntity(this.difficulty), null, null);
    }

}