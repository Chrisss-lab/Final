import React from "react";
import dogBowlChicken from "./Photos/dog bowl chicken.jpg";
import dogBowlSalmon from "./Photos/dog bowl salmon.jpg";
import wholeFoodsVsKibble from "./Photos/Whole Foods vs Synthetic Vitamins.jpg";
import whyRawIsNatural from "./Photos/Why Raw is Natrual.jpg";
import backgroundHero from "./Photos/Food 4.jpg";
import Comparison2 from "./Photos/Comparison2.jpg";
import treatBowl from "./Photos/Treat bowl.jpg";
import meat from "./Photos/Meat Flowers.jpg";
import woodTable from "./Photos/Meat wood table.jpg";
import kitchen from "./Photos/Kitchen.jpg";
import comparison from "./Photos/Comparison.jpg";
import treatsBag from "./Photos/Treats bag.jpg";
import treatsTable from "./Photos/Treats Table.jpg";

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

  const sectionStyle = { marginBottom: "50px", clear: "both" };
  const imgFloatLeft = {
    float: "left",
    width: "45%",
    marginRight: "20px",
    marginBottom: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  };
  const imgFloatRight = {
    float: "right",
    width: "45%",
    marginLeft: "20px",
    marginBottom: "20px",
    borderRadius: "15px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  };
  const listStyle = { marginBottom: "20px", paddingLeft: "20px" };
  const sectionDivider = { height: "2px", backgroundColor: "#e0e0e0", margin: "50px 0" };

  return (
    <div style={containerStyle}>
      {/* =========================
          SECTION: Introduction
      ========================= */}
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

      {/* =========================
          SECTION: Floating Dog Bowl Images
      ========================= */}
      <img src={dogBowlChicken} alt="Chicken dog bowl accent" style={imgFloatLeft} />
      <img src={dogBowlSalmon} alt="Salmon dog bowl accent" style={imgFloatRight} />

      {/* =========================
          SECTION: New to Raw Feeding
      ========================= */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>New to Raw Feeding?</h2>
        <p>
          Switching to a raw diet is simple and natural. Dogs evolved to eat raw meats, and their strong stomach acid protects them from bacteria, making their bodies well-equipped for fresh, whole foods. With a gradual transition, your dog will adjust easily and enjoy every nutrient-packed meal.
        </p>
        <p>
          Switching to a raw diet doesn’t have to be intimidating. Raw feeding focuses
          on fresh, whole ingredients, and your dog’s body is built to handle it safely.
          With a gradual approach, your dog will enjoy the transition naturally.
        </p>
      </div>

      {/* =========================
          SECTION: Transitioning from Kibble
      ========================= */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Transitioning from Kibble</h2>
        <p>
          Start slow: mix a small portion of raw food with your dog’s current kibble.
          Gradually increase the raw amount over 7–10 days. Watch for stool changes,
          appetite, and energy levels.
        </p>
      </div>

      <div style={sectionDivider}></div>

     {/* === Whole Foods vs Synthetic Vitamins === */}
<div style={{
  width: "100%",
  minHeight: "500px",
  position: "relative",
  borderRadius: "12px",
  overflow: "hidden",
  marginTop: "50px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
}}>
  <img
    src={wholeFoodsVsKibble}
    alt="Whole Foods vs Kibble"
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }}
  />

  {/* Dark overlay */}
  <div style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.55)",
    zIndex: 1
  }}></div>

  {/* Centered text */}
  <div style={{
    position: "absolute",
    zIndex: 2,
    maxWidth: "900px",
    padding: "30px",
    textAlign: "center",
    color: "#fff",
    textShadow: "3px 3px 10px rgba(0,0,0,0.85)"
  }}>
    <h2 style={{ fontSize: "2.7em", marginBottom: "25px" }}>
      Whole Foods vs Synthetic Vitamins
    </h2>

    <p style={{ fontSize: "1.25em", lineHeight: "1.7", marginBottom: "20px" }}>
      Many store-bought foods use synthetic vitamins and minerals to “complete” the diet.
      These are added to meet labels, but your dog’s body doesn’t absorb them as well.
    </p>

    <ul style={{ fontSize: "1.2em", lineHeight: 1.7, textAlign: "left", maxWidth: "700px", margin: "0 auto" }}>
      <li>Bioavailability matters: nutrients in whole foods are easier for the body to absorb, use, and store.</li>
      <li>Whole animal ingredients deliver vitamins, minerals, and amino acids naturally.</li>
      <li>At Jersey Raw, all nutrients come from real foods — beef, liver, heart, eggs, and vegetables.</li>
      <li>Whole ingredients provide a complete package supporting immunity, coat, energy, and vitality.</li>
    </ul>
  </div>
