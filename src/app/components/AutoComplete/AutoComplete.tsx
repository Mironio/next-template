import { useAutoComplete } from "@/app/components/AutoComplete/useGetSuggestions";
import SearchInput from "@/app/components/SearchInput/SearchInput";
import Suggestions from "@/app/components/Suggestions/Suggestions";
import { useRef } from "react";

export default function AutoComplete() {

  const suggestionsRef = useRef(null);
  const {
    suggestions,
    handleInputChange,
    input,
    handleApplyClick,
    isLoading,
    highlightedIndex
  } = useAutoComplete(suggestionsRef)
  return (
    <div className="relative flex flex-col items-center" ref={suggestionsRef}>
      <SearchInput value={input} handleInputChange={handleInputChange}/>
      <Suggestions
        highlightedIndex={highlightedIndex}
        className="w-full"
        isLoading={isLoading}
        highlight={input}
        onItemClick={handleApplyClick}
        suggestions={suggestions} />
    </div>
  );
};

