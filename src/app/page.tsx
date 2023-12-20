'use client';
import { Alert } from "@material-tailwind/react";
import { BeakerIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <BeakerIcon className="h-6 w-6 text-blue-500" />
      <Alert>Text example</Alert>
    </main>
  )
}
