import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "./photo-jersey-raw-logo.jpg";
import BackgroundImage from "./Photos/Food2.jpg";

const recipes = [
  "Royal Carnivore",
  "Daily Thrive",
  "Puppy",
  "Joint",
  "Alpha Bite Beef Mix",
  "Wild Whiskers",
  "Fetch & Feast Chicken"
];

export default function OrderForm() {
  const location = useLocation();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    recipe: "",
    amount: 1,
    notes: ""
  });

  // Grab query params from URL and pre-fill recipe & amount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const recipeParam = params.get("recipe");
    const amountParam = params.get("weight"); // from Calculator
    if (recipeParam) setFormData(prev => ({ ...prev, recipe: recipeParam }));
    if (amountParam) setFormData(prev => ({ ...prev, amount: amountParam }));
  }, [location.search]);

  const inputStyle = {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box",
    fontSize: "1em",
    outline: "none"
  };

  const buttonStyle = {
    padding: "14px",
    backgroundColor: "#2b6e44",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "1em",
    fontWeight: "bold",
    transition: "background-color 0.3s"
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(() => setSubmitted(true))
      .catch(() => alert("Failed to send order. Please try again."));
  };

  return (
    <div style={{
      minHeight: "100vh",
      padding: "50px 20px",
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial, sans-serif",
      position: "relative"
    }}>
      {/* Dark overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.25)",
        zIndex: 0
      }}></div>

      <div style={{
        position: "relative",
        zIndex: 1,
        maxWidth: "520px",
        width: "100%",
        padding: "25px 30px",
        background: "rgba(255,255,255,0.9)",
        borderRadius: "15px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
      }}>
        <img
          src={logo}
          alt="Logo"
          style={{
            display: "block",
            margin: "0 auto 20px",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
            transition: "opacity 1.2s",
            opacity: 0.95
          }}
        />

        <h2 style={{ textAlign: "center", color: "#2b6e44", marginBottom: "25px" }}>Place Your Order</h2>

        {!submitted ? (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={inputStyle} />
            <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required style={inputStyle} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={inputStyle} />

            <select name="recipe" value={formData.recipe} onChange={handleChange} required style={inputStyle}>
              <option value="">-- Select Recipe --</option>
              {recipes.map(r => <option key={r} value={r}>{r}</option>)}
            </select>

            <input
              type="number"
              name="amount"
              min="1"
              step="1"
              value={formData.amount}
              onChange={handleChange}
              required
              style={inputStyle}
              placeholder="Amount (lbs)"
            />

            <textarea
              name="notes"
              placeholder="Questions or Allergies (optional)"
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              style={{ ...inputStyle, resize: "vertical" }}
            />

            <button type="submit" style={buttonStyle}
              onMouseOver={e => e.currentTarget.style.backgroundColor = "#1f5535"}
              onMouseOut={e => e.currentTarget.style.backgroundColor = "#2b6e44"}
            >
              Send Order
            </button>
          </form>
        ) : (
          <div style={{ textAlign: "center", padding: "20px", color: "#2b6e44" }}>
            <h3>Thank you! Your order has been sent.</h3>
            <p>We will contact you shortly.</p>
            <button
              onClick={() => setSubmitted(false)}
              style={buttonStyle}
              onMouseOver={e => e.currentTarget.style.backgroundColor = "#1f5535"}
              onMouseOut={e => e.currentTarget.style.backgroundColor = "#2b6e44"}
            >
              Place Another Order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
