import React, { useEffect, useState } from "react";
import "./body.css";

const Body = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        fetch("/data/cars.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch car data");
                }
                return response.json();
            })
            .then((data) => setCars(data))
            .catch((error) => console.error("Error fetching car data:", error));
    }, []);

    return (
        <div className="body-container">
            <div className="body-main-content">
                <h2 className="body-main-title">Available Cars</h2>
                <div className="body-car-grid">
                    {cars.map((car) => (
                        <div key={car.id} className="body-car-card">
                            <img
                                src={car.image}
                                alt={car.name}
                                className="body-car-image"
                            />
                            <h3 className="body-car-name">{car.name}</h3>
                            <p className="body-car-year">Year: {car.year}</p>
                            <p className="body-car-price">Price: ${car.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Body;