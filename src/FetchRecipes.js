import React, { useRef, useEffect, useState } from "react";
import BackgroundImage from "./Photos/Food.jpg";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwLtPpoNlnrbIcs_LFk7QIa1GZmLmGkRW7al7LzOQ4Ch8sC5O4YQxjKl44o8LQscekK/exec";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const sectionRefs = useRef({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(GOOGLE_SCRIPT_URL);
        const data = await res.json();

        setRecipes(data);

        // Automatically find unique categories from sheet
        const uniqueCategories = [...new Set(data.map((r) => r.category))];
        setCategories(uniqueCategories);

        // Create scroll references for each category
        const refs = {};
        uniqueCategories.forEach((cat) => {
          refs[cat] = React.createRef();
        });
        sectionRefs.current = refs;
      } catch (err) {
        console.error("Error loading recipes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const scrollToSection = (category) => {
    const ref = sectionRefs.current[category];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const renderRecipes = (category) =>
    recipes
      .filter((r) => r.category === category)
      .map((recipe, index) => (
        <article
          key={index}
          style={{
            borderRadius: "12px",
            padding: "25px",
            backgroundColor: "rgba(255,255,255,0.9)",
            boxShadow: "0 6px 12px rgba(0,0,0,0.2)",
          }}
        >
          <h3
            style={{
              margin: "0 0 10px",
              color: "#2b6e44",
              fontSize: "1.4rem",
              fontWeight: "bold",
            }}
          >
            {recipe.name}
          </h3>

          <p
            style={{
              margin: "0 0 15px",
              fontSize: "0.95rem",
              color: "#555",
              lineHeight: "1.5",
            }}
          >
            {recipe.description}
          </p>

          <div
            style={{
              backgroundColor: "#2b6e44",
              color: "#fff",
              display: "inline-block",
              padding: "6px 14px",
              borderRadius: "20px",
              fontWeight: "bold",
              marginBottom: "15px",
            }}
          >
            ${Number(recipe.price).toFixed(2)} / {recipe.unit || "lb"}
          </div>

          <h4
            style={{
              margin: "15px 0 8px",
              fontSize: "1rem",
              fontWeight: "600",
              color: "#444",
            }}
          >
            Ingredients:
          </h4>
          <ul
            style={{
              fontSize: "0.85rem",
              lineHeight: "1.4",
              color: "#333",
              margin: 0,
              paddingLeft: "20px",
            }}
          >
            {recipe.ingredients?.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>
        </article>
      ));

  return (
    <section
      style={{
        padding: "40px",
        minHeight: "100vh",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      {/* Background overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 0,
        }}
      ></div>

      {/* Main content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#fff",
            fontSize: "2rem",
            fontWeight: "bold",
          }}
        >
          🐾 Our Fresh Raw Recipes
        </h2>

        {/* Category Buttons */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => scrollToSection(cat)}
              style={{
                margin: "0 10px",
                padding: "10px 20px",
                borderRadius: "25px",
                border: "none",
                cursor: "pointer",
                backgroundColor: "#2b6e44",
                color: "#fff",
                fontWeight: "bold",
                textTransform: "capitalize",
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Recipe Sections */}
        {loading ? (
          <p style={{ textAlign: "center", color: "#fff" }}>Loading recipes...</p>
        ) : (
          categories.map((cat, i) => (
            <div key={i} ref={sectionRefs.current[cat]} style={{ marginTop: "60px" }}>
              <h3
                style={{
                  color: "#fff",
                  marginBottom: "20px",
                  fontSize: "1.5rem",
                  textTransform: "capitalize",
                }}
              >
                {cat} Recipes
              </h3>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                  gap: "25px",
                }}
              >
                {renderRecipes(cat)}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default Recipes;
