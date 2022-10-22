import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Exercise } from "src/app/model/exercise";
import { ExerciseDetailRestService } from "./exercise-detail.rest.service";

@Injectable()
export class ExerciseDetailService {

    constructor(private exerciseDetailRestService: ExerciseDetailRestService) {}

    public getExerciseDetail(id: number): Observable<Exercise> {
        if (isNaN(id) || !id) {
            return of(null);
        } 
        return this.exerciseDetailRestService.getExerciseDetailById(id);
    }

}