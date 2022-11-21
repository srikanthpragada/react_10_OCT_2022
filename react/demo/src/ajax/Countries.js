import React, { useState, useEffect } from "react";
import $ from "jquery";


export default function Countries() {
    const countryName = React.createRef();
    const [countries, setCountries] = useState([]);
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        $.get({
            url: `https://restcountries.com/v3.1/all`,
            success: resp => {
                setCountries(resp);
                setSelectedCountries(resp);
                setLoading(false)

            },
            error: (error) => {

            },
        });
    }, []);

    function getInfo() {
        var cname = countryName.current.value.toLowerCase()
        console.log(cname)
        setSelectedCountries(
            countries.filter(country => country.name.common.toLowerCase().includes(cname))
        );
    }
    return (
        <div>
            <h1>Find Country Information</h1>
            Country Name: <input type="text" ref={countryName} 
                onChange={getInfo} />
            <p></p>

            {isLoading ? <span>Loading... please wait...</span> :
                <div>
                    {selectedCountries.length === 0 ?
                        <h3>Sorry! No country found!</h3>
                        :
                        <div>
                            <h4>Countries</h4>
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Capital</th>
                                        <th>Region</th>
                                        <th>Flag</th>
                                    </tr>
                                    {selectedCountries.map((country, idx) => {
                                        return (
                                            <tr key={idx}>
                                                <td>{country.name.common}</td>
                                                <td>{country.capital ? country.capital.join(",") : "None"}</td>
                                                <td>
                                                    {country.region}
                                                </td>
                                                <td>
                                                    <img style={{ width: '100px', height: '50px' }}
                                                        src={country.flags.png} alt={country.name} />
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </thead>
                            </table>
                        </div>
                    }
                </div>
            }
        </div>
    );
}