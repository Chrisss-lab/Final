import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

import Ingredients from "./Ingredients.js";
import AboutContact from "./AboutContact.js";
import Order from "./Order.js";
import FetchRecipes from "./FetchRecipes.js";
import Calculator from "./Calculator.js";
import NewToRaw from "./NewToRaw.js";

import logo from "./photo-jersey-raw-logo.jpg"; // KEEP ORIGINAL LOGO
import bgPhoto from "./Photos/Food 3.jpg";
import MeatFlowers from "./Photos/Meat Flowers.jpg"; // image used behind "Why Choose..."

// ===== GA4 Pageview Tracker for HashRouter =====
function GA4PageViewTracker() {
  const location = useLocation();
  useEffect(() => {
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: location.pathname + location.hash,
      });
    }
  }, [location]);
  return null;
}

function App() {
  const [showHeader, setShowHeader] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;
      setShowHeader(current < lastScrollY || current < 100);
      lastScrollY = current;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dynamically load Facebook SDK
  useEffect(() => {
    if (!document.getElementById("facebook-jssdk")) {
      const fbScript = document.createElement("script");
      fbScript.id = "facebook-jssdk";
      fbScript.src =
        "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v17.0";
      fbScript.async = true;
      fbScript.defer = true;
      document.body.appendChild(fbScript);
    }
  }, []);

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
      {/* GA4 Tracker */}
      <GA4PageViewTracker />

      <div
        style={{
          fontFamily: "Arial, sans-serif",
          color: "#333",
          backgroundColor: "#f4f6f8",
          minHeight: "100vh",
        }}
      >
        {/* ========================= HEADER ========================= */}
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

        {/* ========================= ROUTES ========================= */}
        <Routes>
          <Route
            path="/"
            element={
              <div style={{ textAlign: "center" }}>
                {/* ... HERO and WHY CHOOSE sections ... */}
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

        {/* ... Facebook feed + Google Reviews + Footer ... */}
      </div>
    </Router>
  );
}

export default App;
