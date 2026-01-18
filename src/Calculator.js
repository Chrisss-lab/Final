import React, { useState, useEffect } from "react";
import logo from "./photo-jersey-raw-logo.jpg";
import BackgroundImage from "./Photos/Food2.jpg";
import { useNavigate } from "react-router-dom";

// Dog Feeding Percentages - 150+ Breeds
const dogFeedingPercent = {
 "Labrador Retriever": 2.5, "Lab": 2.5, "Lab Mix": 2.6, "German Shepherd": 2.3, "GSD": 2.3, "German Shepherd Mix": 2.4, "Golden Retriever": 2.4, "French Bulldog": 2.2, "American Bulldog": 2.8, "Bulldog": 2.8, "Beagle": 3.0, "Poodle": 2.6, "Standard Poodle": 2.5, "Miniature Poodle": 2.8, "Rottweiler": 2.7, "Yorkshire Terrier": 3.2, "Dachshund": 3.1, "Boxer": 2.9, "Shih Tzu": 3.3, "Pomeranian": 3.5, "Chihuahua": 3.6, "Siberian Husky": 2.4, "Doberman Pinscher": 2.6, "Great Dane": 2.0, "Australian Shepherd": 2.5, "Mini Aussie": 2.7, "Cavalier King Charles Spaniel": 3.1, "Miniature Schnauzer": 3.2, "Pug": 3.4, "Border Collie": 2.7, "Maltese": 3.7, "Chow Chow": 2.9, "Shiba Inu": 3.0, "Boston Terrier": 3.2, "Havanese": 3.3, "Bichon Frise": 3.4, "Papillon": 3.5, "Shetland Sheepdog": 2.8, "Bernese Mountain Dog": 2.1, "English Bulldog": 2.8, "Alaskan Malamute": 2.2, "Saint Bernard": 2.0, "Cocker Spaniel": 3.0, "American Cocker Spaniel": 3.0, "English Cocker Spaniel": 2.9, "Collie": 2.6, "Australian Cattle Dog": 2.5, "Blue Heeler": 2.5, "Weimaraner": 2.3, "Newfoundland": 2.1, "Akita": 2.2, "Mastiff": 2.0, "Bullmastiff": 2.0, "Irish Wolfhound": 1.9, "Great Pyrenees": 2.1, "Samoyed": 2.4, "Basset Hound": 3.0, "Bloodhound": 2.8, "Whippet": 3.2, "Greyhound": 3.3, "Italian Greyhound": 3.4, "Scottish Terrier": 3.4, "West Highland White Terrier": 3.5, "Airedale Terrier": 2.7, "Bull Terrier": 2.8, "Mini Bull Terrier": 2.9, "Cairn Terrier": 3.1, "Jack Russell Terrier": 3.2, "Parson Russell Terrier": 3.2, "Lhasa Apso": 3.3, "Norfolk Terrier": 3.4, "Norwich Terrier": 3.4, "Rat Terrier": 3.1, "Sealyham Terrier": 3.0, "Skye Terrier": 3.0, "Soft Coated Wheaten Terrier": 3.2, "Tibetan Terrier": 3.3, "Welsh Terrier": 3.1, "Australian Kelpie": 2.5, "Irish Setter": 2.6, "English Setter": 2.6, "Nova Scotia Duck Tolling Retriever": 2.7, "Chinese Shar-Pei": 2.8, "Finnish Lapphund": 2.5, "Finnish Spitz": 2.5, "Keeshond": 2.9, "Norwegian Elkhound": 2.8, "Pit Bull": 2.8, "Pitbull": 2.8, "American Pit Bull Terrier": 2.8, "Staffordshire Bull Terrier": 2.9, "American Staffordshire Terrier": 2.8, "Cane Corso": 2.3, "Presas Canario": 2.3, "Boxer Mix": 2.9, "Shepherd Mix": 2.5, "Lab Shepherd Mix": 2.5, "Beagle Mix": 3.0, "Husky Mix": 2.4, "Maltipoo": 3.4, "Goldendoodle": 2.6, "Labradoodle": 2.6, "Cockapoo": 3.1, "Yorkipoo": 3.4, "Cavapoo": 3.3, "Aussiedoodle": 2.7, "Bernedoodle": 2.5, "Pomsky": 3.0, "Shorkie": 3.5, "Chiweenie": 3.5, "Puggle": 3.2, "Pit Mix": 2.8, "Terrier Mix": 3.0, "Hound Mix": 2.8, "Retriever Mix": 2.6, "Doodle Mix": 2.6, "Small Mixed Breed": 3.4, "Medium Mixed Breed": 2.8, "Large Mixed Breed": 2.4, "American Eskimo Dog": 3.0, "Belgian Malinois": 2.3, "Basenji": 3.1, "Borzoi": 2.5, "Brussels Griffon": 3.4, "Coton de Tulear": 3.5, "German Shorthaired Pointer": 2.4, "Vizsla": 2.5, "Pointer": 2.4, "Rhodesian Ridgeback": 2.3, "Saluki": 2.6, "Toy Fox Terrier": 3.5, "Mini Pinscher": 3.3, "Manchester Terrier": 3.2, "American Foxhound": 2.8, "Treeing Walker Coonhound": 2.7, "Plott Hound": 2.7, "Redbone Coonhound": 2.8, "Black and Tan Coonhound": 2.8, "Harrier": 2.9, "Otterhound": 2.6, "Pointer Mix": 2.5, "Cane Corso Mix": 2.4, "American Bully": 2.8, "Pocket Bully": 2.9, "XL Bully": 2.6, "Dogo Argentino": 2.3, "Neapolitan Mastiff": 2.1, "Anatolian Shepherd": 2.2, "Pyrenean Mastiff": 2.0, "Kuvasz": 2.1, "Leonberger": 2.1, "Tosa Inu": 2.2, "Old English Sheepdog": 2.5, "Bearded Collie": 2.6, "Polish Lowland Sheepdog": 2.7, "Bouvier des Flandres": 2.4, "Komondor": 2.3, "Puli": 2.5, "English Springer Spaniel": 2.8, "Welsh Springer Spaniel": 2.9, "Field Spaniel": 2.8, "Sussex Spaniel": 2.8, "Clumber Spaniel": 2.6, "Boykin Spaniel": 2.8, "Spinone Italiano": 2.4, "Lagotto Romagnolo": 2.7, "Barbet": 2.6, "Irish Water Spaniel": 2.5, "Glen of Imaal Terrier": 3.1, "Bedlington Terrier": 3.0, "Dandie Dinmont Terrier": 3.1, "Fox Terrier": 3.1, "Wire Fox Terrier": 3.1, "Smooth Fox Terrier": 3.1, "Tibetan Spaniel": 3.4, "Tibetan Mastiff": 2.2, "Norwegian Buhund": 2.8, "Icelandic Sheepdog": 2.9, "Swedish Vallhund": 2.8, "Canaan Dog": 2.7, "Pharaoh Hound": 2.9, "Ibizan Hound": 2.9, "Basque Shepherd": 2.5, "Bergamasco Sheepdog": 2.4, "Mini Goldendoodle": 2.8, "Mini Labradoodle": 2.8, "Micro Bully": 2.9, "Corgi": 3.0, "Pembroke Welsh Corgi": 3.0, "Cardigan Welsh Corgi": 3.0, "Sheepadoodle": 2.6, "Morkie": 3.5, "Havapoo": 3.4, "Mini Bernedoodle": 2.7, "Cavachon": 3.3, "Shihpoo": 3.4, "Dachshund Mix": 3.1, "Terrier Mix": 3.0, "Mutt": 2.8
};

