import axios from "axios";
import { BASE_POST } from "@/app/data-fetching/constants";
import Joke from "@/app/models/Joke.interface";

export default function postDataForEcho(data: Joke){
  return axios.post(`${BASE_POST}post`, data).then(res => res.data.json)
}
