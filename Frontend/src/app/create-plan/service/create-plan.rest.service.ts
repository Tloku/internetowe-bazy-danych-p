import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CreatePlanRequest, ExerciseTableData } from "src/app/model/exercise-table-data";
import { GetPaginatedAndFilteredExercisesReq } from "src/app/model/get-paginated-and-filtered-exercises-req";


@Injectable()
export class CreatePlanRestService {

    constructor(
        private httpClient: HttpClient
    ) {}

    getExercisesPaginatedAndFiltered(getExercisesReq: GetPaginatedAndFilteredExercisesReq): Observable<ExerciseTableData[]> {
        console.info('[PAGINATED-FILTERED-EXERCISES] Post call');
        return this.httpClient.post<ExerciseTableData[]>("http://localhost:8080/api/exercise/get", getExercisesReq);
    }

    createNewPlan(createPlanReq: CreatePlanRequest) {
        console.info('[CREATE-PLAN] Post call');
        this.httpClient.post<number>("http://localhost:8080/api/training_plan/create", createPlanReq).subscribe(data => {
            console.log(data);
        })
    }
}