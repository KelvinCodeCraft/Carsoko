import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./addProducts.css"; 

const AddProducts = ({ onAddCar }) => {
    const [formData, setFormData] = useState({
        id: Date.now(), 
        name: "",
        year: "",
        image: "",
        price: "",
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddCar(formData); 
        console.log("Car added successfully:", formData);
        setFormData({ id: Date.now(), name: "", year: "", image: "", price: "" }); // Reset form
        navigate("/");
    };

    return (
        <div className="add-products-page">
            <div className="add-products-container">
                <h2 className="add-products-title">Add New Car</h2>
                <form onSubmit={handleSubmit} className="add-products-form">
                    <div className="form-group">
                        <label htmlFor="name" className="form-label">
                            Car Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter car name"
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="year" className="form-label">
                            Year:
                        </label>
                        <input
                            type="number"
                            id="year"
                            name="year"
                            value={formData.year}
                            onChange={handleChange}
                            placeholder="Enter manufacturing year"
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="image" className="form-label">
                            Image URL:
                        </label>
                        <input
                            type="url"
                            id="image"
                            name="image"
                            value={formData.image}
                            onChange={handleChange}
                            placeholder="Enter image URL"
                            className="form-input"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="price" className="form-label">
                            Price:
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                            placeholder="Enter price"
                            className="form-input"
                            required
                        />
                    </div>
                    <button type="submit" className="btn-submit">
                        Add Car
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProducts;