import axios from "axios";
import FruitSuggestionResponse from "@/app/models/FruitSuggestionResponse.interface";

export default function fetchSuggestions(input = '') {
  return axios.get<FruitSuggestionResponse>(`/api/mock/fruit-suggestion?i=${input}`)
}
