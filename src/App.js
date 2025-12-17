 import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

import Ingredients from "./Ingredients.js";
import AboutContact from "./AboutContact.js";
import Order from "./Order.js";
import FetchRecipes from "./FetchRecipes.js";
import Calculator from "./Calculator.js";
import NewToRaw from "./NewToRaw.js";

import logo from "./photo-jersey-raw-logo.jpg"; // KEEP ORIGINAL LOGO
import bgPhoto from "./Photos/Food 3.jpg";
import MeatFlowers from "./Photos/Meat Flowers.jpg"; // image used behind "Why Choose..."

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
                {/* HERO SECTION */}
                <div
                  style={{
                    width: "100%",
                    position: "relative",
                    overflow: "hidden",
                    marginTop: "20px",
                  }}
                >
                  <img
                    src={logo}
                    alt="Fresh Made to Order Raw Dog Meals"
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "480px",
                      objectFit: "cover",
                      objectPosition: "center",
                      display: "block",
                      filter: "brightness(0.75)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.25))",
                      zIndex: 1,
                    }}
                  ></div>
                  <div
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 2,
                      textAlign: "center",
                      color: "#fff",
                      padding: "10px 20px",
                      maxWidth: "900px",
                      backgroundColor: "rgba(0,0,0,0.12)",
                      borderRadius: "12px",
                    }}
                  >
                    <h1
                      style={{
                        fontSize: "2.5em",
                        marginBottom: "10px",
                        textShadow: "2px 2px 12px rgba(0,0,0,0.8)",
                      }}
                    >
                      Fresh Made-to-Order Raw Dog Meals in Morris County, NJ
                    </h1>
                    <p
                      style={{
                        fontSize: "1.15em",
                        maxWidth: "700px",
                        margin: "0 auto 15px",
                        lineHeight: 1.6,
                        textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
                      }}
                    >
                      Each meal is prepared fresh and tailored to your dog’s unique needs using 100% USDA-approved meats and fresh produce.
                    </p>
                    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
                      <Link to="/recipes" style={buttonStyle}>
                        Recipes
                      </Link>
                      <Link to="/order" style={buttonStyle}>
                        Order Now
                      </Link>
                    </div>
                  </div>
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "100%",
                      height: "50px",
                      background: "linear-gradient(rgba(0,0,0,0.15), rgba(0,0,0,0))",
                      zIndex: 1,
                    }}
                  ></div>
                </div>

                {/* WHY CHOOSE JERSEY RAW */}
                <div
                  style={{
                    width: "100%",
                    position: "relative",
                    borderRadius: "12px",
                    overflow: "hidden",
                    padding: "60px 20px 40px 20px",
                    minHeight: "480px",
                    marginTop: "0px",
                  }}
                >
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
                      objectPosition: "center",
                      zIndex: 0,
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0,0,0,0.35)",
                      zIndex: 1,
                    }}
                  ></div>
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
                      At Jersey Raw, your dog gets <strong>100% fresh, USDA-approved meats, organs, and produce</strong> — no fillers, artificial ingredients, or preservatives.
                    </p>
                    <p style={{ fontSize: "1.1em", lineHeight: 1.7, marginBottom: "15px" }}>
                      Serving Morris County, NJ, our mission is simple: fuel your dog’s health with fresh, safe, and balanced raw meals.
                    </p>
                    <p style={{ fontSize: "1.1em", lineHeight: 1.7, fontWeight: "bold" }}>
                      Orders are picked up in <strong>Morris County, New Jersey</strong> by appointment. After submitting your order, you’ll receive a text to schedule a convenient pickup time.
                    </p>
                  </div>
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

        {/* =========================
   FACEBOOK FEED + GOOGLE REVIEWS + MINI MAP
========================= */}
<div style={{ marginTop: "40px", padding: "20px", textAlign: "center" }}>
  <h2 style={{ color: "#2b6e44", marginBottom: "20px" }}>
    See What Our Customers Are Saying
  </h2>

  {/* MINI GOOGLE MAP */}
  <div style={{ maxWidth: "400px", margin: "0 auto 20px auto" }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193343.1596984227!2d-74.91858328359379!3d40.784302800000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c39b0025373319%3A0x2279157e600371e!2sJersey%20Raw!5e0!3m2!1sen!2sus!4v1765237244629!5m2!1sen!2sus"
      width="100%"
      height="200"
      style={{ border: 0, borderRadius: "12px" }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Jersey Raw Location"
    ></iframe>
    <a
      href="https://share.google/ZODJtGyqOdzJEwB8n"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: "inline-block",
        marginTop: "10px",
        padding: "10px 20px",
        backgroundColor: "#4285F4",
        color: "#fff",
        borderRadius: "8px",
        textDecoration: "none",
        fontWeight: "bold",
      }}
    >
      See Google Reviews & Photos
    </a>
  </div>

  {/* FACEBOOK PAGE FEED */}
  <div
    className="fb-page"
    data-href="https://www.facebook.com/share/1BYr6pwNH1/?mibextid=wwXIfr"
    data-tabs="timeline"
    data-width="500"
    data-height=""
    data-small-header="false"
    data-adapt-container-width="true"
    data-hide-cover="false"
    data-show-facepile="true"
    style={{
      maxWidth: "600px",
      margin: "0 auto 20px auto",
      background: "#fff",
      padding: "10px",
      borderRadius: "12px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    }}
  ></div>

  {/* FACEBOOK PAGE BUTTON */}
  <a
    href="https://www.facebook.com/share/1BYr6pwNH1/?mibextid=wwXIfr"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      padding: "12px 25px",
      backgroundColor: "#1877F2",
      color: "#fff",
      borderRadius: "10px",
      fontWeight: "bold",
      textDecoration: "none",
      marginTop: "10px",
    }}
  >
    Visit Our Facebook Page
  </a>
</div>


        {/* FOOTER */}
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
            &copy; {new Date().getFullYear()} Jersey Raw — Fresh Raw Dog Food in Morris County, NJ.
          </p>
          <p>
            Pickup by appointment with flexible hours. Text confirmation sent after order submission.
          </p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
