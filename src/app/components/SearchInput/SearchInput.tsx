import { ChangeEvent } from "react";
import Spinner from "@/app/components/Spinner/Spinner";

interface SearchInputInterface {
  value: string
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void,

}

export default function SearchInput({handleInputChange, value}: SearchInputInterface) {
  return (
    <div>
      <input
        className="w-[300px] rounded-xl bg-gray-700 p-3 text-white"
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Search for a fruit..."
      />
    </div>
  );
}