</div>
{/* === Container Sizes (Text Over Photo With Fade + 10% bottom crop) === */}
<div style={{
  width: "100%",
  marginTop: "50px",
  position: "relative",
  borderRadius: "12px",
  overflow: "hidden",
}}>

  {/* Background photo — bottom 10% removed */}
  <img
    src={Comparison2}
    alt="Container Sizes"
    style={{
      width: "100%",
      height: "auto",
      display: "block",
      objectFit: "cover",
      objectPosition: "center top",
      clipPath: "inset(0 0 10% 0)",   // removes bottom 10%
      filter: "brightness(0.82)",
    }}
  />

  {/* Text overlay with gradient fade */}
  <div style={{
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    padding: "40px 25px 100px 25px",
    background:
      "linear-gradient(to bottom, rgba(245,245,245,0.98) 0%, rgba(245,245,245,0.8) 40%, rgba(245,245,245,0) 100%)",
    color: "#333",
  }}>
    <div style={{ maxWidth: "850px", margin: "0 auto" }}>
      
      <h2 style={{
        fontSize: "2em",
        marginBottom: "15px",
        color: "#2c6f44",
        textShadow: "0px 2px 6px rgba(0,0,0,0.35)",
      }}>
        Our Food Container Sizes
      </h2>

      <p style={{
        fontSize: "1.1em",
        lineHeight: "1.6",
        marginBottom: "20px",
        textShadow: "0px 1px 5px rgba(0,0,0,0.45)",
      }}>
        Convenient portion sizes make feeding and storing simple. Each type matches your pet’s needs.
      </p>

      <ul style={{
        fontSize: "1.05em",
        lineHeight: "1.6",
        paddingLeft: "20px",
        textShadow: "0px 1px 5px rgba(0,0,0,0.35)",
      }}>
        <li><strong>1 lb Tubs:</strong> Quick to thaw, easy to portion, fridge-friendly.</li>
        <li><strong>2 lb Meat Logs:</strong> Slice as needed — ideal for large dogs or bulk feeders.</li>
        <li><strong>2 oz Tubs (for cats):</strong> Easy single-servings with no waste.</li>
      </ul>

    </div>
  </div>

</div>


      {/* =========================
          SECTION: Storage & Defrosting
      ========================= */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Storage & Defrosting</h2>
        <ul style={listStyle}>
          <li><strong>Keep frozen:</strong> Raw meals stay fresh and safe in the freezer.</li>
          <li><strong>Thaw safely:</strong> Move portions to the fridge 24 hours before feeding, or use cold water for quicker thawing.</li>
          <li><strong>Do not cook:</strong> Cooking destroys nutrients and softens bones, which can be dangerous.</li>
          <li><strong>Hygiene:</strong> Wash hands, bowls, and surfaces after handling raw food.</li>
        </ul>
      </div>

      {/* =========================
          SECTION: Practical Feeding Tips
      ========================= */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Practical Feeding Tips</h2>
        <ul style={listStyle}>
          <li>Introduce new proteins gradually to prevent digestive upset.</li>
          <li>Watch your dog’s weight, stool, and energy to adjust portions as needed.</li>
          <li>Feed in a clean, organized area to make mealtime safe and stress-free.</li>
          <li>Portion meals according to your dog’s needs and freezer storage.</li>
          <li>Keep a consistent feeding schedule to support digestion and overall wellness.</li>
        </ul>
      </div>

      {/* =========================
          SECTION: Why Raw is Natural
      ========================= */}
      <div style={sectionStyle}>
        <h2 style={headerStyle}>Why Raw Is Natural</h2>
        <p>
          Dogs are born to thrive on raw, whole foods — their bodies are perfectly designed to digest fresh meat, organs, and bones.
          Feeding raw provides complete, natural nourishment that supports energy, vitality, strong immunity, and long-term health.
        </p>
        <img src={whyRawIsNatural} alt="Why Raw Is Natural accent" style={imgFloatLeft} />
      </div>

      {/* =========================
          SECTION: Conclusion
      ========================= */}
      <p style={{ textAlign: "center", margin: "40px 0", clear: "both" }}>
        At Jersey Raw, we make raw feeding simple and balanced. Each meal is freshly
        prepared for your dog’s health and happiness. Switching to raw is easier than
        you think, and the benefits are lifelong!
      </p>

      {/* =========================
    SECTION: Gallery - Full Width
========================= */}
<div style={{ width: "100%", padding: "60px 20px", backgroundColor: "#fdfdfd", clear: "both" }}>
  <h2 style={{ ...headerStyle, textAlign: "center", marginBottom: "40px" }}>Gallery</h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "25px",
      justifyItems: "center",
      maxWidth: "1400px",
      margin: "0 auto",
    }}
  >

    {/* =========================
        TREATS COMBO ITEM (NEW)
    ========================= */}
    <div
      style={{
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <div style={{ display: "flex", width: "100%", height: "250px" }}>
        <img
          src={treatsBag}
          alt="Treats Bag"
          style={{
            width: "50%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        <img
          src={treatsTable}
          alt="Treats Table"
          style={{
            width: "50%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
      <div
        style={{
          padding: "15px",
          fontSize: "1em",
          fontWeight: "600",
          color: "#2c6f44",
          textAlign: "center",
        }}
      >
        Finished Treats – Packaged & Ready for Your Dog
      </div>
    </div>

    {/* =========================
        EXISTING GALLERY ITEMS
    ========================= */}
    {[treatBowl, meat, woodTable, kitchen, comparison].map((img, index) => {
      const captions = [
        "Treats Ready for the Dehydrator",
        "Daily Thrive in 1lb Tubs",
        "1lb Tub vs 2lb Meat Log Comparison",
        "24 lbs of Growing Paws Puppy Mix in the Bag",
        "See How Our Packages Stack Up",
      ];
      return (
        <div
          key={index}
          style={{
            borderRadius: "15px",
            overflow: "hidden",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            backgroundColor: "#fff",
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <img
            src={img}
            alt={captions[index]}
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              display: "block",
            }}
          />
          <div
            style={{
              padding: "15px",
              fontSize: "1em",
              fontWeight: "600",
              color: "#2c6f44",
              textAlign: "center",
            }}
          >
            {captions[index]}
          </div>
        </div>
      );
    })}
  </div>
</div>
{/* =========================
    END SECTION: Gallery
========================= */}

    </div>
  );
}

export default NewToRaw;
