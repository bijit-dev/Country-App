const Country = ({ country }) => {
    // console.log(country);

    return (
        <div className="border-2 border-b-blue-500 p-3 m-3 flex flex-col items-center justify-cente gap-3">
            <h1 className=" font-bold text-2xl">Name: {country.name.common}</h1>
            <img src={country.flags.png} alt="" />
            
        </div>
    );
};

export default Country;
