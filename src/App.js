import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

import Ingredients from "./Ingredients.js";
import AboutContact from "./AboutContact.js";
import Order from "./Order.js";
import FetchRecipes from "./FetchRecipes.js";
import Calculator from "./Calculator.js";
import NewToRaw from "./NewToRaw.js";

import logo from "./photo-jersey-raw-logo.jpg";
import bgPhoto from "./Photos/Food 3.jpg";
import MeatFlowers from "./Photos/Meat Flowers.jpg"; // image used behind "Why Choose..."

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowHeader(currentScroll <= lastScroll || currentScroll <= 100);
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const linkStyle = {
    textDecoration: "none",
    color: "#2b6e44",
    fontWeight: "bold",
    padding: "10px 16px",
    textAlign: "center",
    borderRadius: "8px",
    backgroundColor: "#e6f1ea",
    margin: "4px",
    minWidth: "80px",
    display: "inline-block",
    transition: "all 0.25s ease",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "15px 30px",
    margin: "15px",
    backgroundColor: "#2b6e44",
    color: "#fff",
    fontSize: "1.2em",
    fontWeight: "bold",
    borderRadius: "10px",
    textDecoration: "none",
    transition: "all 0.25s ease",
  };

  const cardStyle = {
    maxWidth: "900px",
    margin: "30px auto",
    padding: "25px",
    backgroundColor: "#ffffffcc",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  const heroStyle = {
    position: "relative",
    backgroundImage: `url(${logo})`,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    padding: "80px 20px",
    borderRadius: "12px",
    margin: "20px auto",
    maxWidth: "900px",
    color: "#fff",
    textAlign: "center",
    overflow: "hidden",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: "12px",
    zIndex: 1,
  };

  const heroTextStyle = {
    position: "relative",
    zIndex: 2,
    textShadow: "1px 1px 6px rgba(0,0,0,0.8)",
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Recipes", path: "/recipes" },
    { label: "Order Now", path: "/order" },
    { label: "Food Calculator", path: "/calculator" },
    { label: "Our Ingredients", path: "/ingredients" },
    { label: "New to Raw", path: "/new-to-raw" },
    { label: "About Us / Contact", path: "/about-contact" },
  ];

  return (
    <Router>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          color: "#333",
          backgroundColor: "#f4f6f8",
          minHeight: "100vh",
        }}
      >
        {/* Header */}
        <header
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            padding: "12px 20px",
            backgroundColor: "#ffffffee",
            borderBottom: "2px solid #ddd",
            position: "sticky",
            top: 0,
            zIndex: 10,
            gap: "8px",
            transform: showHeader ? "translateY(0)" : "translateY(-110%)",
            transition: "transform 0.3s ease-in-out",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          <img
            src={logo}
            alt="Jersey Raw Logo"
            style={{
              height: "55px",
              width: "55px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid #2b6e44",
              marginRight: "10px",
            }}
          />
          <nav
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "8px",
            }}
          >
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                style={{ ...linkStyle }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#dcefe0";
                  e.target.style.transform = "translateY(-2px)";
                  e.target.style.boxShadow = "0 3px 6px rgba(0,0,0,0.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "#e6f1ea";
                  e.target.style.transform = "translateY(0)";
                  e.target.style.boxShadow = "none";
                }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <div style={{ textAlign: "center" }}>
                <div style={heroStyle}>
                  <div style={overlayStyle}></div>
                  <div style={heroTextStyle}>
                    <h1 style={{ fontSize: "2.8em" }}>
                      Fresh Made-to-Order Raw Dog Meals in Morris County, NJ
                    </h1>
                    <p
                      style={{
                        fontSize: "1.2em",
                        maxWidth: "700px",
                        margin: "10px auto 20px",
                      }}
                    >
                      Each meal is prepared fresh and tailored to your dog’s
                      unique needs using 100% USDA-approved meats and fresh
                      produce.
                    </p>
                    <div>
                      <Link to="/recipes" style={buttonStyle}>
                        Recipes
                      </Link>
                      <Link to="/order" style={buttonStyle}>
                        Order Now
                      </Link>
                    </div>
                  </div>
                </div>

{/* =========================
 WHY CHOOSE JERSEY RAW SECTION
========================= */}
<div
  style={{
    width: "100%",
    position: "relative",
    borderRadius: "12px",
    overflow: "hidden",
    padding: "40px 20px",
    minHeight: "480px", // Prevents cutting on phones
  }}
>

  {/* Background photo */}
  <img
    src={MeatFlowers}
    alt="Why Choose Jersey Raw"
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center", // keeps focus centered
      zIndex: 0,
    }}
  />

  {/* Dark overlay */}
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.40)",
      zIndex: 1,
    }}
  ></div>

  {/* Text */}
  <div
    style={{
      position: "relative",
      zIndex: 2,
      maxWidth: "900px",
      margin: "0 auto",
      textAlign: "center",
      color: "#fff",
      textShadow: "2px 2px 6px rgba(0,0,0,0.7)",
    }}
  >
    <h2 style={{ fontSize: "2.2em", marginBottom: "20px" }}>
      Why Choose Jersey Raw?
    </h2>

    <p style={{ fontSize: "1.1em", lineHeight: 1.7, marginBottom: "15px" }}>
      At Jersey Raw, your dog gets <strong>100% fresh, USDA-approved
      meats, organs, and produce</strong> — no fillers, artificial
      ingredients, or preservatives.
    </p>

    <p style={{ fontSize: "1.1em", lineHeight: 1.7, marginBottom: "15px" }}>
      Serving Morris County, NJ, our mission is simple: fuel your dog’s health
      with fresh, safe, and balanced raw meals.
    </p>

    <p style={{ fontSize: "1.1em", lineHeight: 1.7, fontWeight: "bold" }}>
      Orders are picked up in <strong>Morris County, New Jersey</strong> by
      appointment. After submitting your order, you’ll receive a text to
      schedule a convenient pickup time.
    </p>
  </div>
</div>

{/* =========================
 END WHY CHOOSE JERSEY RAW SECTION
========================= */}





              </div>
            }
          />

          <Route path="/ingredients" element={<div style={cardStyle}><Ingredients /></div>} />
          <Route path="/new-to-raw" element={<div style={cardStyle}><NewToRaw /></div>} />
          <Route path="/about-contact" element={<div style={cardStyle}><AboutContact /></div>} />
          <Route path="/order" element={<div style={cardStyle}><Order /></div>} />
          <Route path="/recipes" element={<div style={cardStyle}><FetchRecipes /></div>} />
          <Route path="/calculator" element={<Calculator />} />
        </Routes>

        <footer
          style={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#2b6e44",
            color: "#fff",
            marginTop: "40px",
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} Jersey Raw — Fresh Raw Dog Food in
            Morris County, NJ.
          </p>
          <p>
            Pickup by appointment with flexible hours. Text confirmation sent
            after order submission.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
