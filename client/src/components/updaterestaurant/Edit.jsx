import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../addrestaurant/add.css";
import toast from "react-hot-toast";

const Edit = () => {
  const initialRestaurant = {
    name: "",
    type: "",
    location: "",
    rating: "",
    top_food: ""
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(initialRestaurant);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setRestaurant({ ...restaurant, [name]: value });
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getone/${id}`)
      .then((response) => {
        setRestaurant(response.data);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to load restaurant data", { position: "top-right" });
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`http://localhost:8000/api/update/${id}`, restaurant)
      .then((response) => {
        toast.success(response.data.msg, { position: "top-right" });
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Failed to update restaurant", { position: "top-right" });
      });
  };

  return (
    <div className="addRestaurant">
      <Link to={"/"} className="back-link">Back</Link>
      <div className="form-box">
        <h3>Update Restaurant</h3>
        <form className="addRestaurantForm" onSubmit={submitForm}>
          <div className="inputGroup">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              value={restaurant.name}
              onChange={inputChangeHandler}
              id="name"
              name="name"
              autoComplete="off"
              placeholder="Enter Name"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="type">Type</label>
            <input
              type="text"
              value={restaurant.type}
              onChange={inputChangeHandler}
              id="type"
              name="type"
              autoComplete="off"
              placeholder="Enter Type"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              value={restaurant.location}
              onChange={inputChangeHandler}
              id="location"
              name="location"
              autoComplete="off"
              placeholder="Enter Location"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="rating">Rating</label>
            <input
              type="text"
              value={restaurant.rating}
              onChange={inputChangeHandler}
              id="rating"
              name="rating"
              autoComplete="off"
              placeholder="Enter Rating"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="top_food">Top Food</label>
            <input
              type="text"
              value={restaurant.top_food}
              onChange={inputChangeHandler}
              id="top_food"
              name="top_food"
              autoComplete="off"
              placeholder="Enter Top Food"
            />
          </div>
          <div className="inputGroup">
            <button type="submit">UPDATE RESTAURANT</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
