import { useState } from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";

interface FilterComponentProps {
  regions: string[];
  onSelect: (region: string) => void;
}

const FilterComponent: React.FC<FilterComponentProps> = ({
  regions,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("Filter by Region");

  const handleSelect = (region: string) => {
    setSelectedRegion(region);
    setIsOpen(false);
    onSelect(region);
  };

  return (
    <div className="dropdown">
      <button
        className="dropdown-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {selectedRegion}
        <span className="arrow">
          {isOpen ? <HiChevronUp size={14} /> : <HiChevronDown size={14} />}
        </span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {regions.map((region) => (
            <li
              key={region}
              className="dropdown-item"
              onClick={() => handleSelect(region)}
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FilterComponent;
