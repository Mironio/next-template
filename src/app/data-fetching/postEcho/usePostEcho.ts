import postDataForEcho from "@/app/data-fetching/postEcho/postDataForEcho";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { jokeQueryKey } from "@/app/data-fetching/constants";
import Joke from "@/app/models/Joke.interface";
import { useState } from "react";

export function usePostEcho() {

  const [responseData, setResponseData] = useState<Joke>()
  const queryClient = useQueryClient()
  const mutation = useMutation<
    Joke, /*response*/
    Error,
    Joke, /*request data*/
    unknown
  >({
      mutationFn: postDataForEcho,
      onSuccess: (joke) => { // invalidation example. It can be handled outside
        setResponseData(joke) // response of the POST can be handled like this
        queryClient.invalidateQueries( // invalidation of other queries
          {queryKey: [jokeQueryKey]}
        )
      }
    }
  )
  return {mutation, responseData}
}
