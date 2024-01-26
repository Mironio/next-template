import Fruit from "@/app/models/Fruit.interface";
import Spinner from "@/app/components/Spinner/Spinner";
import Suggestion from "@/app/components/Suggestions/Suggestion";
import { useRef } from "react";

interface SuggestionsInterface {
  isLoading: boolean
  suggestions?: Fruit[]
  highlight: string
  highlightedIndex: number
  className?: string
  onItemClick: (s: Fruit) => void
}

export default function Suggestions({
  className = '',
  isLoading,
  suggestions = [],
  onItemClick,
  highlight,
  highlightedIndex
}: SuggestionsInterface) {

  const containerRef = useRef(null);


  return (
    <div className={className}>
      {isLoading && <Spinner className="mt-3"/>}
      {suggestions.length > 0 && !isLoading && (
        <ul ref={containerRef} className="max-h-[300px] w-full overflow-y-scroll rounded-xl border-2 border-gray-500">
          {suggestions.map((suggestion, index) => (
            <li key={suggestion.id} className={`w-full p-3 text-left hover:bg-gray-300 ${highlightedIndex === index ? `bg-gray-300` : ``}`}>
            <Suggestion key={suggestion.id} suggestion={suggestion} onItemClick={onItemClick} highlight={highlight}/>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
