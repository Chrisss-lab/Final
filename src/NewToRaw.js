import React from "react";
import dogBowlChicken from "./Photos/dog bowl chicken.jpg";
import dogBowlSalmon from "./Photos/dog bowl salmon.jpg";
import wholeFoodsVsKibble from "./Photos/Whole Foods vs Synthetic Vitamins.jpg";
import whyRawIsNatural from "./Photos/Why Raw is Natrual.jpg";

function NewToRaw() {
  const containerStyle = {
    maxWidth: "900px",
    margin: "50px auto",
    padding: "20px",
    lineHeight: "1.8",
    fontSize: "1.15em",
    fontFamily: "Arial, sans-serif",
    color: "#333",
  };

  const accentImgLeft = {
    width: "45%",
    maxWidth: "280px",
    float: "left",
    margin: "0 20px 20px 0",
    borderRadius: "15px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    opacity: 0.9,
  };

  const accentImgRight = {
    width: "45%",
    maxWidth: "280px",
    float: "right",
    margin: "0 0 20px 20px",
    borderRadius: "15px",
    boxShadow: "0 6px 15px rgba(0,0,0,0.1)",
    opacity: 0.9,
  };

  const clearStyle = { clear: "both" };

  const sectionDivider = {
    height: "2px",
    backgroundColor: "#e0e0e0",
    margin: "50px 0",
    clear: "both",
  };

  const headerStyle = {
    color: "#2c6f44",
    marginTop: "40px",
    marginBottom: "20px",
  };

  const listStyle = { marginBottom: "20px" };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: "center", color: "#1f4b2f", marginBottom: "50px" }}>
        Why Raw Dog Food Beats Kibble Every Time
      </h1>

      <p>
        Kibble is convenient, but it’s highly processed, full of fillers, starches, artificial ingredients, and synthetic vitamins. Raw dog food is fresh, natural, and biologically appropriate. Dogs thrive on raw because it mimics what their ancestors were naturally selected to eat—meat, organs, bones, and nutrient-rich vegetables.
      </p>

      <ul style={listStyle}>
        <li><strong>Better Digestion:</strong> Easier on your dog’s stomach than ultra-processed kibble.</li>
        <li><strong>Shiny Coat & Healthy Skin:</strong> Natural fats and nutrients improve appearance and health.</li>
        <li><strong>Higher Energy & Vitality:</strong> Dogs feel active and playful.</li>
        <li><strong>Stronger Immune System:</strong> Nutrient-dense meals support overall health.</li>
        <li><strong>Dental Health:</strong> Chewing raw meaty bones helps clean teeth naturally.</li>
      </ul>

      {/* Integrated Chicken Bowl */}
      <img src={dogBowlChicken} alt="Chicken dog bowl accent" style={accentImgRight} />

      <h2 style={headerStyle}>New to Raw Feeding?</h2>
      <p>
        Switching to a raw diet doesn’t have to be intimidating. Raw feeding focuses on fresh, whole ingredients, and your dog’s body is built to handle it safely. With a gradual approach, your dog will enjoy the transition naturally.
      </p>

      <h2 style={headerStyle}>Transitioning from Kibble</h2>
      <p>
        Start slow: mix a small portion of raw food with your dog’s current kibble. Gradually increase the raw amount over 7–10 days. Watch for stool changes, appetite, and energy levels.  
        <img src={dogBowlSalmon} alt="Salmon dog bowl accent" style={accentImgLeft} />
      </p>

      <div style={sectionDivider}></div>

      <h2 style={headerStyle}>Whole Foods vs Synthetic Vitamins</h2>
      <p>
        Many commercial kibble brands rely on artificial vitamins and supplements. While these vitamins are added to meet nutritional labels, they are not absorbed as efficiently by the body. At Jersey Raw, we provide all essential nutrients through whole foods—beef, liver, heart, eggs, and fresh vegetables. Nutrients in whole foods are naturally more bioavailable, meaning your dog absorbs and uses them better, supporting stronger health and longevity.
      </p>
      <img src={wholeFoodsVsKibble} alt="Whole Foods vs Kibble accent" style={accentImgRight} />

      <h2 style={headerStyle}>Storage & Defrosting</h2>
      <ul style={listStyle}>
        <li><strong>Keep frozen:</strong> Raw meals stay fresh and safe in the freezer.</li>
        <li><strong>Thaw safely:</strong> Move portions to the fridge 24 hours before feeding, or use cold water for quicker thawing.</li>
        <li><strong>Do not cook:</strong> Cooking destroys nutrients and softens bones, which can be dangerous.</li>
        <li><strong>Hygiene:</strong> Wash hands, bowls, and surfaces after handling raw food.</li>
      </ul>

      <h2 style={headerStyle}>Practical Feeding Tips</h2>
      <ul style={listStyle}>
        <li>Include a mix of muscle meat, organs, bones, and vegetables.</li>
        <li>Introduce new proteins gradually.</li>
        <li>Monitor weight, stool, and energy levels.</li>
        <li>Keep feeding areas clean and organized.</li>
      </ul>

      <h2 style={headerStyle}>Why Raw Is Natural</h2>
      <p>
        Dogs evolved to eat raw, whole foods. Their digestive system is designed to handle raw meat, bones, and organs. Raw food is safe, natural, and extremely beneficial—far superior to kibble or other processed foods.
      </p>
      <img src={whyRawIsNatural} alt="Why Raw Is Natural accent" style={accentImgLeft} />

      <p style={clearStyle}>
        At Jersey Raw, we make raw feeding simple and balanced. Each meal is freshly prepared for your dog’s health and happiness. Switching to raw is easier than you think, and the benefits are lifelong!
      </p>
    </div>
  );
}

export default NewToRaw;
