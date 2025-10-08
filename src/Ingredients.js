import React from "react";

// ✅ Import all photos
import chicken from "./Photos/chicken.jpg";
import beef from "./Photos/grass fed beef.jpg";
import salmon from "./Photos/wild caught salmon.jpg";
import boneBroth from "./Photos/bone broth.jpg";
import beefHeart from "./Photos/Beef Heart.jpg";
import beefLiver from "./Photos/Beef Liver.jpg";
import blueBerries from "./Photos/BlueBerries.jpg";
import chickenGizzards from "./Photos/Chicken Gizzards.jpg";
import eggs from "./Photos/Eggs.jpg";
import greekYogurt from "./Photos/Greek Yogurt.jpg";
import kelp from "./Photos/Kelp.jpg";
import milkProtein from "./Photos/Milk Protein Powder.jpg";
import salmonOil from "./Photos/Salmon oil.jpg";

// 🐾 Ingredient data
const categories = [
  {
    title: "🐔 Meats & Organ Proteins",
    items: [
      {
        name: "Chicken Legs",
        desc: "Whole chicken legs with skin and bone provide natural protein, calcium, and collagen. Supports strong joints, lean muscle, and overall vitality.",
        img: chicken,
      },
      {
        name: "Grass-Fed Beef",
        desc: "Pasture-raised beef rich in protein, omega-3s, and vitamins. Grass-fed meat promotes lean muscle, energy, and a healthy heart.",
        img: beef,
      },
      {
        name: "Chicken Gizzards",
        desc: "High-protein organ meat that supports digestion, metabolism, and healthy muscles. Natural and nutrient-dense.",
        img: chickenGizzards,
      },
      {
        name: "Beef Liver",
        desc: "A vitamin-rich superfood packed with vitamin A, iron, and B vitamins. Supports energy, vision, and immune health.",
        img: beefLiver,
      },
      {
        name: "Beef Heart",
        desc: "Lean, taurine-rich muscle meat that promotes cardiovascular health, endurance, and strong muscles.",
        img: beefHeart,
      },
    ],
  },
  {
    title: "🐟 Fish & Oils",
    items: [
      {
        name: "Wild-Caught Salmon",
        desc: "Sustainably sourced salmon loaded with omega-3s for a shiny coat, healthy skin, brain, and heart function. Wild-caught ensures pure nutrition without antibiotics.",
        img: salmon,
      },
      {
        name: "Salmon Oil",
        desc: "Concentrated omega-3 oil that supports joint mobility, cognitive function, and a glossy coat.",
        img: salmonOil,
      },
    ],
  },
  {
    title: "🥛 Dairy, Fruits & Supplements",
    items: [
      {
        name: "Blueberries",
        desc: "Antioxidant-rich berries that support immune health, reduce inflammation, and promote heart and brain wellness.",
        img: blueBerries,
      },
      {
        name: "Eggs (with shells)",
        desc: "Whole eggs provide complete protein, vitamins, and natural calcium for strong bones and healthy muscles.",
        img: eggs,
      },
      {
        name: "Greek Yogurt",
        desc: "Probiotic-rich and calcium-packed to aid digestion, gut health, and nutrient absorption.",
        img: greekYogurt,
      },
      {
        name: "Kelp Powder",
        desc: "Mineral-rich seaweed supporting thyroid function, metabolism, and healthy skin and coat.",
        img: kelp,
      },
      {
        name: "Grass-Fed Bone Broth Powder",
        desc: "Slow-simmered bones packed with collagen, glucosamine, and minerals. Supports joints, digestion, and overall wellness.",
        img: boneBroth,
      },
      {
        name: "Milk Protein Powder",
        desc: "High-quality protein source to support muscle repair, bone strength, and overall vitality.",
        img: milkProtein,
      },
    ],
  },
];

// 🎨 Styling (unchanged)
const containerStyle = { padding: "40px", fontFamily: "Arial, sans-serif", maxWidth: "1200px", margin: "0 auto" };
const categoryStyle = { marginBottom: "50px" };
const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
};
const cardStyle = {
  backgroundColor: "#fff",
  borderRadius: "12px",
  padding: "20px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  textAlign: "center",
  transition: "transform 0.2s",
};
const imgStyle = { width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px" };
const titleStyle = { color: "#2b6e44", marginBottom: "15px" };
const descStyle = { fontSize: "0.95em", lineHeight: "1.5", color: "#444" };

// 🧩 Component
function Ingredients() {
  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center", marginBottom: "60px" }}>🐾 Our Premium Dog Food Ingredients</h1>
      {categories.map((cat, i) => (
        <div key={i} style={categoryStyle}>
          <h2 style={{ marginBottom: "30px", color: "#333" }}>{cat.title}</h2>
          <div style={gridStyle}>
            {cat.items.map((item, idx) => (
              <div
                key={idx}
                style={cardStyle}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              >
                <img
                  src={item.img || "https://via.placeholder.com/300x200?text=Coming+Soon"}
                  alt={item.name}
                  style={imgStyle}
                />
                <h3 style={titleStyle}>{item.name}</h3>
                <p style={descStyle}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Ingredients;
