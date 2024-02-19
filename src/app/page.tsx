'use client';
import useGetRandomJoke from "@/app/data-fetching/jokes/useGetRandomJoke";
import { usePostEcho } from "@/app/data-fetching/postEcho/usePostEcho";
import { useCallback } from "react";
import ProductCard from "@/app/components/ProductCard/ProductCard";
import Price from "@/app/components/Price.interface";

const prices: Price[] = [
  {value: 20, currency: 'EUR', isHot: false},
  {value: 40, currency: 'EUR', isHot: false},
  {value: 60, currency: 'EUR', isHot: true},
  {value: 80, currency: 'EUR', isHot: false},
]



export default function Home() {
  const {data, isLoading} = useGetRandomJoke()
  const {mutation, responseData} = usePostEcho()
  const handleButtonClick = useCallback(() => {
    if (data) {
      mutation.mutate(data)
    }
  }, [mutation, data]);

  return (
    <main className="flex min-h-screen flex-col items-center">

      <ProductCard
        prices={prices}
        onActionClick={(price) => alert(price)}
        country="Netherlands"
        deliveryType="Instant + Email"
      />

    </main>
  );
}
