import { Difficulty } from "./difficulty";
import { MuscleGroup } from "./muscle-group";

export interface TrainingPlanTableData {
  id: number;
  name: string;
  dateFrom: string;
  dateTo: string;
  difficulty: Difficulty;
  mainMuscleGroup: MuscleGroup;
}