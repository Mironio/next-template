import axios from "axios";
import { BASE } from "@/app/data-fetching/constants";
import Joke from "@/app/models/Joke.interface";

export default function fetchById(id:string) {
  return axios.get<Joke>(`${BASE}/${id}`)
}
