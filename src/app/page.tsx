'use client';
import { Alert, Button } from "@material-tailwind/react";
import useGetRandomJoke from "@/app/data-fetching/jokes/useGetRandomJoke";
import { usePostEcho } from "@/app/data-fetching/postEcho/usePostEcho";
import { useCallback } from "react";

export default function Home() {
  const {data, isLoading} = useGetRandomJoke()
  const {mutation, responseData} = usePostEcho()
  const handleButtonClick = useCallback(() => {
    if (data) {
      mutation.mutate(data)
    }
  }, [mutation, data]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {data && <Alert>{data.setup}</Alert>}
      <Button placeholder="Click on me" onClick={handleButtonClick}>Click on me</Button>
      {responseData && <div>{responseData.punchline}</div>}
    </main>
  );
}
