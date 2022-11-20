import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { CreatePlanRequest, ExerciseTableData, ExerciseWithRepsTableData, UpdatePlanRequest } from "src/app/model/exercise-table-data";
import { GetPaginatedAndFilteredExercisesReq } from "src/app/model/get-paginated-and-filtered-exercises-req";
import { difficultyMapperToString, muscleGroupMapperToString } from '../../create-plan/service/create-plan.translator'
import { EditPlanRestSerivce } from "./edit-plan.rest.service";


@Injectable()
export class EditPlanService implements OnInit {
    private sub = new Subscription();
    private allExercises = new BehaviorSubject<ExerciseTableData[]>([]);
    
    get allExercises$(): Observable<ExerciseTableData[]> {
        return this.allExercises.asObservable();
    }

    private userExercises = new BehaviorSubject<ExerciseWithRepsTableData[]>([]);
    
    get userExercises$(): Observable<ExerciseWithRepsTableData[]> {
        return this.userExercises.asObservable();
    }

    private getExercisesReq: GetPaginatedAndFilteredExercisesReq = {
        exerciseName: "",
        muscleGroup: null,
        difficulty: null,
        page: 0,
        size: 50
    };


    constructor(private editPlanRestService: EditPlanRestSerivce) {}
    
    ngOnInit(): void {
    }

    public serUserExercisesData(exercises: ExerciseWithRepsTableData[]) {
        this.userExercises.next(exercises);
    }
    
    setFilters(name: string, muscleGroup: string, difficulty: string, page: number, size: number) {
        this.getExercisesReq.exerciseName = name;
        this.getExercisesReq.difficulty = difficulty;
        this.getExercisesReq.muscleGroup = muscleGroup;
        if (page) {
            this.getExercisesReq.page = page;
        }
        if (size) {
            this.getExercisesReq.size = size;
        }

        this.editPlanRestService.getExercisesPaginatedAndFiltered(this.getExercisesReq).subscribe(data => {
            this.setAllExercises(data)
        });
    }

    setAllExercises(data: ExerciseTableData[]) {
        let allExercises: ExerciseTableData[] = [];
        data.forEach(e => allExercises.push({id: e.id, exerciseName: e.exerciseName, difficulty: difficultyMapperToString(e.difficulty), muscleGroup: muscleGroupMapperToString(e.muscleGroup)}));
        this.allExercises.next(allExercises);
    }

    updatePlan(planId, data: ExerciseWithRepsTableData[]) {
        let updatePlanRequest: UpdatePlanRequest = {
            exerciseWithReps: data,
            planId: planId
        };
        console.log(updatePlanRequest);
        this.editPlanRestService.updatePlan(updatePlanRequest);
    }

    getUsersExercises(planId) {
        this.editPlanRestService.getUserExercises(planId).subscribe(data => {
            if (data) {
                let exercises = data;

                exercises.forEach(exercise => {
                    exercise.difficulty = difficultyMapperToString(exercise.difficulty)
                    exercise.muscleGroup = muscleGroupMapperToString(exercise.muscleGroup)
                });
                this.userExercises.next(data);
            }
        });
    }
}