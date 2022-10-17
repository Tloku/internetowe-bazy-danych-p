import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { TrainingPlanTableData } from "src/app/model/training-plan-table-data";
import { TrainingPlanListRestService } from "./training-plan-list.rest.service";

@Injectable()
export class TrainingPlanListService {
    
    constructor(private trainingPlanListRestService: TrainingPlanListRestService) {}
    
    getTrainingPlans(userLogin: string): Observable<TrainingPlanTableData[]> {
      return of([]);
    }
}