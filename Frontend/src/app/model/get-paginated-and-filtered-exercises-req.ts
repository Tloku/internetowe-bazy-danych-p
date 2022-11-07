import { Difficulty } from "./difficulty";
import { MuscleGroup } from "./muscle-group";

export class GetPaginatedAndFilteredExercisesReq {
    exerciseName: string;
    muscleGroup: string;
    difficulty: string;
    page: number;
    size: number;
}