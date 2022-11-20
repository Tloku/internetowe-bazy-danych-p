import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreatePlanRequest, ExerciseTableData, ExerciseWithRepsTableData, UpdatePlanRequest } from "src/app/model/exercise-table-data";
import { GetPaginatedAndFilteredExercisesReq } from "src/app/model/get-paginated-and-filtered-exercises-req";


@Injectable()
export class EditPlanRestSerivce {
   
    constructor(
        private httpClient: HttpClient
    ) {}

    getExercisesPaginatedAndFiltered(getExercisesReq: GetPaginatedAndFilteredExercisesReq): Observable<ExerciseTableData[]> {
        console.info('[PAGINATED-FILTERED-EXERCISES] Post call');
        return this.httpClient.post<ExerciseTableData[]>("http://localhost:8080/api/exercise/get", getExercisesReq);
    }

    updatePlan(updatePlanReq: UpdatePlanRequest) {
        console.info('[UPDATE-PLAN] Post call');
        this.httpClient.post<number>("http://localhost:8080/api/training_plan/update", updatePlanReq).subscribe(data => {
            console.log(data);
        });
    }

    getUserExercises(planId: number): Observable<ExerciseWithRepsTableData[]> {
        return this.httpClient.get<ExerciseWithRepsTableData[]>("http://localhost:8080/api/exercisesWithReps/" + planId);
    }

}