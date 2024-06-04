import React, { useState } from "react";
import image from "../assets/coding.jpg";
import "./hero.css";

const Hero = () => {
  // state for form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    referral: "",
  });

  // handle each input element
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert(`form submitted successfully, ${formData.name}`); // Display an alert with the name
    setFormData({ name: "", email: "", phone: "", referral: "" }); // Clear the form data
  };

  return (
    <div className="hero">
      <div className="writeup">
        <h1>Africa Agility Frontend Bootcamp</h1>
        <img src={image} alt="" />
        <p>
          Africa Agility is a non-profit SOCIAL IMPACT Organization. We are
          SUPPORTING the expansion of Africa's digital economy, by creating a
          more diversified tech and Agile workplace and ADVOCATING for those
          that have been marginalized through stereotyping.
        </p>
      </div>
      <div>
        <section className="form-section">
          <h2>Sign Up Form</h2>
          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="referral">How did you hear about us?</label>
              <select
                id="referral"
                name="referral"
                value={formData.referral}
                onChange={handleChange}
                required
              >
                <option value="">Select an option</option>
                <option value="friend">Friend</option>
                <option value="social_media">Social Media</option>
                <option value="advertisement">Advertisement</option>
              </select>
            </div>
            <button className="submitButton" type="submit">
              Submit
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default Hero;
