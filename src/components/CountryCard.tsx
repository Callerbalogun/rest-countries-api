import { useNavigate } from "react-router-dom";
import type { Country } from "./types";

const CountryCard: React.FC<Country> = ({ ...country }) => {
  const navigate = useNavigate();
  const countrySlug = encodeURIComponent(
    country.name.common?.toLowerCase() || country.name.official.toLowerCase()
  );

  return (
    <div
      className="country-card"
      onClick={() => navigate(`/details/${countrySlug}`, { state: country })}
    >
      <img
        src={country.flags.svg}
        alt={country.flags.alt || "Country Flag"}
        className="country-card__flag"
      />
      <div className="country-card__info">
        <h2 className="country-card__info__name"> {country.name.common} </h2>
        <p className="country-card__info__population">
          Population:
          <span className="country-card__info__details">
            {" "}
            {country.population.toLocaleString()}{" "}
          </span>
        </p>
        <p className="country-card__info__region">
          Region:{" "}
          <span className="country-card__info__details">
            {" "}
            {country.region}{" "}
          </span>
        </p>
        <p className="country-card__info__capital">
          Capital:
          <span className="country-card__info__details">
            {" "}
            {country.capital}{" "}
          </span>
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
