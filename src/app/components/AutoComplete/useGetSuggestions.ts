import { ChangeEvent, useCallback, useEffect, useState } from "react";
import Fruit from "@/app/models/Fruit.interface";
import fetchSuggestions from "@/app/components/AutoComplete/fetchSuggestions";


export function useAutoComplete() {

  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false)
  const [suggestions, setSuggestions] = useState<Fruit[] | []>([]);
  const [showSuggestions, setShowSuggestions] = useState(true)
  const [highlightedIndex, setHighlightedIndex] = useState(0);

  useEffect(() => {
    setHighlightedIndex(0);
  }, [suggestions]);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.key === 'ArrowDown') {
      setHighlightedIndex(prevIndex => Math.min(prevIndex + 1, suggestions.length - 1));
    } else if (event.key === 'ArrowUp') {
      setHighlightedIndex(prevIndex => Math.max(prevIndex - 1, 0));
    } else if (event.key === 'Enter' && highlightedIndex >= 0) {
      handleApplyClick(suggestions[highlightedIndex])
    }
  }, [suggestions.length, highlightedIndex]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const resetSuggestions = useCallback(() => {
    setSuggestions([])
  }, [setSuggestions])

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if(input && showSuggestions) {
        setIsLoading(true)
        fetchSuggestions(input).then(res => {
          setIsLoading(false)
          setSuggestions(res.data.suggestions)
        });
      } else {
        setSuggestions([]);
      }
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [input, showSuggestions]);

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setShowSuggestions(true)
    setInput(e.target.value);
  }, [setInput])

  const handleApplyClick = useCallback((suggestion: Fruit) => {
    setShowSuggestions(false)
    setInput(suggestion.label);
    resetSuggestions()
  }, [resetSuggestions]);


  return {
    suggestions: showSuggestions ? suggestions : [],
    resetSuggestions,
    handleInputChange,
    input,
    handleApplyClick,
    isLoading,
    highlightedIndex
  }
}
