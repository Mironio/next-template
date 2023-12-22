import { useQuery } from "@tanstack/react-query";
import fetchJoke from "@/app/data-fetching/jokes/fetchJoke";

export default function useGetRandomJoke() {
  return useQuery({
    queryKey: ['randomJoke'],
    queryFn: fetchJoke,
    select: data => data.data,
    retry: false,
    staleTime: 1000,
  })
}
