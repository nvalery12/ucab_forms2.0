import React, { useState } from "react";

const GeoLocation = () => {
    const [details, setDetails] = useState(null);

    const getUserGeolocationDetails = () => {
        fetch(
            "https://geolocation-db.com/json/50ad4a90-fd5e-11ec-b463-1717be8c9ff1"
        )
            .then(response => response.json())
            .then(data => setDetails(data));
    };

    return (
        <>
 
            <div className="row">
                <div className="col text-center">
                    <h2>Find my IP and Location</h2>
                    <p className="mt-3">
                        <button
                            className="btn btn-primary"
                            onClick={getUserGeolocationDetails}
                        >
                            Find my details
                        </button>

                        <div className="row justify-content-center mt-3">
                            <div className="col-lg-6 text-center text-dark">
                                {details && (
                                    <ul className="list-group">
                                        <li className="list-group-item">
                                            Location :{" "}
                                            {`${details.city}, ${details.country_name}(${details.country_code})`}
                                        </li>

                                    </ul>
                                )}
                            </div>
                        </div>
                    </p>
                </div>
            </div>
        </>
    );
};

export default GeoLocation;
