import { useQuery } from "@tanstack/react-query";
import fetchJoke from "@/app/data-fetching/jokes/fetchJoke";
import { jokeQueryKey } from "@/app/data-fetching/constants";

export default function useGetRandomJoke() {
  return useQuery({
    queryKey: [jokeQueryKey],
    queryFn: fetchJoke,
    select: data => data.data,
    retry: false,
    staleTime: 1000,
  })
}
