import React from "react";
import BackgroundImage from "./Photos/Food.jpg";

const recipes = [
  // Adult Dog Food
  { name: "Daily Thrive", price: 4.25, category: "adult", description: "Boost your dog’s daily health...", ingredients: ["Chicken","Chicken Gizzards","Beef Liver","Eggs","Pumpkin","Carrots","Greek Yogurt","Salmon Oil","Kelp Powder"] },
  { name: "Wild Balance", price: 7.99, category: "adult", description: "A perfect balance of land and sea...", ingredients: ["Chicken","Beef Heart","Wild Caught Salmon","Bone Broth Powder","Eggs","Chicken Gizzards","Pumpkin","Blueberries","Beef Liver","Kelp Powder","Calcium Shells","Salmon Oil"] },
  { name: "Royal Carnivore", price: 12.99, category: "adult", description: "A premium feast for your dog...", ingredients: ["Grass-Fed Beef","Eggs","Beef Heart","Pumpkin","Wild Caught Salmon","Chicken Gizzards","Beef Liver","Beef Bone Broth Powder","Blueberries","Kelp Powder","Calcium Shells","Salmon Oil"] },

  // Puppy Food
  { name: "Growing Paws Puppy", price: 2.99, category: "puppy", description: "Support your puppy’s growth...", ingredients: ["Chicken","Chicken Gizzards","Pumpkin","Eggs","Greek Yogurt","Beef Liver","Salmon Oil","Protein Powder","Kelp Powder"] },
  { name: "Puppy Thrive", price: 4.99, category: "puppy", description: "Premium growth-focused puppy food...", ingredients: ["Chicken","Chicken Gizzards","Goat Milk Powder","Eggs","Greek Yogurt","Pumpkin","Carrots","Salmon Oil","Kelp Powder"] },

  // Specialty
  { name: "Joint Care Blend", price: 5.25, category: "specialty", description: "Support your dog’s mobility...", ingredients: ["Chicken","Beef Heart","Carrots","Pumpkin","Beef Bone Broth Powder","Greek Yogurt","Beef Liver","Salmon Oil","Coconut Oil"] },
  { name: "Golden Years Senior", price: 3.99, category: "specialty", description: "Give your senior dog the comfort...", ingredients: ["Chicken","Beef Liver","Eggs","Greek Yogurt","Cottage Cheese","Carrots","Salmon Oil","Kelp Powder"] },
  { name: "Alpha Bite Beef", price: 4.0, category: "specialty", description: "A hearty, protein-packed formula...", ingredients: ["Beef Heart","Eggs","Beef","Pumpkin","Beef Liver","Calcium Shells"] },
  { name: "Fetch and Feast Chicken", price: 2.25, category: "specialty", description: "A simple, wholesome blend...", ingredients: ["Chicken","Chicken Gizzards","Pumpkin"] },
  { name: "Wild Whiskers", price: 5.25, category: "specialty", unit: "0.5 lb", description: "Give your feline friend the taste of the wild...", ingredients: ["Chicken","Chicken Gizzards","Beef Heart","Beef Liver","Wild Caught Salmon","Salmon Oil","Kelp Powder"] },
];

const sectionColors = {
  adult: "#4CAF50",
  puppy: "#2196F3",
  specialty: "#FF9800",
};

function Recipes() {
  const sections = [
    { title: "Adult Dog Food", category: "adult" },
    { title: "Puppy Food", category: "puppy" },
    { title: "Specialty", category: "specialty" },
  ];

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
      {/* Dark overlay */}
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

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#fff" }}>
          🐾 Our Fresh Raw Food Recipes
        </h2>

        {/* Navigation Buttons */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          {sections.map((section) => (
            <a
              key={section.category}
              href={`#${section.category}`}
              style={{
                padding: "10px 20px",
                backgroundColor: sectionColors[section.category],
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
                marginRight: "10px",
              }}
            >
              {section.title}
            </a>
          ))}
        </div>

        {/* Recipe Sections */}
        {sections.map((section) => (
          <div
            key={section.category}
            id={section.category}
            style={{ marginBottom: "60px" }}
          >
            <h3
              style={{
                color: sectionColors[section.category],
                marginBottom: "20px",
              }}
            >
              {section.title}
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "25px",
              }}
            >
              {recipes
                .filter((recipe) => recipe.category === section.category)
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
                    <h4
                      style={{
                        margin: "0 0 10px",
                        color: sectionColors[section.category],
                        fontSize: "1.3rem",
                      }}
                    >
                      {recipe.name}
                    </h4>
                    <p style={{ margin: "0 0 15px", fontSize: "0.95rem", color: "#555" }}>
                      {recipe.description}
                    </p>
                    <div
                      style={{
                        backgroundColor: sectionColors[section.category],
                        color: "#fff",
                        display: "inline-block",
                        padding: "5px 12px",
                        borderRadius: "20px",
                        fontWeight: "bold",
                        marginBottom: "15px",
                      }}
                    >
                      ${recipe.price.toFixed(2)} / {recipe.unit || "lb"}
                    </div>
                    <h5
                      style={{
                        margin: "15px 0 8px",
                        fontSize: "1rem",
                        fontWeight: "600",
                        color: "#444",
                      }}
                    >
                      Ingredients:
                    </h5>
                    <p style={{ fontSize: "0.85rem", lineHeight: "1.4", color: "#333", margin: 0 }}>
                      {recipe.ingredients.join(", ")}
                    </p>
                  </article>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Recipes;