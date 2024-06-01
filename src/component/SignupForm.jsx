import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    referral: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormDataormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData.name);
  };

  return (
    <section id="form-section">
      <h2>Sign Up Form</h2>
      <form onSubmit={handleSubmit} id="signup-form">
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
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default SignupForm;
