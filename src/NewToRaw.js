import React from "react";
import dogBowlChicken from "./Photos/dog bowl chicken.jpg";
import dogBowlSalmon from "./Photos/dog bowl salmon.jpg";
import wholeFoodsVsKibble from "./Photos/Whole Foods vs Synthetic Vitamins.jpg";
import whyRawIsNatural from "./Photos/Why Raw is Natrual.jpg";
import backgroundHero from "./Photos/Food 4.jpg"; // faint background

function NewToRaw() {
  const containerStyle = {
    maxWidth: "1000px",
    margin: "50px auto",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    lineHeight: 1.7,
    position: "relative",
    backgroundImage: `url(${backgroundHero})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "15px",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundBlendMode: "lighten",
    backgroundColor: "rgba(255,255,255,0.85)",
    zIndex: 1,
  };

  const headerStyle = {
    color: "#2c6f44",
    margin: "40px 0 20px 0",
    textAlign: "center",
  };

  const sectionStyle = { marginBottom: "50px" };
  const imgContainer = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    margin: "30px 0",
  };
  const imgStyle = {
    flex: "1 1 300px",
    maxWidth: "45%",
    borderRadius: "15px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    transition: "transform 0.3s",
  };
  const listStyle = { marginBottom: "20px", paddingLeft: "20px" };
  const sectionDivider = { height: "2px", backgroundColor: "#e0e0e0", margin: "50px 0" };

  return (
    <div style={containerStyle}>
      <h1 style={{ ...headerStyle, fontSize: "2.5em" }}>
        Why Raw Dog Food Beats Kibble Every Time
      </h1>

      <p>
        Kibble is convenient, but it’s highly processed, full of fillers, starches,
        artificial ingredients, and synthetic vitamins. Raw dog food is fresh, natural,
        and biologically appropriate. Dogs thrive on raw because it mimics what their
        ancestors were naturally selected to eat — meat, organs, bones, and nutrient-rich
        vegetables.
      </p>

      <ul style={listStyle}>
        <li><strong>Better Digestion:</strong> Easier on your dog’s stomach than ultra-processed kibble.</li>
        <li><strong>Shiny Coat & Healthy Skin:</strong> Natural fats and nutrients improve appearance and health.</li>
        <li><strong>Higher Energy & Vitality:</strong> Dogs feel active and playful.</li>
        <li><strong>Stronger Immune System:</strong> Nutrient-dense meals support overall health.</li>
        <li><strong>Dental Health:</strong> Chewing raw meaty bones helps clean teeth naturally.</li>
      </ul>

      <div style={imgContainer}>
        <img src={dogBowlChicken} alt="Chicken dog bowl accent" style={imgStyle} />
        <img src={dogBowlSalmon} alt="Salmon dog bowl accent" style={imgStyle} />
      </div>

      <div style={sectionStyle}>
        <h2 style={headerStyle}>New to Raw Feeding?</h2>
       Switching to a raw diet is simple and natural. Dogs evolved to eat raw meats, and their strong stomach acid protects them from bacteria, making their bodies well-equipped for fresh, whole foods. With a gradual transition, your dog will adjust easily and enjoy every nutrient-packed meal. <p>
          Switching to a raw diet doesn’t have to be intimidating. Raw feeding focuses
          on fresh, whole ingredients, and your dog’s body is built to handle it safely.
          With a gradual approach, your dog will enjoy the transition naturally.
        </p>
      </div>

      <div style={sectionStyle}>
        <h2 style={headerStyle}>Transitioning from Kibble</h2>
        <p>
          Start slow: mix a small portion of raw food with your dog’s current kibble.
          Gradually increase the raw amount over 7–10 days. Watch for stool changes,
          appetite, and energy levels.
        </p>
      </div>

      <div style={sectionDivider}></div>

      <div style={sectionStyle}>
        <p>
   
<div>
  <h2 style={{ color: "#2c6f44", textAlign: "center", margin: "30px 0" }}>
    Whole Foods vs Synthetic Vitamins
  </h2>
  <ul style={{ paddingLeft: "20px", lineHeight: 1.6 }}>
    <li>
      Many store-bought foods use synthetic vitamins and minerals to “complete” the diet. 
      These are added to meet labels, but your dog’s body doesn’t absorb them as well.
    </li>
    <li>
      Bioavailability matters: nutrients in whole foods are easier for the body to absorb, 
      use, and store. Whole animal ingredients deliver vitamins, minerals, and amino acids naturally, 
      so your dog gets the full benefit.
    </li>
    <li>
      At Jersey Raw, all nutrients come from real foods — beef, liver, heart, eggs, and fresh vegetables. 
      Nothing synthetic, nothing filler.
    </li>
    <li>
      Whole ingredients provide a complete package: protein, fats, minerals, and vitamins work together 
      like nature intended, supporting strong immunity, shiny coat, energy, and overall vitality.
    </li>
    <li>
      This approach mirrors what dogs were evolved and selectively bred to eat — raw, whole animal foods, 
      not grains or artificial additives.
    </li>
  </ul>
</div>


        </p>
        <div style={imgContainer}>
          <img src={wholeFoodsVsKibble} alt="Whole Foods vs Kibble accent" style={imgStyle} />
        </div>
      </div>

      {/* 🥩 New Section: Container Sizes */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Our Food Container Sizes</h2>
        <p>
          We package our meals in convenient portion sizes to make feeding and storing simple.
          Each container type is designed to match your pet’s needs — from small servings for cats
          to family-sized logs for multi-dog homes.
        </p>

        <ul style={listStyle}>
          <li>
            <strong>1 lb Tubs:</strong> These clear, deli-style tubs make raw feeding effortless. They’re the most convenient choice — quick to thaw, simple to portion, and easy to organize in your fridge.
          </li>
          <li>
    <strong>2 lb Meat Logs:</strong> Sealed in durable plastic packaging like ground beef
            at the grocery store. Ideal for larger dogs or bulk feeders. Just slice off what you
            need and keep the rest frozen.
          </li>
          <li>
            <strong>2 oz Tubs:</strong> These small, sauce-style cups are perfect for precise, mess-free feeding. They keep each portion fresh and make serving effortless — great for smaller meals or variety packs.
          </li>
        </ul>
      </div>

      <div style={sectionStyle}>
        <h2 style={headerStyle}>Storage & Defrosting</h2>
        <ul style={listStyle}>
          <li><strong>Keep frozen:</strong> Raw meals stay fresh and safe in the freezer.</li>
          <li><strong>Thaw safely:</strong> Move portions to the fridge 24 hours before feeding, or use cold water for quicker thawing.</li>
          <li><strong>Do not cook:</strong> Cooking destroys nutrients and softens bones, which can be dangerous.</li>
          <li><strong>Hygiene:</strong> Wash hands, bowls, and surfaces after handling raw food.</li>
        </ul>
      </div>

<div style={sectionStyle}>
  <h2 style={headerStyle}>Practical Feeding Tips</h2>
  <ul style={listStyle}>
    <li>Introduce new proteins gradually to prevent digestive upset.</li>
    <li>Watch your dog’s weight, stool, and energy to adjust portions as needed.</li>
    <li>Feed in a clean, organized area to make mealtime safe and stress-free.</li>
    <li>Portion meals according to your dog’s needs and freezer storage, using 1 lb tubs, 2 lb logs, or 2 oz containers.</li>
    <li>Keep a consistent feeding schedule to support digestion and overall wellness.</li>
  </ul>
</div>


      <div style={sectionStyle}>
        <h2 style={headerStyle}>Why Raw Is Natural</h2>
        <p>
          Dogs are born to thrive on raw, whole foods — their bodies are perfectly designed to digest fresh meat, organs, and bones. With higher stomach acid and an evolved digestive system, they safely handle raw proteins and absorb nutrients far more effectively than from processed diets. Feeding raw provides complete, natural nourishment that supports energy, vitality, strong immunity, and long-term health. This is not just food — it’s what dogs were selectively bred to eat, giving them the chance to flourish the way nature intended.
        </p>
        <div style={imgContainer}>
          <img src={whyRawIsNatural} alt="Why Raw Is Natural accent" style={imgStyle} />
        </div>
      </div>

      <p style={{ textAlign: "center", margin: "40px 0" }}>
        At Jersey Raw, we make raw feeding simple and balanced. Each meal is freshly
        prepared for your dog’s health and happiness. Switching to raw is easier than
        you think, and the benefits are lifelong!
      </p>
    </div>
  );
}

export default NewToRaw;
