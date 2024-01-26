import Fruit from "@/app/models/Fruit.interface";
import Highlight from "@/app/components/Highlight/Highlight";

interface SuggestionsInterface {
  suggestion: Fruit
  onItemClick: (s: Fruit) => void
  highlight: string
}

export default function Suggestion({highlight, suggestion, onItemClick}: SuggestionsInterface) {
  return (
    <button
      className="w-full text-left"
      onClick={() => onItemClick(suggestion)}>
      <Highlight text={suggestion.label} highlight={highlight}/>
    </button>
  );
}
