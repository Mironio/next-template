import axios from "axios";
import Joke from "@/app/models/Joke.interface";
import { BASE } from "@/app/data-fetching/constants";

export default function fetchJoke() {
  return axios.get<Joke>(`${BASE}random_joke`)
}
