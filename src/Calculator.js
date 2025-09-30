
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./photo-jersey-raw-logo.jpg";

// Dog breeds (100+)
const dogBreeds = [
  { name: "Labrador Retriever", nickname: "Lab", lifeSpanYears: 12, avgWeightLbs: 65, basePercent: 0.02 },
  { name: "German Shepherd", nickname: "GSD", lifeSpanYears: 11, avgWeightLbs: 75, basePercent: 0.02 },
  { name: "Golden Retriever", nickname: "Golden", lifeSpanYears: 12, avgWeightLbs: 65, basePercent: 0.02 },
  { name: "French Bulldog", nickname: "Frenchie", lifeSpanYears: 12, avgWeightLbs: 24, basePercent: 0.03 },
  { name: "Bulldog", nickname: "English Bulldog", lifeSpanYears: 10, avgWeightLbs: 50, basePercent: 0.025 },
  { name: "Beagle", nickname: "", lifeSpanYears: 13, avgWeightLbs: 22, basePercent: 0.03 },
  { name: "Poodle (Standard)", nickname: "Poodle", lifeSpanYears: 12, avgWeightLbs: 60, basePercent: 0.02 },
  { name: "Rottweiler", nickname: "", lifeSpanYears: 9, avgWeightLbs: 90, basePercent: 0.02 },
  { name: "Yorkshire Terrier", nickname: "Yorkie", lifeSpanYears: 14, avgWeightLbs: 7, basePercent: 0.03 },
  { name: "Boxer", nickname: "", lifeSpanYears: 10, avgWeightLbs: 70, basePercent: 0.02 },
  { name: "Dachshund", nickname: "", lifeSpanYears: 14, avgWeightLbs: 16, basePercent: 0.03 },
  { name: "Siberian Husky", nickname: "", lifeSpanYears: 12, avgWeightLbs: 55, basePercent: 0.02 },
  { name: "Doberman Pinscher", nickname: "Doberman", lifeSpanYears: 10, avgWeightLbs: 80, basePercent: 0.02 },
  { name: "Great Dane", nickname: "", lifeSpanYears: 8, avgWeightLbs: 150, basePercent: 0.02 },
  { name: "Cavalier King Charles Spaniel", nickname: "Cavalier", lifeSpanYears: 12, avgWeightLbs: 18, basePercent: 0.03 },
  { name: "Miniature Schnauzer", nickname: "Mini Schnauzer", lifeSpanYears: 14, avgWeightLbs: 15, basePercent: 0.03 },
  { name: "Shih Tzu", nickname: "", lifeSpanYears: 13, avgWeightLbs: 12, basePercent: 0.03 },
  { name: "Boston Terrier", nickname: "", lifeSpanYears: 13, avgWeightLbs: 25, basePercent: 0.03 },
  { name: "Pomeranian", nickname: "", lifeSpanYears: 14, avgWeightLbs: 7, basePercent: 0.03 },
  { name: "Havanese", nickname: "", lifeSpanYears: 14, avgWeightLbs: 13, basePercent: 0.03 },
  { name: "Shetland Sheepdog", nickname: "Sheltie", lifeSpanYears: 12, avgWeightLbs: 25, basePercent: 0.03 },
  { name: "Maltese", nickname: "", lifeSpanYears: 15, avgWeightLbs: 7, basePercent: 0.03 },
  { name: "Bichon Frise", nickname: "", lifeSpanYears: 14, avgWeightLbs: 12, basePercent: 0.03 },
  { name: "Chihuahua", nickname: "", lifeSpanYears: 16, avgWeightLbs: 6, basePercent: 0.03 },
  { name: "Papillon", nickname: "", lifeSpanYears: 14, avgWeightLbs: 9, basePercent: 0.03 },
  { name: "Australian Shepherd", nickname: "Aussie", lifeSpanYears: 13, avgWeightLbs: 55, basePercent: 0.02 },
  { name: "Border Collie", nickname: "", lifeSpanYears: 13, avgWeightLbs: 45, basePercent: 0.02 },
  { name: "Weimaraner", nickname: "", lifeSpanYears: 11, avgWeightLbs: 70, basePercent: 0.02 },
  { name: "Newfoundland", nickname: "", lifeSpanYears: 10, avgWeightLbs: 130, basePercent: 0.02 },
  { name: "Cocker Spaniel", nickname: "", lifeSpanYears: 12, avgWeightLbs: 28, basePercent: 0.03 },
  { name: "Vizsla", nickname: "", lifeSpanYears: 12, avgWeightLbs: 55, basePercent: 0.02 },
  { name: "Rhodesian Ridgeback", nickname: "", lifeSpanYears: 11, avgWeightLbs: 75, basePercent: 0.02 },
  { name: "West Highland White Terrier", nickname: "Westie", lifeSpanYears: 13, avgWeightLbs: 15, basePercent: 0.03 },
  { name: "Basset Hound", nickname: "", lifeSpanYears: 12, avgWeightLbs: 45, basePercent: 0.025 },
  { name: "Akita", nickname: "", lifeSpanYears: 10, avgWeightLbs: 100, basePercent: 0.02 },
  { name: "Alaskan Malamute", nickname: "Malamute", lifeSpanYears: 11, avgWeightLbs: 85, basePercent: 0.02 },
  { name: "Belgian Malinois", nickname: "", lifeSpanYears: 12, avgWeightLbs: 60, basePercent: 0.02 },
  { name: "Chow Chow", nickname: "", lifeSpanYears: 10, avgWeightLbs: 55, basePercent: 0.02 },
  { name: "Staffordshire Bull Terrier", nickname: "Staffy", lifeSpanYears: 12, avgWeightLbs: 50, basePercent: 0.025 },
  { name: "Samoyed", nickname: "", lifeSpanYears: 12, avgWeightLbs: 60, basePercent: 0.02 },
  { name: "American Eskimo Dog", nickname: "Eskimo", lifeSpanYears: 13, avgWeightLbs: 25, basePercent: 0.03 },
  { name: "Cane Corso", nickname: "", lifeSpanYears: 10, avgWeightLbs: 95, basePercent: 0.02 },
  { name: "Shar Pei", nickname: "", lifeSpanYears: 10, avgWeightLbs: 55, basePercent: 0.02 },
  { name: "Bull Terrier", nickname: "", lifeSpanYears: 10, avgWeightLbs: 60, basePercent: 0.025 },
  { name: "Italian Greyhound", nickname: "Iggy", lifeSpanYears: 15, avgWeightLbs: 10, basePercent: 0.03 },
  { name: "Japanese Chin", nickname: "", lifeSpanYears: 14, avgWeightLbs: 8, basePercent: 0.03 },
  { name: "Miniature Pinscher", nickname: "Min Pin", lifeSpanYears: 14, avgWeightLbs: 9, basePercent: 0.03 },
  { name: "Pointer", nickname: "English Pointer", lifeSpanYears: 12, avgWeightLbs: 60, basePercent: 0.02 },
  { name: "Irish Setter", nickname: "", lifeSpanYears: 12, avgWeightLbs: 70, basePercent: 0.02 },
  { name: "Irish Wolfhound", nickname: "", lifeSpanYears: 8, avgWeightLbs: 140, basePercent: 0.02 },
  { name: "Scottish Terrier", nickname: "Scottie", lifeSpanYears: 13, avgWeightLbs: 22, basePercent: 0.03 },
  { name: "Toy Fox Terrier", nickname: "TFT", lifeSpanYears: 14, avgWeightLbs: 7, basePercent: 0.03 },
  { name: "Brussels Griffon", nickname: "", lifeSpanYears: 13, avgWeightLbs: 12, basePercent: 0.03 },
  { name: "Borzoi", nickname: "", lifeSpanYears: 10, avgWeightLbs: 85, basePercent: 0.02 },
  { name: "Bedlington Terrier", nickname: "", lifeSpanYears: 14, avgWeightLbs: 17, basePercent: 0.03 },
  { name: "Norwegian Elkhound", nickname: "", lifeSpanYears: 12, avgWeightLbs: 55, basePercent: 0.02 },
  { name: "Keeshond", nickname: "", lifeSpanYears: 13, avgWeightLbs: 45, basePercent: 0.02 },
  { name: "Old English Sheepdog", nickname: "", lifeSpanYears: 10, avgWeightLbs: 70, basePercent: 0.02 },
  { name: "Saluki", nickname: "", lifeSpanYears: 12, avgWeightLbs: 50, basePercent: 0.02 },
  { name: "Soft Coated Wheaten Terrier", nickname: "Wheaten", lifeSpanYears: 13, avgWeightLbs: 35, basePercent: 0.025 },
  { name: "American Water Spaniel", nickname: "", lifeSpanYears: 12, avgWeightLbs: 35, basePercent: 0.025 },
  { name: "Australian Terrier", nickname: "", lifeSpanYears: 13, avgWeightLbs: 14, basePercent: 0.03 },
  { name: "Irish Terrier", nickname: "", lifeSpanYears: 12, avgWeightLbs: 27, basePercent: 0.03 },
  { name: "Chinese Crested", nickname: "", lifeSpanYears: 14, avgWeightLbs: 10, basePercent: 0.03 },
  { name: "Wire Fox Terrier", nickname: "", lifeSpanYears: 13, avgWeightLbs: 18, basePercent: 0.03 },
  { name: "Sealyham Terrier", nickname: "", lifeSpanYears: 13, avgWeightLbs: 17, basePercent: 0.03 },
  { name: "Gordon Setter", nickname: "", lifeSpanYears: 12, avgWeightLbs: 70, basePercent: 0.02 },
  { name: "Tibetan Spaniel", nickname: "", lifeSpanYears: 13, avgWeightLbs: 12, basePercent: 0.03 },
  { name: "Tibetan Terrier", nickname: "", lifeSpanYears: 14, avgWeightLbs: 18, basePercent: 0.03 },
  { name: "Norwich Terrier", nickname: "", lifeSpanYears: 14, avgWeightLbs: 12, basePercent: 0.03 },
  { name: "Glen of Imaal Terrier", nickname: "", lifeSpanYears: 12, avgWeightLbs: 33, basePercent: 0.025 },
  { name: "Finnish Spitz", nickname: "", lifeSpanYears: 13, avgWeightLbs: 30, basePercent: 0.025 },
  { name: "Swedish Vallhund", nickname: "", lifeSpanYears: 12, avgWeightLbs: 24, basePercent: 0.03 },
  { name: "Spinone Italiano", nickname: "", lifeSpanYears: 12, avgWeightLbs: 75, basePercent: 0.02 },
  { name: "Clumber Spaniel", nickname: "", lifeSpanYears: 12, avgWeightLbs: 75, basePercent: 0.02 },
  { name: "Lagotto Romagnolo", nickname: "", lifeSpanYears: 15, avgWeightLbs: 30, basePercent: 0.025 },
  { name: "Norwegian Lundehund", nickname: "", lifeSpanYears: 13, avgWeightLbs: 20, basePercent: 0.03 },
  { name: "Bolognese", nickname: "", lifeSpanYears: 14, avgWeightLbs: 8, basePercent: 0.03 },
  { name: "Swedish Lapphund", nickname: "", lifeSpanYears: 13, avgWeightLbs: 40, basePercent: 0.025 },
  { name: "Icelandic Sheepdog", nickname: "", lifeSpanYears: 12, avgWeightLbs: 30, basePercent: 0.025 },
  { name: "Japanese Spitz", nickname: "", lifeSpanYears: 13, avgWeightLbs: 22, basePercent: 0.03 },
  { name: "Dandie Dinmont Terrier", nickname: "", lifeSpanYears: 12, avgWeightLbs: 18, basePercent: 0.03 },
  { name: "Australian Cattle Dog", nickname: "Blue Heeler", lifeSpanYears: 13, avgWeightLbs: 50, basePercent: 0.02 },
  { name: "Belgian Sheepdog", nickname: "", lifeSpanYears: 12, avgWeightLbs: 65, basePercent: 0.02 },
  { name: "Belgian Tervuren", nickname: "", lifeSpanYears: 12, avgWeightLbs: 65, basePercent: 0.02 },
  { name: "Briard", nickname: "", lifeSpanYears: 12, avgWeightLbs: 85, basePercent: 0.02 },
  { name: "Dutch Shepherd", nickname: "", lifeSpanYears: 12, avgWeightLbs: 70, basePercent: 0.02 },
  { name: "Entlebucher Mountain Dog", nickname: "", lifeSpanYears: 12, avgWeightLbs: 50, basePercent: 0.02 },
  { name: "Finnish Lapphund", nickname: "", lifeSpanYears: 12, avgWeightLbs: 45, basePercent: 0.02 },
  { name: "Lagotto Romagnolo", nickname: "", lifeSpanYears: 15, avgWeightLbs: 30, basePercent: 0.025 },
  { name: "Leonberger", nickname: "", lifeSpanYears: 9, avgWeightLbs: 125, basePercent: 0.02 },
  { name: "Manchester Terrier", nickname: "", lifeSpanYears: 14, avgWeightLbs: 12, basePercent: 0.03 },
  { name: "Neapolitan Mastiff", nickname: "", lifeSpanYears: 10, avgWeightLbs: 130, basePercent: 0.02 },
  { name: "Petit Basset Griffon Vendeen", nickname: "PBGV", lifeSpanYears: 13, avgWeightLbs: 25, basePercent: 0.03 },
  { name: "Pharaoh Hound", nickname: "", lifeSpanYears: 12, avgWeightLbs: 55, basePercent: 0.02 },
  { name: "Plott Hound", nickname: "", lifeSpanYears: 12, avgWeightLbs: 60, basePercent: 0.02 },
  { name: "Polish Lowland Sheepdog", nickname: "", lifeSpanYears: 12, avgWeightLbs: 35, basePercent: 0.025 },
  { name: "Portuguese Water Dog", nickname: "", lifeSpanYears: 12, avgWeightLbs: 50, basePercent: 0.02 },
  { name: "Puli", nickname: "", lifeSpanYears: 14, avgWeightLbs: 35, basePercent: 0.025 },
  { name: "Pumi", nickname: "", lifeSpanYears: 14, avgWeightLbs: 30, basePercent: 0.025 },
  { name: "Pyrenean Shepherd", nickname: "", lifeSpanYears: 12, avgWeightLbs: 30, basePercent: 0.025 },
  { name: "Redbone Coonhound", nickname: "", lifeSpanYears: 12, avgWeightLbs: 65, basePercent: 0.02 },
  { name: "Russian Toy", nickname: "", lifeSpanYears: 14, avgWeightLbs: 6, basePercent: 0.03 },
  { name: "Schipperke", nickname: "", lifeSpanYears: 13, avgWeightLbs: 16, basePercent: 0.03 },
  { name: "Scottish Deerhound", nickname: "", lifeSpanYears: 9, avgWeightLbs: 115, basePercent: 0.02 },
  { name: "Sloughi", nickname: "", lifeSpanYears: 12, avgWeightLbs: 60, basePercent: 0.02 },
  { name: "Small Munsterlander", nickname: "", lifeSpanYears: 12, avgWeightLbs: 55, basePercent: 0.02 },
  { name: "Spanish Water Dog", nickname: "", lifeSpanYears: 12, avgWeightLbs: 50, basePercent: 0.02 },
  { name: "Spinone Italiano", nickname: "", lifeSpanYears: 12, avgWeightLbs: 75, basePercent: 0.02 },
  { name: "Stabyhoun", nickname: "", lifeSpanYears: 12, avgWeightLbs: 50, basePercent: 0.02 },
  { name: "Swedish Vallhund", nickname: "", lifeSpanYears: 12, avgWeightLbs: 24, basePercent: 0.03 },
  { name: "Tibetan Mastiff", nickname: "", lifeSpanYears: 10, avgWeightLbs: 110, basePercent: 0.02 },
  { name: "Volpino Italiano", nickname: "", lifeSpanYears: 14, avgWeightLbs: 12, basePercent: 0.03 },
  { name: "Welsh Springer Spaniel", nickname: "", lifeSpanYears: 12, avgWeightLbs: 50, basePercent: 0.02 },
  { name: "Welsh Corgi (Pembroke)", nickname: "Pembroke", lifeSpanYears: 13, avgWeightLbs: 30, basePercent: 0.025 },
  { name: "Welsh Corgi (Cardigan)", nickname: "Cardigan", lifeSpanYears: 13, avgWeightLbs: 32, basePercent: 0.025 }
];

