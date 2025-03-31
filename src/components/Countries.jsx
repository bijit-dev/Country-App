import { use, useState } from "react";
import Country from "./Country";

const Countries = ({ contriesPromise }) => {
    const countries = use(contriesPromise);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlag, setVisitedFlag] = useState([]);

    function handleVisitedCountries(country) {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    function handleVisitedFlag(flag) {
        const newVisitedFlag = [...visitedFlag, flag];
        setVisitedFlag(newVisitedFlag);
        // console.log(newVisitedFlag);
    }

    return (
        <div className="px-5">
            <h1>countrie: {countries.length}</h1>
            <h1>visited countries No: {visitedCountries.length}</h1>

            <div className="flex w-10 gap-2">
                {visitedFlag.map((flag) => (
                    <img className="w-full" src={flag}></img>
                ))}
            </div>

            <div className="list-decimal px-5">
                {visitedCountries.map((country) => (
                    
                    <li key={country.cca3}>
                        {country.name.common}
                    </li>
                ))}
            </div>

            <div className=" grid grid-cols-3">
                {countries.map((country) => (
                    <Country
                        key={country.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlag={handleVisitedFlag}
                    ></Country>
                ))}
            </div>
        </div>
    );
};

export default Countries;
