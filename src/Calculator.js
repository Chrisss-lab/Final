import React, { useState, useEffect } from "react";
import logo from "./photo-jersey-raw-logo.jpg";
import BackgroundImage from "./Photos/Food 5.jpg"; // updated background

// Dog feeding percentages (with average weights included)
const dogFeedingPercent = {
  "Red Labrador Retriever (65–75 lbs)": 2.5,
  "Labrador Retriever (65–75 lbs)": 2.5,
  "German Shepherd (65–90 lbs)": 2.3,
  "Golden Retriever (65–75 lbs)": 2.4,
  "French Bulldog (28–32 lbs)": 2.7,
  "English Bulldog (50–55 lbs)": 2.8,
  "Beagle (20–25 lbs)": 3,
  "Poodle (Standard) (50–70 lbs)": 2.6,
  "Poodle (Miniature) (15–17 lbs)": 2.8,
  "Poodle (Toy) (6–9 lbs)": 3,
  "Rottweiler (85–135 lbs)": 2.2,
  "Yorkshire Terrier (4–7 lbs)": 3.5,
  "Boxer (65–80 lbs)": 2.5,
  "Dachshund (16–32 lbs)": 3.2,
  "Siberian Husky (35–60 lbs)": 2.5,
  "Doberman Pinscher (60–100 lbs)": 2.4,
  "Great Dane (110–175 lbs)": 2,
  "Cavalier King Charles Spaniel (13–18 lbs)": 3.2,
  "Miniature Schnauzer (11–20 lbs)": 3,
  "Shih Tzu (9–16 lbs)": 3.2,
  "Boston Terrier (12–25 lbs)": 3,
  "Pomeranian (3–7 lbs)": 3.5,
  "Havanese (7–13 lbs)": 3.2,
  "Pitbull (35–60 lbs)": 2.7,
  "Chihuahua (3–6 lbs)": 3.5,
  "Maltese (4–7 lbs)": 3.2,
  "Border Collie (30–45 lbs)": 2.5,
  "Australian Shepherd (40–65 lbs)": 2.4,
  "Bichon Frise (12–18 lbs)": 3,
  "Bull Terrier (50–70 lbs)": 2.6,
  "English Springer Spaniel (45–55 lbs)": 2.5,
  "Cocker Spaniel (20–30 lbs)": 2.7,
  "Weimaraner (55–90 lbs)": 2.3,
  "Newfoundland (100–150 lbs)": 2,
  "Saint Bernard (120–180 lbs)": 2,
  "Bernese Mountain Dog (70–115 lbs)": 2.2,
  "Alaskan Malamute (75–100 lbs)": 2.4,
  "Akita (70–130 lbs)": 2.3,
  "Belgian Malinois (60–80 lbs)": 2.5,
  "Collie (50–75 lbs)": 2.6,
  "Vizsla (45–65 lbs)": 2.4,
  "Whippet (25–40 lbs)": 2.8,
  "Italian Greyhound (7–14 lbs)": 3.2,
  "Miniature Pinscher (8–12 lbs)": 3.2,
  "Norwegian Elkhound (48–55 lbs)": 2.6,
  "Old English Sheepdog (60–100 lbs)": 2.4,
  "Shiba Inu (17–23 lbs)": 2.5,
  "Chinese Shar-Pei (45–60 lbs)": 2.5,
  "Keeshond (35–45 lbs)": 2.7,
  "Rhodesian Ridgeback (70–85 lbs)": 2.3,
  "Basset Hound (40–65 lbs)": 2.7,
  "Irish Setter (60–70 lbs)": 2.4,
  "Scottish Terrier (18–22 lbs)": 3,
  "West Highland White Terrier (15–20 lbs)": 3,
  "Cairn Terrier (13–18 lbs)": 3,
  "Airedale Terrier (50–70 lbs)": 2.8,
  "Pointer (45–75 lbs)": 2.5,
  "Greyhound (60–70 lbs)": 2.4,
  "Saluki (40–60 lbs)": 2.5,
  "Samoyed (50–65 lbs)": 2.4,
  "Lhasa Apso (12–18 lbs)": 3,
  "Papillon (5–10 lbs)": 3.2,
  "Jack Russell Terrier (13–17 lbs)": 3.2,
  "American Staffordshire Terrier (40–70 lbs)": 2.7,
  "Australian Cattle Dog (35–50 lbs)": 2.5,
  "English Mastiff (120–230 lbs)": 2,
  "Irish Wolfhound (105–180 lbs)": 2,
  "Finnish Lapphund (33–53 lbs)": 2.5,
  "Japanese Chin (6–9 lbs)": 3.2,
  "Japanese Spitz (12–20 lbs)": 3,
  "Tibetan Spaniel (9–15 lbs)": 3,
  "Tibetan Terrier (18–30 lbs)": 3,
  "Toy Fox Terrier (3–7 lbs)": 3.2,
  "Wire Fox Terrier (15–18 lbs)": 3,
  "Dandie Dinmont Terrier (18–24 lbs)": 3,
  "Bedlington Terrier (17–23 lbs)": 3,
  "American Eskimo Dog (10–35 lbs)": 3,
  "Canaan Dog (35–55 lbs)": 2.5,
  "Belgian Tervuren (55–75 lbs)": 2.5,
  "Belgian Sheepdog (60–75 lbs)": 2.5,
  "Belgian Laekenois (60–75 lbs)": 2.5,
  "Chow Chow (45–70 lbs)": 2.3,
  "Afghan Hound (50–60 lbs)": 2.4,
  "Borzoi (60–105 lbs)": 2.4,
  "Komondor (80–100 lbs)": 2.2,
  "Kuvasz (70–115 lbs)": 2.3,
  "Irish Terrier (25–27 lbs)": 2.6,
  "Glen of Imaal Terrier (32–40 lbs)": 3,
  "Soft Coated Wheaten Terrier (30–40 lbs)": 2.9,
  "Spinone Italiano (55–70 lbs)": 2.5,
  "Chow Chow (55–70 lbs)": 2.3,
  "Red Labrador Retriever (65–75 lbs)": 2.5
};

