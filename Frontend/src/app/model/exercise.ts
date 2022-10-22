import { Difficulty } from "./difficulty";
import { MuscleGroup } from "./muscle-group";

export interface Exercise {
    id: number;
    name: string;
    description: string;
    url: string;
    difficulty: Difficulty;
    muscleGroup: MuscleGroup;
}