// Cat breeds
const catBreeds = [
  { name: "Domestic Shorthair", nickname: "DSH", lifeSpanYears: 15, avgWeightLbs: 10, basePercent: 0.03 },
  { name: "Siamese", nickname: "", lifeSpanYears: 16, avgWeightLbs: 8, basePercent: 0.03 },
  { name: "Maine Coon", nickname: "", lifeSpanYears: 13, avgWeightLbs: 15, basePercent: 0.03 },
  { name: "Persian", nickname: "", lifeSpanYears: 14, avgWeightLbs: 10, basePercent: 0.03 },
  { name: "Bengal", nickname: "", lifeSpanYears: 15, avgWeightLbs: 10, basePercent: 0.03 },
  { name: "Ragdoll", nickname: "", lifeSpanYears: 14, avgWeightLbs: 12, basePercent: 0.03 }
];

// Recipes with pre-calculated calories per pound (example values)
const allRecipes = [
  { name: "Daily Thrive", caloriesPerLb: 1450 },
  { name: "Fetch & Feast Chicken", caloriesPerLb: 1200 },
  { name: "Growing Paws Puppy Blend", caloriesPerLb: 1350 },
  { name: "Alpha Bite Beef Mix", caloriesPerLb: 1250 },
  { name: "Royal Carnivore", caloriesPerLb: 1550 },
  { name: "Golden Years Senior Formula", caloriesPerLb: 1100 },
  { name: "Joint Care Blend", caloriesPerLb: 1180 },
  { name: "Wild Whiskers", caloriesPerLb: 1400 }
];

