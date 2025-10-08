// src/About.js
import React from "react";
import logo from "./photo-jersey-raw-logo.jpg";

function About() {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        backgroundImage: `url(${logo})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "60px 20px",
      }}
    >
      {/* Dark overlay for readability */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.75)",
        }}
      />

      {/* Main content */}
      <article
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "850px",
          backgroundColor: "rgba(0,0,0,0.55)",
          padding: "40px",
          borderRadius: "14px",
          textAlign: "center",
          boxShadow: "0 6px 18px rgba(0,0,0,0.6)",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            marginBottom: "20px",
            textShadow: "3px 3px 12px rgba(0,0,0,0.85)",
          }}
        >
          About Jersey Raw
        </h1>

        <img
          src={logo}
          alt="Jersey Raw Logo"
          style={{
            width: "160px",
            height: "auto",
            borderRadius: "50%",
            margin: "20px auto",
            display: "block",
            boxShadow: "0 6px 18px rgba(0,0,0,0.6)",
          }}
        />

        <h2
          style={{
            fontSize: "1.6rem",
            marginTop: "30px",
            marginBottom: "15px",
            textShadow: "2px 2px 8px rgba(0,0,0,0.85)",
          }}
        >
          Fresh Raw Food for Pets
        </h2>
        <p style={{ fontSize: "1.1rem", margin: "15px 0" }}>
          We are a small, family-owned business in New Jersey passionate about
          helping pets live longer, healthier, and happier lives. Our goal is
          simple: provide fresh, human-grade raw food with love, transparency,
          and care.
        </p>

        <h2
          style={{
            fontSize: "1.6rem",
            marginTop: "30px",
            marginBottom: "15px",
            textShadow: "2px 2px 8px rgba(0,0,0,0.85)",
          }}
        >
          Honest Ingredients
        </h2>
        <p style={{ fontSize: "1.1rem", margin: "15px 0" }}>
          Every recipe we create is designed with your pet's well-being in mind.
          We never use fillers or synthetic ingredients — only wholesome,
          nutrient-rich foods that deliver real results. As pet parents
          ourselves, we understand how important it is to know exactly what your
          pet is eating.
        </p>

        <h2
          style={{
            fontSize: "1.6rem",
            marginTop: "30px",
            marginBottom: "15px",
            textShadow: "2px 2px 8px rgba(0,0,0,0.85)",
          }}
        >
          Our Promise
        </h2>
        <p style={{ fontSize: "1.1rem", margin: "15px 0" }}>
          We believe in kindness, honesty, and building a community of pet
          owners who care. Thank you for trusting us to nourish your furry
          family members with the very best.
        </p>

        {/* Contact Section */}
        <div
          style={{
            marginTop: "40px",
            paddingTop: "25px",
            borderTop: "2px solid rgba(255,255,255,0.3)",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              marginBottom: "10px",
              textShadow: "2px 2px 8px rgba(0,0,0,0.85)",
            }}
          >
            Contact Us
          </h2>
          <p style={{ fontSize: "1.1rem", margin: "10px 0" }}>
            Have questions or need help placing an order?
          </p>
          <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>
            📧{" "}
            <a
              href="mailto:JerseyRawHelp@gmail.com"
              style={{
                color: "#b9f6ca",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              JerseyRawHelp@gmail.com
            </a>
          </p>
          <p style={{ fontSize: "1.2rem", margin: "10px 0" }}>
            📱{" "}
            <a
              href="sms:+19735322247"
              style={{
                color: "#b9f6ca",
                textDecoration: "none",
                fontWeight: "bold",
              }}
            >
              973-532-2247
            </a>
          </p>
        </div>
      </article>
    </section>
  );
}

export default About;
