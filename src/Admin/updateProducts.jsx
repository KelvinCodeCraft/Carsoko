import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProducts = ({ onUpdateCar }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const car = location.state?.car || { id: "", name: "", year: "", image: "", price: "" };

    const [formData, setFormData] = useState(car);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdateCar(formData); // Call the callback to update the car in the parent component
        alert("Car data updated successfully!");
        navigate("/");
    };

    return (
        <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Update Car Details</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <div>
                    <label htmlFor="name" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                        Car Name:
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter car name"
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                        }}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="year" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                        Year:
                    </label>
                    <input
                        type="number"
                        id="year"
                        name="year"
                        value={formData.year}
                        onChange={handleChange}
                        placeholder="Enter manufacturing year"
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                        }}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="image" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                        Image URL:
                    </label>
                    <input
                        type="url"
                        id="image"
                        name="image"
                        value={formData.image}
                        onChange={handleChange}
                        placeholder="Enter image URL"
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                        }}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                        Price:
                    </label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        placeholder="Enter price"
                        style={{
                            width: "100%",
                            padding: "10px",
                            border: "1px solid #ccc",
                            borderRadius: "5px",
                        }}
                        required
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        backgroundColor: "#28a745",
                        color: "#fff",
                        border: "none",
                        borderRadius: "5px",
                        cursor: "pointer",
                        fontWeight: "bold",
                    }}
                >
                    Update Car
                </button>
            </form>
        </div>
    );
};

export default UpdateProducts;