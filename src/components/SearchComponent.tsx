import { useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

interface SearchComponentProps {
  onSearch?: (query: string) => void;
}

const SearchComponent: React.FC<SearchComponentProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleSearch = () => {
    if (onSearch) onSearch(inputValue.trim());
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="search-container" role="search">
      <button
        className="search-container__icon"
        aria-label="Search"
        onClick={handleSearch}
        type="button"
      >
        <HiMagnifyingGlass size={20} />
      </button>
      <input
        type="text"
        placeholder="Search for a country..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default SearchComponent;
