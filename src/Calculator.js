import React, { useState, useEffect } from "react";
import logo from "./photo-jersey-raw-logo.jpg";
import BackgroundImage from "./Photos/Food2.jpg";

// Dog Feeding Percentages - 150+ Breeds
const dogFeedingPercent = {
  "Labrador Retriever": 2.5, "German Shepherd": 2.3, "Golden Retriever": 2.4, "French Bulldog": 2.2,
  "Bulldog": 2.8, "Beagle": 3.0, "Poodle": 2.6, "Rottweiler": 2.7, "Yorkshire Terrier": 3.2,
  "Dachshund": 3.1, "Boxer": 2.9, "Shih Tzu": 3.3, "Pomeranian": 3.5, "Chihuahua": 3.6,
  "Siberian Husky": 2.4, "Doberman Pinscher": 2.6, "Great Dane": 2.0, "Australian Shepherd": 2.5,
  "Cavalier King Charles Spaniel": 3.1, "Miniature Schnauzer": 3.2, "Pug": 3.4, "Border Collie": 2.7,
  "Maltese": 3.7, "Chow Chow": 2.9, "Shiba Inu": 3.0, "Boston Terrier": 3.2, "Havanese": 3.3,
  "Bichon Frise": 3.4, "Papillon": 3.5, "Shetland Sheepdog": 2.8, "Bernese Mountain Dog": 2.1,
  "English Bulldog": 2.8, "Alaskan Malamute": 2.2, "Saint Bernard": 2.0, "Cocker Spaniel": 3.0,
  "Collie": 2.6, "Australian Cattle Dog": 2.5, "Weimaraner": 2.3, "Newfoundland": 2.1, "Akita": 2.2,
  "Mastiff": 2.0, "Irish Wolfhound": 1.9, "Great Pyrenees": 2.1, "Samoyed": 2.4, "Basset Hound": 3.0,
  "Bloodhound": 2.8, "Whippet": 3.2, "Greyhound": 3.3, "Scottish Terrier": 3.4, "West Highland White Terrier": 3.5,
  "Airedale Terrier": 2.7, "Bull Terrier": 2.8, "Cairn Terrier": 3.1, "Jack Russell Terrier": 3.2,
  "Lhasa Apso": 3.3, "Norfolk Terrier": 3.4, "Norwich Terrier": 3.4, "Rat Terrier": 3.1, "Sealyham Terrier": 3.0,
  "Skye Terrier": 3.0, "Soft Coated Wheaten Terrier": 3.2, "Tibetan Terrier": 3.3, "Welsh Terrier": 3.1,
  "Australian Kelpie": 2.5, "Irish Setter": 2.6, "English Setter": 2.6, "Nova Scotia Duck Tolling Retriever": 2.7,
  "Chinese Shar-Pei": 2.8, "Finnish Lapphund": 2.5, "Finnish Spitz": 2.5, "Keeshond": 2.9, "Norwegian Elkhound": 2.8,
  "Pekingese": 3.3, "Pointer": 2.5, "Staffordshire Bull Terrier": 2.8, "Welsh Corgi Pembroke": 2.9,
  "Welsh Corgi Cardigan": 2.9, "Chinese Crested": 3.4, "Japanese Chin": 3.5, "Italian Greyhound": 3.3,
  "Brussels Griffon": 3.4, "Dogo Argentino": 2.2, "Belgian Malinois": 2.4, "Belgian Tervuren": 2.4,
  "Belgian Sheepdog": 2.4, "Belgian Laekenois": 2.4, "Black Russian Terrier": 2.1, "Borzoi": 2.0,
  "Canaan Dog": 2.5, "Cardigan Welsh Corgi": 2.9, "Catalburun": 2.6, "Clumber Spaniel": 2.5, "Curly-Coated Retriever": 2.6,
  "English Foxhound": 2.7, "English Toy Spaniel": 3.3, "Field Spaniel": 2.8, "Finnish Hound": 2.5,
  "Flat-Coated Retriever": 2.7, "German Pinscher": 2.7, "Glen of Imaal Terrier": 3.1, "Harrier": 2.6,
  "Irish Terrier": 3.2, "Irish Water Spaniel": 2.6, "Irish Wolfhound": 1.9, "Italian Spinone": 2.5,
  "Japanese Spitz": 3.3, "Kerry Blue Terrier": 3.1, "Komondor": 2.1, "Kuvasz": 2.1, "Leonberger": 2.0,
  "Lowchen": 3.2, "Manchester Terrier": 3.1, "Neapolitan Mastiff": 2.0, "Norwegian Buhund": 2.5,
  "Norwegian Lundehund": 2.5, "Norwich Terrier": 3.4, "Nova Scotia Duck Tolling Retriever": 2.7,
  "Old English Sheepdog": 2.3, "Otterhound": 2.3, "Papillon": 3.5, "Parson Russell Terrier": 3.1,
  "Pharaoh Hound": 2.6, "Plott": 2.5, "Pointer": 2.5, "Polish Lowland Sheepdog": 2.6, "Pomeranian": 3.5,
  "Poodle Miniature": 2.6, "Poodle Standard": 2.6, "Poodle Toy": 3.0, "Portuguese Water Dog": 2.5,
  "Puli": 2.5, "Pyrenean Mastiff": 2.0, "Saluki": 3.2, "Samoyed": 2.4, "Schipperke": 3.3, "Scottish Deerhound": 2.0,
  "Sealyham Terrier": 3.0, "Shetland Sheepdog": 2.8, "Shiba Inu": 3.0, "Shih Tzu": 3.3, "Siberian Husky": 2.4,
  "Silky Terrier": 3.3, "Skye Terrier": 3.0, "Sloughi": 3.2, "Small Munsterlander": 2.5, "Soft Coated Wheaten Terrier": 3.2,
  "Spanish Water Dog": 2.5, "Spinone Italiano": 2.5, "Staffordshire Bull Terrier": 2.8, "Standard Schnauzer": 2.6,
  "Sussex Spaniel": 2.8, "Swedish Vallhund": 2.7, "Tibetan Mastiff": 2.2, "Tibetan Spaniel": 3.3,
  "Tibetan Terrier": 3.3, "Toy Fox Terrier": 3.2, "Treeing Walker Coonhound": 2.7, "Vizsla": 2.5, "Weimaraner": 2.3,
  "Welsh Springer Spaniel": 2.7, "Welsh Terrier": 3.1, "West Highland White Terrier": 3.5, "Whippet": 3.2,
  "Wire Fox Terrier": 3.1, "Xoloitzcuintli": 3.3, "Yorkshire Terrier": 3.2
};

