import React, { useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import AddProducts from "./addProducts";
import UpdateProducts from "./updateProducts";
import "./admin.css";

const AdminPage = () => {
    const [cars, setCars] = useState([]);
    const navigate = useNavigate();

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

    const handleUpdateClick = (car) => {
        navigate("/update", { state: { car } });
    };

    const handleAddCar = (newCar) => {
        setCars((prevCars) => [...prevCars, newCar]);
        console.log("Car added successfully:", newCar);
    };

    const handleUpdateCar = (updatedCar) => {
        setCars((prevCars) =>
            prevCars.map((car) => (car.id === updatedCar.id ? updatedCar : car))
        );
        console.log("Car updated successfully:", updatedCar);
    };

    const handleDeleteClick = (carId) => {
        const updatedCars = cars.filter((car) => car.id !== carId);
        setCars(updatedCars);
        console.log("Car deleted successfully. ID:", carId);
    };

    const handleHomeClick = () => {
        console.log("All products:", JSON.stringify(cars, null, 2));
    };

    return (
        <div className="admin-container">
            {/* Sidebar */}
            <div className="sidebar">
                <h2 className="sidebar-title">Admin Dashboard</h2>
                <nav className="sidebar-nav">
                    <Link to="/" className="sidebar-link" onClick={handleHomeClick}>
                        Home
                    </Link>
                    <Link to="/add" className="sidebar-link">
                        Add Products
                    </Link>
                </nav>
            </div>

            {/* Main Content */}
            <div className="main-content">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <div>
                                <h2 className="main-title">ALL CARS</h2>
                                <div className="car-grid">
                                    {cars.map((car) => (
                                        <div key={car.id} className="car-card">
                                            <img
                                                src={car.image}
                                                alt={car.name}
                                                className="car-image"
                                            />
                                            <h3 className="car-name">{car.name}</h3>
                                            <p className="car-year">Year: {car.year}</p>
                                            <p className="car-price">Price: ${car.price}</p>
                                            <div className="car-actions">
                                                <button
                                                    onClick={() => handleUpdateClick(car)}
                                                    className="btn btn-update"
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteClick(car.id)}
                                                    className="btn btn-delete"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        }
                    />
                    <Route path="/add" element={<AddProducts onAddCar={handleAddCar} />} />
                    <Route path="/update" element={<UpdateProducts onUpdateCar={handleUpdateCar} />} />
                </Routes>
            </div>
        </div>
    );
};

export default AdminPage;