// Multipliers
const activityMultipliers = { low: 0.9, moderate: 1, high: 1.2, "very high": 1.35 };
const goalMultipliers = { lose_weight: 0.85, lose_some: 0.95, maintain: 1, gain_some: 1.1, needs_gain: 1.2 };

// Life stage
const getLifeStage = (ageMonths, breed, species) => {
  const ageYears = ageMonths / 12;
  if (species === "cat") {
    if (ageYears < 1) return "kitten";
    if (ageYears > 11) return "senior";
    return "adult";
  }
  const smallBreeds = ["Yorkshire Terrier","Dachshund","Poodle (Standard)","Shih Tzu","Maltese","Bichon Frise",
    "Pomeranian","Toy Fox Terrier","Italian Greyhound","Chihuahua","Papillon"];
  const largeBreeds = ["Great Dane","Rottweiler","Saint Bernard","Newfoundland","Bernese Mountain Dog","Mastiff","Leonberger"];
  if (smallBreeds.includes(breed.name)) {
    if (ageYears < 1) return "puppy";
    if (ageYears > 10) return "senior";
    return "adult";
  }
  if (largeBreeds.includes(breed.name)) {
    if (ageYears < 2) return "puppy";
    if (ageYears > 8) return "senior";
    return "adult";
  }
  if (ageYears < 1.5) return "puppy";
  if (ageYears > 10) return "senior";
  return "adult";
};

