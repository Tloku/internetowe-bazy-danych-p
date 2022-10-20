import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ExerciseWithRepsTableData } from "src/app/model/exercise-table-data";
import { ExerciseListRestService } from "./exercise-list.rest.service";

@Injectable()
export class ExerciseListService {

    constructor(private exerciseListRestService: ExerciseListRestService) {}

    getExercisesFromPlan(planId: number): Observable<ExerciseWithRepsTableData[]> {
        if (isNaN(planId) || !planId) {
            return of([]);
        } 
        return this.exerciseListRestService.fetchExercisesFromPlanById(planId);
    }
}