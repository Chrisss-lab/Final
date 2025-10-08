import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Ingredients from "./Ingredients.js";
import AboutContact from "./AboutContact.js";
import Order from "./Order.js";
import FetchRecipes from "./FetchRecipes.js";
import Calculator from "./Calculator.js";
import NewToRaw from "./NewToRaw.js";

import logo from "./photo-jersey-raw-logo.jpg";
import foodHero from "./Photos/Food 4.jpg"; // <-- Correct path to Photos folder

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowHeader(currentScroll < lastScroll || currentScroll < 100);
      setLastScroll(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const linkStyle = {
    textDecoration: "none",
    color: "#2b6e44",
    fontWeight: "600",
    padding: "10px 16px",
    borderRadius: "12px",
    backgroundColor: "#e6f1ea",
    margin: "4px",
    minWidth: "80px",
    display: "inline-block",
    transition: "all 0.2s",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "15px 32px",
    margin: "15px",
    backgroundColor: "#2b6e44",
    color: "#fff",
    fontSize: "1.2em",
    fontWeight: "bold",
    borderRadius: "20px",
    textDecoration: "none",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    transition: "all 0.2s",
  };

  const cardStyle = {
    maxWidth: "900px",
    margin: "30px auto",
    padding: "30px",
    backgroundColor: "#ffffffdd",
    borderRadius: "20px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
    textAlign: "center",
  };

  const heroStyle = {
    position: "relative",
    backgroundImage: `url(${foodHero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "80px 20px",
    borderRadius: "20px",
    margin: "20px auto",
    maxWidth: "900px",
    color: "#fff",
    textAlign: "center",
    overflow: "hidden",
    boxShadow: "0 8px 24px rgba(0,0,0,0.25)",
  };

  const overlayStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.6))",
    borderRadius: "20px",
    zIndex: 1,
  };

  const heroTextStyle = {
    position: "relative",
    zIndex: 2,
    textShadow: "1px 1px 8px rgba(0,0,0,0.9)",
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
          fontFamily: "'Poppins', Arial, sans-serif",
          color: "#333",
          backgroundColor: "#f7faf6",
          minHeight: "100vh",
        }}
      >
        {/* Header Navigation */}
        <header
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            padding: "12px 24px",
            backgroundColor: "#ffffffee",
            borderBottom: "2px solid #e2e8f0",
            position: "sticky",
            top: 0,
            zIndex: 10,
            gap: "8px",
            transform: showHeader ? "translateY(0)" : "translateY(-120%)",
            transition: "transform 0.3s ease-in-out",
            borderRadius: "0 0 20px 20px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <img
            src={logo}
            alt="Jersey Raw Logo"
            style={{
              height: "60px",
              width: "60px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "3px solid #2b6e44",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
          />
          <nav
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.path}
                style={linkStyle}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#c9e4d1")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#e6f1ea")}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        {/* Page Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <div style={{ textAlign: "center" }}>
                <div style={heroStyle}>
                  <div style={overlayStyle}></div>
                  <div style={heroTextStyle}>
                    <h1 style={{ fontSize: "3em" }}>
                      Fresh Made-to-Order Raw Dog Meals in Morris County, NJ
                    </h1>
                    <p
                      style={{
                        fontSize: "1.2em",
                        maxWidth: "700px",
                        margin: "10px auto",
                      }}
                    >
                      Each meal is prepared fresh and tailored to your dog's
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

                <div style={cardStyle}>
                  <h2>Why Choose Jersey Raw?</h2>
                  <p style={{ fontSize: "1.1em", lineHeight: "1.6" }}>
                    At Jersey Raw, your dog gets{" "}
                    <strong>
                      100% fresh, USDA-approved meats, organs, and produce
                    </strong>{" "}
                    — no fillers, artificial ingredients, or preservatives.
                  </p>
                  <p
                    style={{
                      fontSize: "1.1em",
                      lineHeight: "1.6",
                      marginTop: "15px",
                    }}
                  >
                    Serving Morris County, NJ, our mission is simple: fuel your
                    dog’s health with fresh, safe, and balanced raw meals.
                  </p>
                  <p
                    style={{
                      fontSize: "1.1em",
                      lineHeight: "1.6",
                      marginTop: "15px",
                      fontWeight: "bold",
                      color: "#2b6e44",
                    }}
                  >
                    Orders are picked up in{" "}
                    <strong>Morris County, New Jersey</strong> by appointment.
                    After submitting your order, you’ll receive a text message
                    to schedule a convenient pickup date and time — with very
                    flexible hours to fit your schedule.
                  </p>
                </div>
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

        {/* Footer */}
        <footer
          style={{
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#2b6e44",
            color: "#fff",
            marginTop: "40px",
            borderRadius: "20px 20px 0 0",
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} Jersey Raw. Fresh Raw Dog Food
            in Morris County, NJ.
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