// Cat Feeding Percentages
const catFeedingPercent = {
  "Siamese": 3.0, "Persian": 3.0, "Maine Coon": 2.5, "Ragdoll": 2.7, "Bengal": 3.0,
  "Sphynx": 3.2, "Russian Blue": 2.8, "British Shorthair": 2.6, "Abyssinian": 3.1, "Birman": 2.7
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
  { name: ""},
];

// Multipliers
const activityMultipliers = { low: 0.9, moderate: 1, high: 1.4, "very high": 1.7 };
const goalMultipliers = { lose_weight: 0.75, maintain: 1, gain_some: 1.3 };

// Helpers
const getLifeStage = (ageMonths, species) => {
  const ageYears = ageMonths / 12;
  if (species === "cat") return ageYears < 1 ? "kitten" : ageYears > 11 ? "senior" : "adult";
  if (ageYears < 1.5) return "puppy";
  if (ageYears > 10) return "senior";
  return "adult";
};
const toLbsOz = (lbs) => {
  const totalOz = lbs * 16;
  const wholeLb = Math.floor(totalOz / 16);
  const oz = (totalOz % 16).toFixed(1);
  return `${wholeLb} lb${wholeLb !== 1 ? "s" : ""} ${oz} oz`;
};
const roundUpToNextLb = (lbs) => Math.ceil(lbs);

