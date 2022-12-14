import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, Subscription } from "rxjs";
import { ExerciseTableData, ExerciseWithRepsTableData } from "src/app/model/exercise-table-data";
import { CreatePlanService } from "../service/create-plan.service";

@Component({
    selector: 'app-create-plan-pick-list-component',
    templateUrl: './create-plan-pick-list.component.html',
    styleUrls: ['./create-plan-pick-list.component.scss']
})
export class CreatePlanPickListComponent implements OnInit {
    public allExercises: ExerciseTableData[] = [];
    
    private sub = new Subscription();
    public displayDialog: boolean = false;
    public reps: number;
    public series: number;
    private exerciseToAdd: ExerciseTableData;
    public chosenExercisesTableData: ExerciseWithRepsTableData[] = [];

    constructor(
        private createPlanService: CreatePlanService,
        private router: Router
    ) {}

    ngOnInit(): void {
       this.createPlanService.setFilters("", "", "", 0, 10);
       this.sub.add(
            this.createPlanService.allExercises$.subscribe({
                next: data => {
                    this.allExercises = data;
                },
                error: error => console.log(error)
            })
       )
    }
    
    addToPlan(id: number) {
        this.exerciseToAdd = this.allExercises.find(e => e.id == id);
        if(this.exerciseToAdd) { 
            this.addRepsAndSeriesToExercise();
        }
    }

    removeFromPlan(id: number) {
        const index = this.chosenExercisesTableData.indexOf(
            this.chosenExercisesTableData.find(e => e.id = id)
        )

        if (index > -1) {
            this.chosenExercisesTableData.splice(index, 1);
        }
    }

    navigateToDetailsPage(id) {
        this.router.navigate(['/exercise/' + id]);
    }

    public addRepsAndSeriesToExercise() {
        this.displayDialog = true;
        let exerciseWithRepsTableData: ExerciseWithRepsTableData;
        
        if(this.reps && this.series) {
            exerciseWithRepsTableData = this.mapExerciseTableDataToExerciseWithRepsTableData(this.exerciseToAdd);
            this.chosenExercisesTableData.push(exerciseWithRepsTableData);
            this.createPlanService.setChosenExercisesData(this.chosenExercisesTableData)
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
}