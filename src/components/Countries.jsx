import { use } from "react";
import Country from "./Country";

const Countries = ({contriesPromise}) => {
    const countries = use(contriesPromise);
    console.log(countries[0]);
    
    
    
    return (
        <div>
            <h1>countrie: {countries.length}</h1>
            
            <div className=" grid grid-cols-3">
            {
                countries.map(country => <Country key={country.cca3} country={country} ></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;