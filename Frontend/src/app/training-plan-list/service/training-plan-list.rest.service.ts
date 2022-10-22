import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TrainingPlanTableData } from "src/app/model/training-plan-table-data";

@Injectable()
export class TrainingPlanListRestService {

    constructor(private httpClient: HttpClient) {}


    getUsersTrainingPlanTableData(userLogin: string): Observable<TrainingPlanTableData[]> {
        console.info("[TRAINING-PLAN-TABLE-DATA] Get Call")
        return this.httpClient.get<TrainingPlanTableData[]>('http://localhost:8080/api/training_plan/' + userLogin);
    }
}