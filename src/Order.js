import React, { useState, useEffect } from "react";
import logo from "./photo-jersey-raw-logo.jpg";
import BackgroundImage from "./Photos/Food2.jpg"; // your background photo

// Dog feeding percentages
const dogFeedingPercent = {
  "Labrador Retriever": 2.5,
  "German Shepherd": 2.3,
  "Golden Retriever": 2.4,
  "French Bulldog": 2.7,
  "English Bulldog": 2.8,
  "Beagle": 3,
  "Poodle (Standard)": 2.6,
  "Rottweiler": 2.2,
  "Yorkshire Terrier": 3.5,
  "Boxer": 2.5,
  "Dachshund": 3.2,
  "Siberian Husky": 2.5,
  "Doberman Pinscher": 2.4,
  "Great Dane": 2,
  "Cavalier King Charles Spaniel": 3.2,
  "Miniature Schnauzer": 3,
  "Shih Tzu": 3.2,
  "Boston Terrier": 3,
  "Pomeranian": 3.5,
  "Havanese": 3.2,
  "Pitbull": 2.7
};

// Cat feeding percentages
const catFeedingPercent = {
  "Domestic Shorthair": 3,
  "Domestic Longhair": 3,
  "Siamese": 3,
  "Persian": 3,
  "Maine Coon": 2.5,
  "Ragdoll": 2.7,
  "Bengal": 3,
  "Sphynx": 3.5,
  "British Shorthair": 2.8,
  "Scottish Fold": 3,
  "Abyssinian": 3,
  "Oriental": 3,
  "Birman": 3,
  "Norwegian Forest": 2.8,
  "Russian Blue": 3,
  "Himalayan": 2.9,
  "Devon Rex": 3.5
};

// Breeds for search
const dogBreeds = Object.keys(dogFeedingPercent).map(name => ({ name }));
const catBreeds = Object.keys(catFeedingPercent).map(name => ({ name }));

// Recipes reordered
const recipes = [
  { name: "Royal Carnivore", caloriesPerLb: 1500 },
  { name: "Daily Thrive", caloriesPerLb: 1450 },
  { name: "Puppy", caloriesPerLb: 1550 },
  { name: "Joint", caloriesPerLb: 1400 },
  { name: "Alpha Bite Beef Mix", caloriesPerLb: 1250 },
  { name: "Wild Whiskers", caloriesPerLb: 1400 },
  { name: "Fetch & Feast Chicken", caloriesPerLb: 1200 }
];

// Activity & goal multipliers
const activityMultipliers = { low: 0.9, moderate: 1, high: 1.2, "very high": 1.35 };
const goalMultipliers = { lose_weight: 0.85, lose_some: 0.95, maintain: 1, gain_some: 1.1, needs_gain: 1.2 };

// Life stage
const getLifeStage = (ageMonths, species) => {
  const ageYears = ageMonths / 12;
  if (species === "cat") return ageYears < 1 ? "kitten" : ageYears > 11 ? "senior" : "adult";
  if (ageYears < 1.5) return "puppy";
  if (ageYears > 10) return "senior";
  return "adult";
};

// Convert pounds to pounds + ounces
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
    <section
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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
          backgroundColor: "rgba(0,0,0,0.35)",
          zIndex: 0,
        }}
      ></div>

      {/* Calculator container */}
      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "480px" }}>
        <div style={{
          backgroundColor: "rgba(255,255,255,0.82)",
          padding: "20px",
          borderRadius: "16px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          backdropFilter: "blur(6px)"
        }}>
          <img src={logo} alt="Logo" style={{ width: "120px", display: "block", margin: "0 auto 20px" }} />
          <h1 style={{ textAlign: "center", color: "#2b6e44", marginBottom: "20px" }}>Pet Food Calculator</h1>

          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            <div>
              <label>Species:</label>
              <select value={species} onChange={e => { setSpecies(e.target.value); setBreed(null); setSearch(""); }} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
              </select>
            </div>

            <div style={{ position: "relative" }}>
              <label>Breed:</label>
              <input type="text" placeholder="Search breed..." value={search} onChange={e => { setSearch(e.target.value); setBreed(null); }} style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }} />
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

          {result && (
            <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#f0fdf4", borderRadius: "12px", boxShadow: "0 5px 15px rgba(0,0,0,0.05)" }}>
              <h3 style={{ marginTop: 0, color: "#2b6e44" }}>Results</h3>
              <p><b>Life Stage:</b> {result.stage}</p>
              <p><b>Daily Calories:</b> {result.dailyCalories} kcal</p>
              <p><b>Daily Food:</b> {toLbsOz(result.dailyFood)}</p>
              <p><b>Per Meal:</b> {toLbsOz(result.perMeal)}</p>
              <p><b>Total Needed:</b> {toLbsOz(result.totalNeeded)}</p>
              {species === "cat" && <p><b>Calories per 2 oz:</b> {result.catPer2Oz} kcal</p>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
