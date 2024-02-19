import React from 'react';
import Price from "@/app/components/Price.interface";

interface PriceRadioButtonsInterface {
  className?: string;
  // currency: string
  // hotprice: 20
  // selectedPrice: 49
  // prices: number[]
  prices: Price[];
  selectedPrice: Price;
  onChange: (p: Price) => void;
}

export default function PriceRadioButtons({
  className = '',
  prices,
  selectedPrice,
  onChange,
}: PriceRadioButtonsInterface) {
  const handleSelectionChange = (price: Price) => {
    console.log(price); // For debugging, consider removing in production
    onChange(price);
  };

  return (
    <div className={`flex gap-4 ${className}`}>
      {prices.map((price, index) => (
        <label
          key={index}
          className={`block cursor-pointer border-2 p-2 
          ${selectedPrice.value === price.value ? 'border-blue-500' : 'border-gray-300'}
          hover:border-blue-300 focus:border-blue-300`}
        >
          <input
            id={`price-${index}`}
            type="radio"
            name="price"
            value={price.value}
            checked={selectedPrice.value === price.value}
            onChange={() => handleSelectionChange(price)}
            className="sr-only" // This class hides the radio button but keeps it accessible
          />
          {price.value} {price.currency}
        </label>
      ))}
    </div>
  );
}
