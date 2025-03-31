import { useState } from "react";

const Country = ({ country }) => {
    const [visited, setVisited] = useState(false);
    function handleVisited() {
        setVisited(!visited);
    }

    return (
        <div className={`border-2 border-blue-500 p-5 m-3 flex flex-col items-center justify-cente gap-3 ${visited && "bg-emerald-400"} `}>
            <h1 className=" font-bold text-2xl">Name: {country.name.common}</h1>
            <div className="h-28"><img className="w-full h-full " src={country.flags.png} alt="" /></div>
            <h2 className="font-semibold text-2xl">population: {country.population}</h2>
            
            <button onClick={handleVisited} className={`border border-red-500 rounded-xl px-5 py-1  text-white text-xl font-semibold  ${visited ?"bg-amber-600": "bg-emerald-500"} `}>{visited? "Visited": "Not visited"}</button>
            
        </div>
    );
};

export default Country;
