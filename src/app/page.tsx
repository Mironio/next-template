'use client';
import { Alert } from "@material-tailwind/react";
import useGetRandomJoke from "@/app/data-fetching/jokes/useGetRandomJoke";

export default function Home() {
  const {data, isLoading} = useGetRandomJoke()

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {data && <Alert>{data.setup}</Alert>}
    </main>
  );
}