// Cat Feeding Percentages - 50 Breeds
const catFeedingPercent = {
  "Siamese": 3.0, "Persian": 3.0, "Maine Coon": 2.5, "Ragdoll": 2.7, "Bengal": 3.0,
  "Sphynx": 3.2, "Russian Blue": 2.8, "British Shorthair": 2.6, "Abyssinian": 3.1, "Birman": 2.7,
  "Scottish Fold": 3.0, "Oriental Shorthair": 3.1, "Savannah": 3.3, "Himalayan": 2.8, "Norwegian Forest": 2.5,
  "Turkish Angora": 3.0, "Turkish Van": 2.9, "Egyptian Mau": 3.1, "Chartreux": 2.7, "Manx": 2.8,
  "Devon Rex": 3.2, "Cornish Rex": 3.1, "Tonkinese": 3.0, "Ocicat": 3.0, "Balinese": 3.1,
  "Japanese Bobtail": 3.2, "Korat": 2.9, "LaPerm": 3.0, "Burmese": 2.8, "Burmilla": 2.9,
  "Chausie": 3.3, "Singapura": 3.0, "Munchkin": 3.1, "Oriental Longhair": 3.0, "Peterbald": 3.2,
  "Ragamuffin": 2.7, "Selkirk Rex": 3.0, "Snowshoe": 3.1, "Toyger": 3.2, "Australian Mist": 2.9,
  "Cymric": 2.8, "Egyptian Mau": 3.1, "Exotic Shorthair": 2.8, "Havana Brown": 2.9, "LaPerm": 3.0,
  "Ocicat": 3.0, "Oriental Longhair": 3.0, "Oriental Shorthair": 3.1, "Russian Blue": 2.8, "Scottish Fold": 3.0
};


// Breeds for search
const dogBreeds = Object.keys(dogFeedingPercent).map(name => ({ name }));
const catBreeds = Object.keys(catFeedingPercent).map(name => ({ name }));