// Cat feeding percentages (expanded)
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
  "Devon Rex": 3.5,
  "Turkish Van": 3,
  "Turkish Angora": 3,
  "Balinese": 3,
  "Somali": 3.2,
  "Burmese": 3,
  "Tonkinese": 3,
  "Egyptian Mau": 3,
  "Chartreux": 2.9,
  "Manx": 3,
  "Selkirk Rex": 3,
  "Snowshoe": 3,
  "Savannah": 2.8,
  "Ocicat": 3,
  "Singapura": 3.2,
  "LaPerm": 3,
  "Burmilla": 3,
  "Korat": 3,
  "American Shorthair": 3,
  "American Wirehair": 3,
  "American Curl": 3,
  "Japanese Bobtail": 3,
  "Munchkin": 3,
  "Pixie-bob": 3,
  "Chausie": 3,
  "Cymric": 3,
  "Ragamuffin": 3,
  "Havana Brown": 3,
  "Oriental Longhair": 3,
  "Australian Mist": 3,
  "Brazilian Shorthair": 3,
  "Highlander": 3,
  "California Spangled": 3,
  "British Longhair": 2.9,
  "Arabian Mau": 3,
  "Thai": 3,
  "Ukrainian Levkoy": 3,
  "Lykoi": 3.2,
  "Minuet": 3,
  "Kurilian Bobtail": 3,
  "American Bobtail": 3,
  "Oriental Shorthair": 3,
  "Peterbald": 3,
  "Siberian": 3,
  "Toyger": 3,
  "York Chocolate": 3,
  "Ragdoll (Colorpoint)": 2.8,
  "Ragdoll (Mitted)": 2.8,
  "Bengal (Marble)": 3,
  "Bengal (Spotted)": 3,
  "Savannah (F1)": 2.8,
  "Savannah (F2)": 2.9,
  "Savannah (F3)": 3,
  "Oriental Shorthair (Solid)": 3,
  "Oriental Shorthair (Bicolor)": 3,
  "Sphynx (Hairless)": 3.5,
  "Sphynx (Peach Fuzz)": 3.4,
  "Abyssinian (Ticked)": 3,
  "Abyssinian (Solid)": 3,
  "Maine Coon (Classic Tabby)": 2.5,
  "Maine Coon (Brown)": 2.5,
  "Maine Coon (Silver)": 2.5,
  "Scottish Fold (Folded)": 3,
  "Scottish Fold (Straight)": 3,
  "Persian (Himalayan)": 2.9,
  "Persian (Chinchilla)": 2.9,
  "Persian (Exotic Shorthair)": 2.9
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
