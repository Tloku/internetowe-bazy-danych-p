export interface ExerciseWithRepsTableData {
    id: number;
    muscleGroup: string;
    exerciseName: string;
    exerciseId: number;
    reps: number;
    series: number;
    difficulty: string;
}

export interface ExerciseTableData {
    id: number;
    muscleGroup: string;
    exerciseName: string;
    difficulty: string;
}

export interface CreatePlanRequest {
    name: string;
    exerciseWithReps: ExerciseWithRepsTableData[];
}

export interface UpdatePlanRequest {
    planId: number;
    exerciseWithReps: ExerciseWithRepsTableData[];
}