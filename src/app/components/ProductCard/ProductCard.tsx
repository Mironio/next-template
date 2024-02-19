import Button from "@/app/components/Button/Button";
import TextH3 from "@/app/components/Typography/TextH3";
import Price from "@/app/components/Price.interface";
import PriceRadioButtons from "@/app/components/PriceRadioButtons/PriceRadioButtons";
import { useState } from "react";

interface ProductCardInterface {
  className?: string
  prices: Price[]
  onActionClick: (n: number) => void
  country: string
  deliveryType: string
}

export default function ProductCard({className = '', prices, onActionClick, country, deliveryType}: ProductCardInterface) {
  const [selectedPrice, setSelectedPrice] = useState(prices[0])


  return (
    <div className={`${className}`}>
      <TextH3>Product Card</TextH3>

      <PriceRadioButtons prices={prices} selectedPrice={selectedPrice} onChange={setSelectedPrice} />

      <Button onClick={() => alert(selectedPrice.value)}>Buy now</Button>
    </div>
  );
}
