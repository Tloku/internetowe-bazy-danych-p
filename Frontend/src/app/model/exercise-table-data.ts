import { Difficulty } from "./difficulty";
import { MuscleGroup } from "./muscle-group";

export interface ExerciseWithRepsTableData {
    id: number;
    muscleGroup: MuscleGroup;
    exerciseName: string;
    reps: number;
    series: number;
    difficulty: Difficulty;
}

export interface ExerciseTableData {
    id: number;
    muscleGroup: string;
    exerciseName: string;
    difficulty: string;
}