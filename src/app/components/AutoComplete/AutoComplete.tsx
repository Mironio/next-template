import { useAutoComplete } from "@/app/components/AutoComplete/useGetSuggestions";
import Image from "next/image";
import SearchInput from "@/app/components/SearchInput/SearchInput";
import Spinner from "@/app/components/Spinner/Spinner";
import Suggestions from "@/app/components/Suggestions/Suggestions";
import { useEffect, useRef } from "react";

export default function AutoComplete() {

  const {
    suggestions,
    handleInputChange,
    input,
    handleApplyClick,
    isLoading,
    highlightedIndex
  } =
    useAutoComplete()
  return (
    <div className="relative flex flex-col items-center">
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