export default function Calculator() {
  const navigate = useNavigate();
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
      const dailyCalories = (Number(weight) * percent * 10)
        * (activityMultipliers[activity] || 1)
        * (goalMultipliers[goal] || 1);
      const dailyFoodLbs = dailyCalories / caloriesPerLb;
      const perMeal = dailyFoodLbs / meals;
      const totalNeeded = dailyFoodLbs * daysUntilNextOrder;

      setResult({
        stage,
        dailyFood: dailyFoodLbs,
        perMeal,
        totalNeeded,
        totalNeededRounded: roundUpToNextLb(totalNeeded),
        dailyCalories: dailyCalories.toFixed(0),
        caloriesPerLb,
      });
    } else setResult(null);
  }, [breed, weight, activity, goal, ageYears, ageMonths, meals, daysUntilNextOrder, species, selectedMix]);

  return (
    <section
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
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

      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "480px" }}>
        <div
          style={{
            backgroundColor: "rgba(255,255,255,0.82)",
            padding: "20px",
            borderRadius: "16px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            backdropFilter: "blur(6px)",
          }}
        >
          <img
            src={logo}
            alt="Jersey Raw Logo"
            style={{
              width: "140px",
              height: "140px",
              objectFit: "cover",
              borderRadius: "50%",
              display: "block",
              margin: "0 auto 25px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
              border: "3px solid rgba(255,255,255,0.6)",
              backgroundColor: "rgba(255,255,255,0.3)",
            }}
          />

          <h1 style={{ textAlign: "center", color: "#2b6e44", marginBottom: "20px" }}>
            Pet Food Calculator
          </h1>

          {/* Inputs */}
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
              <input type="text" placeholder="Search breed..." value={search}
                onChange={e => { setSearch(e.target.value); setBreed(null); }}
                style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }} />
              {search && !breed && filteredBreeds.length > 0 && (
                <ul style={{
                  position: "absolute", top: "100%", left: 0, right: 0, maxHeight: "140px",
                  overflowY: "auto", backgroundColor: "#fff", border: "1px solid #ccc",
                  borderRadius: "8px", margin: 0, padding: 0, listStyle: "none", zIndex: 10
                }}>
                  {filteredBreeds.map(b => (
                    <li key={b.name} onClick={() => { setBreed(b); setSearch(b.name); }}
                      style={{ padding: "10px", cursor: "pointer", borderBottom: "1px solid #eee" }}>{b.name}</li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <label>Weight (lbs):</label>
              <input type="number" value={weight} onChange={e => setWeight(e.target.value)}
                style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }} />
            </div>

            <div style={{ display: "flex", gap: "10px" }}>
              <div style={{ flex: 1 }}>
                <label>Age (Years):</label>
                <input type="number" value={ageYears} onChange={e => setAgeYears(e.target.value)}
                  style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }} />
              </div>
              <div style={{ flex: 1 }}>
                <label>Age (Months):</label>
                <input type="number" value={ageMonths} onChange={e => setAgeMonths(e.target.value)}
                  style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }} />
              </div>
            </div>

            <div>
              <label>Activity Level:</label>
              <select value={activity} onChange={e => setActivity(e.target.value)}
                style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}>
                {Object.keys(activityMultipliers).map(a => <option key={a} value={a}>{a}</option>)}
              </select>
            </div>

            <div>
              <label>Goal:</label>
              <select value={goal} onChange={e => setGoal(e.target.value)}
                style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}>
                {Object.keys(goalMultipliers).map(g => <option key={g} value={g}>{g.replace(/_/g, " ")}</option>)}
              </select>
            </div>

            <div>
              <label>Meals per day:</label>
              <input type="number" value={meals} onChange={e => setMeals(e.target.value)}
                style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }} />
            </div>

            <div>
              <label>Days until next order:</label>
              <input type="number" value={daysUntilNextOrder} onChange={e => setDaysUntilNextOrder(e.target.value)}
                style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }} />
            </div>

            <div>
              <label>Recipe:</label>
              <select value={selectedMix} onChange={e => setSelectedMix(e.target.value)}
                style={{ width: "100%", padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}>
                <option value="">--Choose--</option>
                {recipes.map(r => <option key={r.name} value={r.name}>{r.name} ({r.caloriesPerLb} cal/lb)</option>)}
              </select>
            </div>
          </div>

          {/* Results Section */}
          {result && (
            <div
              style={{
                marginTop: "20px",
                padding: "15px",
                backgroundColor: "#f0fdf4",
                borderRadius: "12px",
                boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
              }}
            >
              <h3 style={{ marginTop: 0, color: "#2b6e44" }}>Results</h3>
              <p><b>Life Stage:</b> {result.stage}</p>
              <p><b>Daily Calories:</b> {result.dailyCalories} kcal</p>
              <p><b>Daily Food:</b> {toLbsOz(result.dailyFood)}</p>
              <p><b>Per Meal:</b> {toLbsOz(result.perMeal)}</p>
              <p><b>Total Needed:</b> {toLbsOz(result.totalNeeded)} (rounded up → {result.totalNeededRounded} lb)</p>

              <button
                onClick={() => {
                  navigate(`/order?recipe=${encodeURIComponent(selectedMix)}&amount=${result.totalNeededRounded}`);
                }}
                style={{
                  marginTop: "15px",
                  width: "100%",
                  padding: "12px",
                  backgroundColor: "#2b6e44",
                  color: "#fff",
                  fontWeight: "bold",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                }}
              >
                Order Now
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
