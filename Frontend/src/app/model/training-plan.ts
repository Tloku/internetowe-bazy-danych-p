import { ExerciseWithReps } from "./exercise-with-reps";
import { MuscleGroup } from "./muscle-group";

export class TrainingPlan {
    id: number;
    name: string;
    dateFrom: Date;
    dateTo: Date;
    mainMuscleGroup: MuscleGroup;
    exercisesWithReps: ExerciseWithReps[];

}