import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Subscription } from "rxjs";
import { ExerciseTableData, ExerciseWithRepsTableData } from "src/app/model/exercise-table-data";
import { EditPlanService } from "../services/edit-plan.service";


@Component({
    selector: "app-edit-plan-all-exercises",
    templateUrl: './edit-plan-all-exercises.component.html',
    styleUrls: ['./edit-plan-all-exercises.component.scss']
})
export class EditPlanAllExercisesComponent implements OnInit {
    public displayDialog: boolean = false;
    public reps: number;
    public series: number;
    public allExercises: ExerciseTableData[] = [];
    private sub = new Subscription();
    public userExercises: ExerciseWithRepsTableData[] = [];
    private exerciseToAdd: ExerciseTableData;

    constructor(
        private editPlanService: EditPlanService,
        private router: Router
    ) {}


    ngOnInit(): void {
        this.editPlanService.setFilters("", "", "", 0, 10);
        this.sub.add(
            this.editPlanService.allExercises$.subscribe(data =>{
                if (data) {
                    this.allExercises = data
                }
            })
        )
        this.sub.add(
            this.editPlanService.userExercises$.subscribe(data => {
                if(data) {
                    this.userExercises = data;
                }
            })
        )

    }

    public addToPlan(id) {
        if(this.userExercises.find(e => e.exerciseId == id)) {
            return;
        }
        this.exerciseToAdd = this.allExercises.find(e => e.id == id);

        if(this.exerciseToAdd) { 
            this.addRepsAndSeriesToExercise();
        }
    }

    public addRepsAndSeriesToExercise() {
        this.displayDialog = true;
        let exerciseWithRepsTableData: ExerciseWithRepsTableData;
        
        if(this.reps && this.series) {
            exerciseWithRepsTableData = this.mapExerciseTableDataToExerciseWithRepsTableData(this.exerciseToAdd);
            this.userExercises.push(exerciseWithRepsTableData);
            this.editPlanService.serUserExercisesData(this.userExercises)
            this.reps = null;
            this.series = null;
            this.displayDialog = false;
        }
    }
    
    private mapExerciseTableDataToExerciseWithRepsTableData(exerciseToMap: ExerciseTableData) : ExerciseWithRepsTableData {
        let exerciseWithRepsTableData: ExerciseWithRepsTableData = {
            id: 0,
            exerciseId: 0,
            muscleGroup: "",
            exerciseName: "",
            reps: 0,
            series: 0,
            difficulty: ""
        };

        exerciseWithRepsTableData.exerciseId = exerciseToMap.id;
        exerciseWithRepsTableData.difficulty = exerciseToMap.difficulty;
        exerciseWithRepsTableData.muscleGroup = exerciseToMap.muscleGroup;
        exerciseWithRepsTableData.exerciseName = exerciseToMap.exerciseName;
        exerciseWithRepsTableData.reps = this.reps;
        exerciseWithRepsTableData.series = this.series;

        return exerciseWithRepsTableData
    }

    public navigateToDetailsPage(id) {
        this.router.navigate(['/exercise/' + id]);
    }
}