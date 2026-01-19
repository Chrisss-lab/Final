import React, { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import logo from "./photo-jersey-raw-logo.jpg";
import BackgroundImage from "./Photos/Food2.jpg";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwLtPpoNlnrbIcs_LFk7QIa1GZmLmGkRW7al7LzOQ4Ch8sC5O4YQxjKl44o8LQscekK/exec";

export default function OrderForm() {
  const location = useLocation();

  const [recipes, setRecipes] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    recipe: "",
    container: "1 lb tub",
    amount: "",
    notes: "",
    coupon: "",
  });

  const [showConfirmation, setShowConfirmation] = useState(false);

  const [totals, setTotals] = useState({
    subtotal: 0,
    originalSubtotal: 0,
    tax: 0,
    total: 0,
    savings: 0,
  });

  const [discount, setDiscount] = useState({ percent: 0, message: "" });
  const [warning, setWarning] = useState("");
  const [fade, setFade] = useState(false);
  const TAX_RATE = 0.06625;

  const inputStyle = {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box",
    fontSize: "1em",
    outline: "none",
  };

  const buttonStyle = {
    padding: "14px",
    backgroundColor: "#2b6e44",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "1em",
    fontWeight: "bold",
    transition: "background-color 0.3s",
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const recipeParam = params.get("recipe");
    const amountParam = params.get("weight");
    if (recipeParam) setFormData((prev) => ({ ...prev, recipe: recipeParam }));
    if (amountParam)
      setFormData((prev) => ({
        ...prev,
        amount: Math.floor(Number(amountParam)),
      }));
  }, [location.search]);

  // ✅ Fetch recipes from Google Sheet
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch(GOOGLE_SCRIPT_URL);
        const data = await res.json();
        setRecipes(data);
      } catch (err) {
        console.error("Error loading recipes:", err);
      }
    };
    fetchRecipes();
  }, []);

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "amount") value = value.replace(/\D/g, "");
    setFormData({ ...formData, [name]: value });
  };

  // 🔢 Calculate totals
  useEffect(() => {
    const selectedRecipe = recipes.find((r) => r.name === formData.recipe);
    const pricePerLb = selectedRecipe ? Number(selectedRecipe.price) : 0;
    const lbs = parseInt(formData.amount) || 0;

    if (lbs > 0) {
      if (formData.container === "2 lb meat chubs" && lbs % 2 !== 0) {
        setWarning("Amount must be divisible by 2 for 2 lb meat chubs.");
      } else if (
        (formData.container === "1 lb tub" ||
          formData.container === "2 oz tub (Cat Food)") &&
        !Number.isInteger(lbs)
      ) {
        setWarning("Amount must be a whole number.");
      } else {
        setWarning("");
      }
    } else {
      setWarning("");
    }

    let originalSubtotal = pricePerLb * lbs;
    let discountedSubtotal = originalSubtotal;

    if (discount.percent > 0) {
      discountedSubtotal = originalSubtotal * (1 - discount.percent / 100);
    }

    const savings = originalSubtotal - discountedSubtotal;
    const tax = discountedSubtotal * TAX_RATE;
    const total = discountedSubtotal + tax;

    setTotals({
      originalSubtotal,
      subtotal: discountedSubtotal,
      tax,
      total,
      savings,
    });
  }, [
    formData.amount,
    formData.recipe,
    formData.container,
    discount.percent,
    recipes,
  ]);

  // 🧾 APPLY COUPON
  const applyCoupon = async () => {
    if (!formData.coupon) {
      alert("Please enter a coupon code first.");
      return;
    }

    const subtotal =
      (recipes.find((r) => r.name === formData.recipe)?.price || 0) *
      (parseInt(formData.amount) || 0);

    if (subtotal <= 0) {
      alert("Please select a recipe and enter an amount before applying a coupon.");
      return;
    }

    try {
      const res = await fetch(
        `https://script.google.com/macros/s/AKfycbzgcb_x4xQkeRj8_HV5ZxQJS3gkqxpg8jDan8Sj39BeDxYeM-zOB4lYRhQfsKVHQOSf/exec?action=applyCoupon&code=${encodeURIComponent(
          formData.coupon
        )}&total=${subtotal}`
      );
      const data = await res.json();

      if (data.success) {
        setDiscount({ percent: data.discountPercent, message: data.message });
        setFade(true);
        setTimeout(() => setFade(false), 600);
      } else {
        setDiscount({ percent: 0, message: data.message });
        alert(data.message);
      }
    } catch (err) {
      alert("Coupon check failed: " + err.message);
    }
  };

  // 📦 SUBMIT ORDER
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (warning) return;

    const payload = {
      ...formData,
      total: totals.total.toFixed(2),
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzkOj4kkDHK4niZeJ4TEGtZ5lTGtec6Yrt64y-XQbfWGmnKN_71zyY4NeTIoIvCQVRL/exec",
        {
          method: "POST",
          body: JSON.stringify(payload),
        }
      );

      const data = await response.json();

      if (data.status === "success") {
        setShowConfirmation(true);
      } else {
        alert("Submission failed: " + data.message);
      }
    } catch (error) {
      alert("Submission failed: " + error.message);
    }
  };

  const handleOrderAgain = () => {
    setFormData((prev) => ({
      ...prev,
      recipe: "",
      amount: "",
      container: "1 lb tub",
      notes: "",
      coupon: "",
    }));
    setDiscount({ percent: 0, message: "" });
    setShowConfirmation(false);
  };

  const handleDone = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      address: "",
      recipe: "",
      container: "1 lb tub",
      amount: "",
      notes: "",
      coupon: "",
    });
    setDiscount({ percent: 0, message: "" });
    setShowConfirmation(false);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "50px 20px",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial, sans-serif",
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
          backgroundColor: "rgba(0,0,0,0.25)",
          zIndex: 0,
        }}
      ></div>

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "520px",
          width: "100%",
          padding: "25px 30px",
          background: "rgba(255,255,255,0.9)",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            display: "block",
            margin: "0 auto 20px",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
            opacity: 0.95,
          }}
        />

        <h2
          style={{
            textAlign: "center",
            color: "#2b6e44",
            marginBottom: "25px",
          }}
        >
          Place Your Order
        </h2>

        <div
          style={{
            backgroundColor: "#f3f7f5",
            borderRadius: "10px",
            padding: "15px",
            marginBottom: "20px",
            fontSize: "0.95em",
            color: "#2b6e44",
            lineHeight: 1.5,
          }}
        >
          <strong>How Ordering Works</strong>
          <p style={{ marginTop: "8px" }}>
            After placing your order, a detailed invoice will be emailed to the email
            address you provide.
          </p>
          <p>
            Once your order is received, we will contact you by text or phone to schedule
            a convenient pickup time and confirm the pickup location.
          </p>
          <p style={{ marginBottom: 0 }}>
            If you have any questions or special requests, feel free to email or text us
            at <strong>JerseyRawHelp@gmail.com</strong> or <strong>973-532-2247</strong> —
            we’re happy to help.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "18px" }}
        >
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required style={inputStyle} />
          <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} required style={inputStyle} />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required style={inputStyle} />
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required style={inputStyle} />

          <select name="recipe" value={formData.recipe} onChange={handleChange} required style={inputStyle}>
            <option value="">-- Select Recipe --</option>
            {recipes.map((r) => (
              <option key={r.name} value={r.name}>
                {r.name} – ${Number(r.price).toFixed(2)}/lb
              </option>
            ))}
          </select>

          <select name="container" value={formData.container} onChange={handleChange} required style={inputStyle}>
            <option value="1 lb tub">1 lb Tub</option>
            <option value="2 lb meat chubs">2 lb Meat Chubs</option>
            <option value="2 oz tub (Cat Food)">2 oz Tub (Cat Food)</option>
          </select>

          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <input
              type="text"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              placeholder="Amount"
              style={{ ...inputStyle, flex: 1 }}
            />
            <span style={{ fontWeight: "bold", fontSize: "1em", color: "#2b6e44" }}>lb</span>
          </div>

          <textarea name="notes" placeholder="Questions or Allergies (optional)" value={formData.notes} onChange={handleChange} rows={4} style={{ ...inputStyle, resize: "vertical" }} />

          {/* Coupon field */}
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <input type="text" name="coupon" placeholder="Coupon Code (optional)" value={formData.coupon} onChange={handleChange} style={{ ...inputStyle, flex: 1 }} />
            <button type="button" onClick={applyCoupon} style={{ ...buttonStyle, padding: "12px 16px" }}>
              Apply
            </button>
          </div>

          {discount.message && (
            <p style={{ color: "#2b6e44", fontWeight: "bold", marginTop: "-10px" }}>
              {discount.message} ({discount.percent}% off)
            </p>
          )}

          {/* Animated Order Summary */}
          <div
            style={{
              backgroundColor: "#f3f7f5",
              borderRadius: "10px",
              padding: "15px",
              fontSize: "1em",
              color: "#2b6e44",
              lineHeight: 1.6,
              opacity: fade ? 0 : 1,
              transition: "opacity 0.6s ease",
            }}
          >
            <strong>Order Summary</strong>
            <br />
            {totals.savings > 0 ? (
              <>
                <span style={{ textDecoration: "line-through", color: "#888" }}>
                  ${totals.originalSubtotal.toFixed(2)}
                </span>{" "}
                <span style={{ fontWeight: "bold" }}>
                  ${totals.subtotal.toFixed(2)}
                </span>
                <br />
                <strong style={{ color: "#2b6e44" }}>
                  You saved ${totals.savings.toFixed(2)}!
                </strong>
              </>
            ) : (
              <>Subtotal: ${totals.subtotal.toFixed(2)}</>
            )}
            <br />
            NJ Sales Tax (6.625%): ${totals.tax.toFixed(2)}
            <br />
            <strong>Total: ${totals.total.toFixed(2)}</strong>
          </div>

          <button
            type="submit"
            disabled={!!warning}
            style={{
              ...buttonStyle,
              opacity: warning ? 0.6 : 1,
              cursor: warning ? "not-allowed" : "pointer",
            }}
          >
            Submit Order
          </button>
        </form>
      </div>

      {showConfirmation && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2000,
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "15px",
              padding: "25px",
              maxWidth: "420px",
              width: "90%",
              textAlign: "center",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            }}
          >
            <h2 style={{ color: "#2b6e44" }}>Order Received!</h2>

            <p style={{ marginTop: "10px" }}>
              Thank you for your order. A detailed invoice will be emailed to you shortly.
            </p>
            <p>
              We will contact you by text or phone to schedule a pickup time and confirm the pickup location.
            </p>

            <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
              <button
                onClick={handleDone}
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "10px",
                  border: "none",
                  backgroundColor: "#ccc",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Done
              </button>

              <button
                onClick={handleOrderAgain}
                style={{
                  flex: 1,
                  padding: "12px",
                  borderRadius: "10px",
                  border: "none",
                  backgroundColor: "#2b6e44",
                  color: "#fff",
                  cursor: "pointer",
                  fontWeight: "bold",
                }}
              >
                Order Again
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