// Feeding % per breed and life stage
const baseFeedingPercent = (stage, species, breed) => {
  if (species === "cat") {
    if (stage === "kitten") return 0.05;
    if (stage === "adult") return breed?.basePercent ?? 0.03;
    if (stage === "senior") return 0.025;
    return 0.03;
  }
  if (stage === "puppy") return 0.05;
  if (stage === "senior") return 0.022;
  return breed?.basePercent ?? 0.025;
};

export default function Calculator() {
  const navigate = useNavigate();
  const [species, setSpecies] = useState("dog");
  const [search, setSearch] = useState("");
  const [breed, setBreed] = useState(null);
  const [showDropdown, setShowDropdown] = useState(true);
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("moderate");
  const [goal, setGoal] = useState("maintain");
  const [ageYears, setAgeYears] = useState("");
  const [ageMonths, setAgeMonths] = useState("");
  const [meals, setMeals] = useState(2);
  const [daysUntilNextOrder, setDaysUntilNextOrder] = useState(7);
  const [result, setResult] = useState(null);
  const [selectedMix, setSelectedMix] = useState("");

  const breeds = species === "dog" ? dogBreeds : catBreeds;

  const filteredBreeds = breeds
    .filter(
      (b) =>
        b.name.toLowerCase().includes(search.toLowerCase()) ||
        (b.nickname && b.nickname.toLowerCase().includes(search.toLowerCase()))
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    if (breed && weight && (ageYears || ageMonths) && daysUntilNextOrder && selectedMix) {
      const totalMonths = (Number(ageYears) || 0) * 12 + (Number(ageMonths) || 0);
      const stage = getLifeStage(totalMonths, breed, species);
      const basePercent = baseFeedingPercent(stage, species, breed);

      const recipe = allRecipes.find(r => r.name === selectedMix);
      const caloriesPerLb = recipe?.caloriesPerLb || 1400; // default

      // Base food in lbs based on weight percent
      const dailyFoodLbs = (Number(weight) * basePercent * (activityMultipliers[activity] || 1) * (goalMultipliers[goal] || 1));
      const perMeal = dailyFoodLbs / Math.max(1, Number(meals));
      const totalNeeded = dailyFoodLbs * Math.max(1, Number(daysUntilNextOrder));

      setResult({
        stage,
        dailyFood: dailyFoodLbs.toFixed(3),
        perMeal: perMeal.toFixed(3),
        totalNeeded: totalNeeded.toFixed(3),
        caloriesPerLb
      });
    } else {
      setResult(null);
    }
  }, [breed, weight, activity, goal, ageYears, ageMonths, meals, daysUntilNextOrder, species, selectedMix]);

  const handleOrderNow = () => {
    if (!selectedMix) return alert("Please select a recipe.");
    if (!result || Number(result.totalNeeded) <= 0) return alert("Total food must be above 0.");

    navigate("/order", {
      state: {
        recipe: selectedMix,
        totalFood: result.totalNeeded,
        caloriesPerLb: result.caloriesPerLb,
        breed: breed.name,
        species,
        weight,
        meals,
        activity,
        goal
      }
    });
  };

  return (
    <div style={{ maxWidth: "900px", margin: "20px auto", fontFamily: "Arial, sans-serif", padding: "20px", backgroundColor: "#fff", borderRadius: "12px", boxShadow: "0 4px 15px rgba(0,0,0,0.1)" }}>
      <img src={logo} alt="Logo" style={{ width: "120px", marginBottom: "20px" }} />
      <h2 style={{ color: "#2b6e44" }}>{species === "dog" ? "Dog" : "Cat"} Food Calculator</h2>
      <p>Enter your {species}'s info to estimate recommended daily raw food intake.</p>

      {/* Species */}
      <div style={{ margin: "15px 0" }}>
        <label>Species:</label>
        <select value={species} onChange={(e) => { setSpecies(e.target.value); setSearch(""); setBreed(null); }}
          style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "8px", border: "1px solid #ccc" }}>
          <option value="dog">Dog</option>
          <option value="cat">Cat</option>
        </select>
      </div>

      {/* Breed */}
      <div style={{ margin: "15px 0", position: "relative" }}>
        <label>Breed:</label>
        <input type="text" value={search} onChange={(e) => { setSearch(e.target.value); setBreed(null); setShowDropdown(true); }}
          placeholder="Type breed..." style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "8px", border: "1px solid #ccc" }} />
        {showDropdown && search && filteredBreeds.length > 0 && (
          <ul style={{ position: "absolute", background: "#fff", width: "100%", maxHeight: "220px", overflowY: "auto", border: "1px solid #ccc", borderRadius: "8px", marginTop: "5px", zIndex: 10, listStyle: "none", padding: 0 }}>
            {filteredBreeds.map((b, idx) => (
              <li key={idx} style={{ padding: "10px", cursor: "pointer", borderBottom: "1px solid #eee" }}
                onClick={() => { setBreed(b); setSearch(b.name); setShowDropdown(false); }}>
                {b.name} {b.nickname ? `(${b.nickname})` : ""} — {b.avgWeightLbs} lb typical
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Weight */}
      <div style={{ margin: "15px 0" }}>
        <label>Weight (lbs):</label>
        <input type="number" min="0" value={weight} onChange={(e) => setWeight(e.target.value)}
          style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "8px", border: "1px solid #ccc" }} />
      </div>

      {/* Age */}
      <div style={{ display: "flex", gap: "10px", margin: "15px 0" }}>
        <div style={{ flex: 1 }}>
          <label>Age (years):</label>
          <input type="number" min="0" value={ageYears} onChange={(e) => setAgeYears(e.target.value)}
            style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "8px", border: "1px solid #ccc" }} />
        </div>
        <div style={{ flex: 1 }}>
          <label>Age (months):</label>
          <input type="number" min="0" max="11" value={ageMonths} onChange={(e) => setAgeMonths(e.target.value)}
            style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "8px", border: "1px solid #ccc" }} />
        </div>
      </div>

      {/* Activity */}
      <div style={{ margin: "15px 0" }}>
        <label>Activity Level:</label>
        <select value={activity} onChange={(e) => setActivity(e.target.value)}
          style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "8px", border: "1px solid #ccc" }}>
          {Object.keys(activityMultipliers).map((lvl, idx) => <option key={idx} value={lvl}>{lvl}</option>)}
        </select>
      </div>

      {/* Goal */}
      <div style={{ margin: "15px 0" }}>
        <label>Goal:</label>
        <select value={goal} onChange={(e) => setGoal(e.target.value)}
          style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "8px", border: "1px solid #ccc" }}>
          {Object.keys(goalMultipliers).map((g, idx) => <option key={idx} value={g}>{g.replace("_", " ")}</option>)}
        </select>
      </div>

      {/* Meals */}
      <div style={{ margin: "15px 0" }}>
        <label>Meals per day:</label>
        <input type="number" min="1" value={meals} onChange={(e) => setMeals(e.target.value)}
          style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "8px", border: "1px solid #ccc" }} />
      </div>

      {/* Days until next order */}
      <div style={{ margin: "15px 0" }}>
        <label>Days until next order:</label>
        <input type="number" min="1" value={daysUntilNextOrder} onChange={(e) => setDaysUntilNextOrder(e.target.value)}
          style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "8px", border: "1px solid #ccc" }} />
      </div>

      {/* Recipe */}
      <div style={{ margin: "15px 0" }}>
        <label>Select Recipe:</label>
        <select value={selectedMix} onChange={(e) => setSelectedMix(e.target.value)}
          style={{ width: "100%", padding: "10px", marginTop: "5px", borderRadius: "8px", border: "1px solid #ccc" }}>
          <option value="">-- Choose a mix --</option>
          {allRecipes.map((r, idx) => <option key={idx} value={r.name}>{r.name}</option>)}
        </select>
      </div>

      {/* Result */}
      {result && (
        <div style={{ margin: "20px 0", padding: "15px", border: "1px solid #2b6e44", borderRadius: "8px", backgroundColor: "#f0fff4" }}>
          <h3>Feeding Recommendation</h3>
          <p>Life Stage: <strong>{result.stage}</strong></p>
          <p>Daily Food: <strong>{result.dailyFood} lbs</strong></p>
          <p>Per Meal: <strong>{result.perMeal} lbs</strong></p>
          <p>Total Needed for {daysUntilNextOrder} days: <strong>{result.totalNeeded} lbs</strong></p>
          <p>Recipe Calories: <strong>{result.caloriesPerLb} cal/lb</strong></p>
        </div>
      )}

      <button onClick={handleOrderNow} style={{ padding: "15px 25px", border: "none", borderRadius: "8px", backgroundColor: "#2b6e44", color: "#fff", cursor: "pointer", fontSize: "16px" }}>
        Order Now
      </button>
    </div>
  );
}
