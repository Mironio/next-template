import Fruit from "@/app/models/Fruit.interface";

export default interface FruitSuggestionResponse {
  suggestions: Fruit[] | []
}
