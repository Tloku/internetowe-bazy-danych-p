import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Exercise } from "src/app/model/exercise";

@Injectable()
export class ExerciseDetailRestService {

    constructor(private httpClient: HttpClient) {}
    

    public getExerciseDetailById(id: number): Observable<Exercise> {
        console.info("[EXERCISE-DETAIL] Get Call")
        return this.httpClient.get<Exercise>('http://localhost:8080/api/exercise/' + id);
    }

}