// Recipes
const recipes = [
  { name: "Royal Carnivore", caloriesPerLb: 1500 },
  { name: "Daily Thrive", caloriesPerLb: 1450 },
  { name: "Puppy", caloriesPerLb: 1550 },
  { name: "Joint", caloriesPerLb: 1400 },
  { name: "Alpha Bite Beef Mix", caloriesPerLb: 1250 },
];

// Activity & goal multipliers
const activityMultipliers = { low: 0.9, moderate: 1, high: 1.2, "very high": 1.35 };
const goalMultipliers = { lose_weight: 0.85, maintain: 1, gain_some: 1.1 };

// Life stage calculation
const getLifeStage = (ageMonths, species) => {
  const ageYears = ageMonths / 12;
  if (species === "cat") return ageYears < 1 ? "kitten" : ageYears > 11 ? "senior" : "adult";
  if (ageYears < 1.5) return "puppy";
  if (ageYears > 10) return "senior";
  return "adult";
};

// Convert lbs to lbs + oz
const toLbsOz = (lbs) => {
  const totalOz = lbs * 16;
  const wholeLb = Math.floor(totalOz / 16);
  const oz = (totalOz % 16).toFixed(1);
  return `${wholeLb} lb${wholeLb !== 1 ? "s" : ""} ${oz} oz`;
};

