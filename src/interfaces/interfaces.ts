export interface Food {
  calories: number;
  nombre: string;
  porcion: number;
  id: number;
}

export interface FoodState {
  foods: Food[];
  foodsToday: Food[];
}

export interface TodayCaloriesProps {
  // total: number;
  consumed: number;
  remaining: number;
  porcentaje: number;
}
