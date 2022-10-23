import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ExerciseTableData } from "src/app/model/exercise-table-data";
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
}