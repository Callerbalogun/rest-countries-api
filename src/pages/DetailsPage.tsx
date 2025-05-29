import { HiArrowLongLeft } from "react-icons/hi2";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useGetAllCountriesQuery } from "../redux/services/fetchCountriesApi";
import type { Country } from "../components/types";

const DetailsPage: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { countryName } = useParams<{ countryName: string }>();
  const { data: countries } = useGetAllCountriesQuery();

  let country: Country | undefined = state as Country;
  if (!country && countries && countryName) {
    country = countries.find(
      (c) =>
        c.name.common?.toLowerCase() ===
          decodeURIComponent(countryName).toLowerCase() ||
        c.name.official.toLowerCase() ===
          decodeURIComponent(countryName).toLowerCase()
    );
  }

  if (!country) {
    return <p>Country not found.</p>;
  }

  return (
    <>
      <button onClick={() => navigate(-1)} className="display-btn">
        <HiArrowLongLeft size={20} />
        Back
      </button>
      <section className="details-page">
        <img
          src={country.flags.png}
          alt={country.flags.alt}
          className="details-page__flag"
        />
        <div className="details-page__info">
          <div className="details-page__info-top">
            <div>
              <h2 className="details-page__name">{country.name.common}</h2>
              <div className="details-page__name-container">
                <p>
                  Native Name:{" "}
                  <span>
                    {country.name.nativeName
                      ? Object.values(country.name.nativeName).at(-1)?.common
                      : "N/A"}
                  </span>
                </p>
                <p>
                  Population: <span>{country.population.toLocaleString()}</span>
                </p>
                <p>
                  Region: <span>{country.region}</span>
                </p>
                <p>
                  Sub Region: <span>{country.subregion}</span>
                </p>
                <p>
                  Capital: <span>{country.capital}</span>
                </p>
              </div>
            </div>
            <div className="details-page__currency-container">
              <p>
                Top Level Domain: <span>{country.tld}</span>
              </p>
              <p>
                Currency:{" "}
                <span>
                  {country.currencies
                    ? Object.values(country.currencies)[0].name
                    : "N/A"}
                </span>
              </p>
              <p>
                Languages:{" "}
                <span>
                  {country.languages
                    ? Object.values(country.languages).join(", ")
                    : "N/A"}
                </span>
              </p>
            </div>
          </div>
          <div className="details-page__info-bottom">
            <h3>Border Countries:</h3>
            <div className="details-page__btn-container">
              {country.borders?.length ? (
                country.borders.map((border) => {
                  const borderCountry = countries?.find(
                    (c) => c.cca3 === border
                  );
                  const borderCountryName =
                    borderCountry?.name.common || border;
                  const borderCountrySlug = encodeURIComponent(
                    borderCountry?.name.common?.toLowerCase() ||
                      borderCountry?.name.official.toLowerCase() ||
                      border
                  );
                  return (
                    <button
                      key={border}
                      onClick={() =>
                        navigate(`/details/${borderCountrySlug}`, {
                          state: borderCountry,
                        })
                      }
                    >
                      {borderCountryName}
                    </button>
                  );
                })
              ) : (
                <p>No border countries</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DetailsPage;
