import { Difficulty } from "./difficulty";
import { MuscleGroup } from "./muscle-group";

export class GetPaginatedAndFilteredExercisesReq {
    exerciseName: string;
    muscleGroup: MuscleGroup;
    difficulty: Difficulty;
    page: number;
    size: number;
}