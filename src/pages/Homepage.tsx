import { useState } from "react";
import { useGetAllCountriesQuery } from "../redux/services/fetchCountriesApi";
import FilterComponent from "../components/FilterComponent";
import SearchComponent from "../components/SearchComponent";
import CountryCard from "../components/CountryCard";
import {
  HiChevronRight,
  HiChevronDoubleRight,
  HiChevronLeft,
  HiChevronDoubleLeft,
} from "react-icons/hi2";

const COUNTRIES_PER_PAGE = 8;

const Homepage: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const { data: countries, isLoading, error } = useGetAllCountriesQuery();

  const regions = [
    "Filter by Region",
    "Africa",
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
  ];

  const handleRegionSelect = (region: string) => {
    setCurrentPage(1);
    if (region === "Filter by Region") {
      setSelectedRegion(null);
      return;
    } else setSelectedRegion(region);
  };
  const handleSearch = (query: string) => {
    setCurrentPage(1);
    setSearchQuery(query);
  };
  const filteredCountries =
    countries?.filter(
      (country) =>
        (selectedRegion === null || country.region === selectedRegion) &&
        (country.name.common
          ?.toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
          country.name.official
            .toLowerCase()
            .includes(searchQuery.toLowerCase()))
    ) || [];

  const totalPages = Math.ceil(filteredCountries.length / COUNTRIES_PER_PAGE);
  const paginatedCountries = filteredCountries.slice(
    (currentPage - 1) * COUNTRIES_PER_PAGE,
    currentPage * COUNTRIES_PER_PAGE
  );

  const handlePrevPage = () => setCurrentPage((p) => Math.max(1, p - 1));
  const handleNextPage = () =>
    setCurrentPage((p) => Math.min(totalPages, p + 1));
  const handleFirstPage = () => setCurrentPage(1);
  const handleLastPage = () => setCurrentPage(totalPages);

  return (
    <>
      <div className="search-filter-container">
        <SearchComponent onSearch={handleSearch} />
        <FilterComponent regions={regions} onSelect={handleRegionSelect} />
      </div>
      <div className="country-card-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          paginatedCountries.map((country) => (
            <CountryCard key={country.name.official} {...country} />
          ))
        )}
        {error && <p>Error fetching countries. Please try again.</p>}
      </div>
      {totalPages > 1 && (
        <div className="pagination-container">
          <button onClick={handleFirstPage} disabled={currentPage === 1}>
            <HiChevronDoubleLeft size={14} />
          </button>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            <HiChevronLeft size={14} />
          </button>
          <p>
            Page {currentPage} of {totalPages}
          </p>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            <HiChevronRight size={14} />
          </button>
          <button
            onClick={handleLastPage}
            disabled={currentPage === totalPages}
          >
            <HiChevronDoubleRight size={14} />
          </button>
        </div>
      )}
    </>
  );
};

export default Homepage;
