import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { Difficulty } from "src/app/model/difficulty";
import { ExerciseTableData } from "src/app/model/exercise-table-data";
import { GetPaginatedAndFilteredExercisesReq } from "src/app/model/get-paginated-and-filtered-exercises-req";
import { MuscleGroup } from "src/app/model/muscle-group";
import { CreatePlanRestService } from "./create-plan.rest.service";


@Injectable()
export class CreatePlanService implements OnInit {
    private sub = new Subscription();
    private allExercises = new BehaviorSubject<ExerciseTableData[]>([]);
    
    get allExercises$(): Observable<ExerciseTableData[]> {
        return this.allExercises.asObservable();
    }

    private getExercisesReq: GetPaginatedAndFilteredExercisesReq = {
        exerciseName: "",
        muscleGroup: null,
        difficulty: null,
        page: 0,
        size: 10
    };


    constructor(private createPlanRestService: CreatePlanRestService) {}
    
    ngOnInit(): void {
    }
    
    setFilters(name: string, muscleGroup: MuscleGroup, difficulty: Difficulty) {
        this.getExercisesReq.exerciseName = name;
        this.getExercisesReq.difficulty = difficulty;
        this.getExercisesReq.muscleGroup = muscleGroup;
        this.createPlanRestService.getExercisesPaginatedAndFiltered(this.getExercisesReq).subscribe(data => this.setAllExercises(data));
    }

    setPageAndSize(page: number, size: number) {
        this.getExercisesReq.page = page;
        this.getExercisesReq.size = size;
        this.createPlanRestService.getExercisesPaginatedAndFiltered(this.getExercisesReq).subscribe(data => this.setAllExercises(data));
    }


    setAllExercises(data: ExerciseTableData[]) {
        let allExercises: ExerciseTableData[] = [];
        console.log("data:", data);
        data.forEach(e => allExercises.push({id: e.id, name: e.name, difficulty: e.difficulty, muscleGroup: e.muscleGroup}));
        this.allExercises.next(allExercises);
    }

}