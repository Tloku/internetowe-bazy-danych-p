import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ExerciseDetail } from "src/app/model/exercise-detail";

@Injectable()
export class ExerciseDetailRestService {

    constructor(private httpClient: HttpClient) {}
    

    public getExerciseDetailById(id: number): Observable<ExerciseDetail> {
        return this.httpClient.get<ExerciseDetail>('http://localhost:8080/exercise-detail/' + id);
    }

}