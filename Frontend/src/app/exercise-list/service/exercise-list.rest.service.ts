import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ExerciseWithRepsTableData } from "src/app/model/exercise-table-data";

@Injectable()
export class ExerciseListRestService {
    
    constructor(private httpClient: HttpClient) {}
    
    fetchExercisesFromPlanById(planId: number): Observable<ExerciseWithRepsTableData[]> {
        return this.httpClient.get<ExerciseWithRepsTableData[]>("http://localhost:8080/plans/" + planId);
    }
}