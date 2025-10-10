import React from "react";
import BackgroundImage from "./Photos/Food.jpg"; // make sure this matches your file name

const recipes = [
  {
    name: "Daily Thrive",
    price: 4.25,
    description:
      "Boost your dog’s daily health with this balanced blend! Packed with nutrient-rich proteins and wholesome vegetables, it supports a shiny coat, strong immune system, and healthy digestion—keeping your pup energized and thriving every day. For best results and maximum nutrition, this food must be served raw.",
    ingredients: [
      "Chicken",
      "Chicken Gizzards",
      "Beef Liver",
      "Eggs",
      "Pumpkin",
      "Carrots",
      "Greek Yogurt",
      "Salmon Oil",
      "Kelp Powder",
    ],
  },
  {
    name: "Wild Balance",
    price: 7.99,
    description:
      "A perfect balance of land and sea—Wild Balance brings together premium proteins like chicken, beef heart, and wild-caught salmon with nourishing whole foods such as pumpkin, blueberries, and kelp. Infused with bone broth powder and salmon oil, it supports strong muscles, joint health, and a glowing coat. Designed to deliver complete nutrition and harmony in every bite. For best results, this food must be served raw.",
    ingredients: [
      "Chicken",
      "Beef Heart",
      "Wild Caught Salmon",
      "Bone Broth Powder (grass-fed)",
      "Eggs",
      "Chicken Gizzards",
      "Pumpkin",
      "Blueberries",
      "Beef Liver",
      "Kelp Powder",
      "Calcium Shells",
      "Salmon Oil",
    ],
  },
  {
    name: "Royal Carnivore",
    price: 12.99,
    description:
      "A premium feast for your dog featuring grass-fed beef and wild-caught salmon. Rich in high-quality protein, omega-3 fatty acids, and essential minerals, it helps build lean muscle, support joint health, and promote a glossy coat for a truly royal pup. For optimal health and maximum nutrition, this food must be served raw.",
    ingredients: [
      "Grass-Fed Beef",
      "Eggs",
      "Beef Heart",
      "Pumpkin",
      "Wild Caught Salmon",
      "Chicken Gizzards",
      "Beef Liver",
      "Beef Bone Broth Powder (grass-fed)",
      "Blueberries",
      "Kelp Powder",
      "Calcium Shells",
      "Salmon Oil",
    ],
  },
  {
    name: "Growing Paws Puppy",
    price: 2.99,
    description:
      "Support your puppy’s growth and brain development with this carefully crafted formula. Packed with high-quality proteins, healthy fats, and essential vitamins, it promotes strong bones, lean muscle, and cognitive development for sharper learning and better focus during playtime. Gentle on digestion while giving your puppy the energy they need for happy, healthy exploration. For optimal nutrition and full benefits, this food must be served raw.",
    ingredients: [
      "Chicken",
      "Chicken Gizzards",
      "Pumpkin",
      "Eggs",
      "Greek Yogurt",
      "Beef Liver",
      "Salmon Oil",
      "Protein Powder",
      "Kelp Powder",
    ],
  },
  {
    name: "Joint Care Blend",
    price: 5.25,
    description:
      "Support your dog’s mobility with this special mix featuring grass-fed bone broth powder. Loaded with collagen, glucosamine, and natural anti-inflammatories, it helps maintain strong joints, healthy cartilage, and keeps your dog active and playful for years to come. For best results and full benefits, this food must be served raw.",
    ingredients: [
      "Chicken",
      "Beef Heart",
      "Carrots",
      "Pumpkin",
      "Beef Bone Broth Powder (grass-fed)",
      "Greek Yogurt",
      "Beef Liver",
      "Salmon Oil",
      "Coconut Oil",
    ],
  },
  {
    name: "Golden Years Senior",
    price: 3.99,
    description:
      "Give your senior dog the comfort and vitality they deserve. This blend supports joint health, gentle digestion, and sustained energy, helping your older companion stay active, happy, and full of life every day. For best results and optimal nutrition, this food must be served raw.",
    ingredients: [
      "Chicken",
      "Beef Liver",
      "Eggs",
      "Greek Yogurt",
      "Cottage Cheese",
      "Carrots",
      "Salmon Oil",
      "Kelp Powder",
    ],
  },
  {
    name: "Fetch and Feast Chicken",
    price: 2.25,
    description:
      "A simple, wholesome blend made with only whole ingredients: chicken, chicken gizzards, and pumpkin. Nourishing and easy to digest, it supports your dog’s health, energy, and a shiny coat—keeping mealtime natural and satisfying. For full nutritional benefits, this food must be served raw.",
    ingredients: ["Chicken", "Chicken Gizzards", "Pumpkin"],
  },
  {
    name: "Alpha Bite Beef",
    price: 4.0,
    description:
      "A hearty, protein-packed formula crafted for strength and energy. This blend supports muscle maintenance, strong bones, and overall vitality—perfect for active dogs who love to run, play, and explore. For maximum nutrition and optimal results, this food must be served raw.",
    ingredients: [
      "Beef Heart",
      "Eggs",
      "Beef",
      "Pumpkin",
      "Beef Liver",
      "Calcium Shells",
    ],
  },
  {
    name: "Wild Whiskers",
    price: 5.25,
    unit: "0.5 lb",
    description:
      "Give your feline friend the taste of the wild with this nutrient-packed raw blend! Featuring high-quality proteins like chicken, chicken gizzards, beef heart, and beef liver, plus wild-caught salmon and salmon oil for omega fatty acids, this recipe supports a shiny coat, strong muscles, and a healthy heart. Fortified with kelp powder, it promotes optimal digestion and provides essential vitamins and minerals for overall vitality. A wholesome, balanced meal that keeps your cat active, happy, and thriving.",
    ingredients: [
      "Chicken",
      "Chicken Gizzards",
      "Beef Heart",
      "Beef Liver",
      "Wild Caught Salmon",
      "Salmon Oil",
      "Kelp Powder",
    ],
  },
];

function Recipes() {
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
        <h2
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#fff",
          }}
        >
          🐾 Our Fresh Raw Dog Food Recipes
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "25px",
          }}
        >
          {recipes.map((recipe, index) => (
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
                }}
              >
                {recipe.name}
              </h3>
              <p
                style={{
                  margin: "0 0 15px",
                  fontSize: "0.95rem",
                  color: "#555",
                }}
              >
                {recipe.description}
              </p>
              <div
                style={{
                  backgroundColor: "#2b6e44",
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
              <p
                style={{
                  fontSize: "0.85rem",
                  lineHeight: "1.4",
                  color: "#333",
                  margin: 0,
                }}
              >
                {recipe.ingredients.join(", ")}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Recipes;
