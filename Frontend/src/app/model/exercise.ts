import { Difficulty } from "./difficulty";
import { MuscleGroup } from "./muscle-group";

export interface Exercise {
    id: number;
    exerciseName: string;
    description: string;
    url: string;
    difficulty: string;
    muscleGroup: string;
}