export default function Calculator() {
  const [species, setSpecies] = useState("dog");
  const [search, setSearch] = useState("");
  const [breed, setBreed] = useState(null);
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("moderate");
  const [goal, setGoal] = useState("maintain");
  const [ageYears, setAgeYears] = useState("");
  const [ageMonths, setAgeMonths] = useState("");
  const [meals, setMeals] = useState(2);
  const [daysUntilNextOrder, setDaysUntilNextOrder] = useState(7);
  const [selectedMix, setSelectedMix] = useState("");
  const [result, setResult] = useState(null);

  const breeds = species === "dog" ? dogBreeds : catBreeds;
  const feedingPercent = species === "dog" ? dogFeedingPercent : catFeedingPercent;
  const filteredBreeds = breeds.filter(b => b.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    if (breed && weight && (ageYears || ageMonths) && selectedMix && daysUntilNextOrder) {
      const totalMonths = (Number(ageYears) || 0) * 12 + (Number(ageMonths) || 0);
      const stage = getLifeStage(totalMonths, species);
      let percent = feedingPercent[breed.name];

      if (stage === "puppy" || stage === "kitten") percent *= 1.25;
      if (stage === "senior") percent *= 0.85;

      const recipe = recipes.find(r => r.name === selectedMix);
      const caloriesPerLb = recipe.caloriesPerLb;

      const dailyCalories = (Number(weight) * percent * 10) * (activityMultipliers[activity] || 1) * (goalMultipliers[goal] || 1);
      const dailyFoodLbs = dailyCalories / caloriesPerLb;
      const perMeal = dailyFoodLbs / meals;
      const totalNeeded = dailyFoodLbs * daysUntilNextOrder;
      const catPer2Oz = species === "cat" ? ((2 / 16) * caloriesPerLb).toFixed(1) : null;

      setResult({
        stage,
        dailyFood: dailyFoodLbs,
        perMeal,
        totalNeeded,
        dailyCalories: dailyCalories.toFixed(0),
        caloriesPerLb,
        catPer2Oz
      });
    } else {
      setResult(null);
    }
  }, [breed, weight, activity, goal, ageYears, ageMonths, meals, daysUntilNextOrder, species, selectedMix]);

  return (
    <section style={{
      minHeight: "100vh",
      padding: "40px 20px",
      backgroundImage: `url(${BackgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative"
    }}>
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.35)",
        zIndex: 0
      }}></div>

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "480px" }}>
        <div style={{
          backgroundColor: "rgba(255,255,255,0.82)",
          padding: "20px",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          backdropFilter: "blur(6px)"
        }}>
          <img src={logo} alt="Jersey Raw Logo" style={{
            width: "140px",
            height: "140px",
            objectFit: "cover",
            borderRadius: "50%",
            display: "block",
            margin: "0 auto 25px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
            border: "3px solid rgba(255,255,255,0.6)",
            backgroundColor: "rgba(255,255,255,0.3)"
          }} />

          <h1 style={{ textAlign: "center", color: "#2b6e44", marginBottom: "20px" }}>Pet Food Calculator</h1>

          {/* INPUTS */}
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div>
              <label>Species:</label>
              <select value={species} onChange={e => { setSpecies(e.target.value); setBreed(null); setSearch(""); }}
                style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </select>
            </div>

            <div style={{ position: "relative" }}>
              <label>Breed:</label>
              <input type="text" placeholder="Search breed..." value={search} onChange={e => { setSearch(e.target.value); setBreed(null); }}
                style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }} />
              {search && !breed && filteredBreeds.length > 0 && (
                <ul style={{ position: "absolute", top: "100%", left: 0, right: 0, maxHeight: "140px", overflowY: "auto", backgroundColor: "#fff", border: "1px solid #ccc", borderRadius: "8px", margin: 0, padding: 0, listStyle: "none", zIndex: 10 }}>
                  {filteredBreeds.map(b => (
                    <li key={b.name} onClick={() => { setBreed(b); setSearch(b.name); }} style={{ padding: "10px", cursor: "pointer", borderBottom: "1px solid #eee" }}>{b.name}</li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <label>Weight (lbs):</label>
              <input type="number" value={weight} onChange={e => setWeight(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }} />
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <div style={{ flex: 1 }}>
                <label>Age (Years):</label>
                <input type="number" value={ageYears} onChange={e => setAgeYears(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }} />
              </div>
              <div style={{ flex: 1 }}>
                <label>Age (Months):</label>
                <input type="number" value={ageMonths} onChange={e => setAgeMonths(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }} />
              </div>
            </div>

            <div>
              <label>Activity Level:</label>
              <select value={activity} onChange={e => setActivity(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}>
                {Object.keys(activityMultipliers).map(a => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>

            <div>
              <label>Goal:</label>
              <select value={goal} onChange={e => setGoal(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}>
                {Object.keys(goalMultipliers).map(g => <option key={g} value={g}>{g.replace(/_/g, " ")}</option>)}
              </select>
            </div>

            <div>
              <label>Meals per day:</label>
              <input type="number" value={meals} onChange={e => setMeals(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }} />
            </div>

            <div>
              <label>Days until next order:</label>
              <input type="number" value={daysUntilNextOrder} onChange={e => setDaysUntilNextOrder(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }} />
            </div>

            <div>
              <label>Recipe:</label>
              <select value={selectedMix} onChange={e => setSelectedMix(e.target.value)} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}>
                <option value="">--Choose--</option>
                {recipes.map(r => <option key={r.name} value={r.name}>{r.name} ({r.caloriesPerLb} cal/lb)</option>)}
              </select>
            </div>
          </div>

          {/* RESULTS */}
          {result && (
            <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#f0fdf4", borderRadius: "12px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }}>
              <h3 style={{ marginTop: 0, color: "#2b6e44" }}>Results</h3>
              <p><b>Life Stage:</b> {result.stage}</p>
              <p><b>Daily Calories:</b> {result.dailyCalories} kcal</p>
              <p><b>Daily Food:</b> {toLbsOz(result.dailyFood)}</p>
              <p><b>Per Meal:</b> {toLbsOz(result.perMeal)}</p>
              <p><b>Total Needed:</b> {toLbsOz(result.totalNeeded)}</p>
              {species === "cat" && <p><b>Calories per 2 oz:</b> {result.catPer2Oz} kcal</p>}

              {/* ORDER NOW BUTTON */}
              <div style={{ marginTop: "15px", textAlign: "center" }}>
                <button
                  onClick={() => {
                    if (!selectedMix || !result) return;
                    const roundedLbs = Math.ceil(result.totalNeeded);
                    window.location.href = `/order?recipe=${encodeURIComponent(selectedMix)}&weight=${roundedLbs}`;
                  }}
                  style={{
                    padding: "14px",
                    backgroundColor: "#2b6e44",
                    color: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontSize: "1em",
                    fontWeight: "bold",
                    width: "100%"
                  }}
                  onMouseOver={e => e.currentTarget.style.backgroundColor = "#1f5535"}
                  onMouseOut={e => e.currentTarget.style.backgroundColor = "#2b6e44"}
                >
                  Order Now
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
