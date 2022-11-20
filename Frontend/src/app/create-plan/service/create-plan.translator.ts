export function muscleGroupMapperToString(muscleGroup: string) {
    switch(muscleGroup.toUpperCase()) {
        case "BACK":
            return "Plecy";
        case "THIGHS": 
            return "Uda";
        case "LEGS": 
            return "Nogi";
        case "BELLY": 
            return "Brzuch";
        case "BICEPS": 
            return "Biceps";
        case "TRICEPS":
            return "Triceps";
        case "BUTTOCKS":
            return "Pośladki";
        case "CHEST": 
            return "Klatka piersiowa";
        case "CALVES": 
            return "Łydki";
        case "SHOULDERS":
            return "Barki";
        default:
            return "Nieokreślono";
    }
}

export function difficultyMapperToString(difficulty: string) {
        switch(difficulty.toUpperCase()) {
            case "EASY":
                return "Łatwe";
            case "MEDIUM":
                return "Średnie";
            case "HARD":
                return "Trudne";
            default:
                return "Nieokreślone";
        }
    }

export function difficultyMapperToEntity(difficulty: string) {
    switch(difficulty) {
        case "Łatwe":
            return "easy";
        case "Średnie":
            return "medium";
        case "Trudne":
            return "hard";
        default:
            return "";
    }
}

export function muscleGroupMapperToEntity(muscleGroup: string) {
    switch(muscleGroup) {
        case "Plecy":
            return "back";
        case "Uda": 
            return "thighs";
        case "Nogi": 
            return "legs";
        case "Brzuch": 
            return "belly";
        case "Biceps": 
            return "biceps";
        case "Triceps":
            return "triceps";
        case "Pośladki":
            return "buttocks";
        case "Klatka piersiowa": 
            return "chest";
        case "Łydki": 
            return "calves";
        case "Barki":
            return "shoulders";
        default:
            return "";
    }
}