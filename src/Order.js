import React, { useState } from "react";

function Order() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiry: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Construct mailto link
    const subject = encodeURIComponent("New Inquiry from Jersey Raw Website");
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.inquiry}`
    );
    window.location.href = `mailto:JerseyRawHelp@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      style={{
        maxWidth: "600px",
        margin: "40px auto",
        padding: "20px",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}
    >
      <h2 style={{ color: "#2b6e44", textAlign: "center" }}>
        🐾 Orders Page – Under Construction
      </h2>
      <p style={{ textAlign: "center", marginBottom: "10px", color: "#444" }}>
        Our online ordering system is coming soon.  
        In the meantime, please send us an inquiry below,  
        email us directly at{" "}
        <a href="mailto:JerseyRawHelp@gmail.com">JerseyRawHelp@gmail.com</a>,  
        or text us at{" "}
        <a href="sms:+19735322247">973-532-2247</a>.
      </p>

      <p style={{ textAlign: "center", marginBottom: "20px", fontWeight: "bold", color: "#2b6e44" }}>
        Can be made in 1Lb or 1/2Lb containers 🥩
      </p>

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "15px" }}
      >
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              width: "100%",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            style={{
              padding: "10px",
              width: "100%",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          />
        </label>

        <label>
          Inquiry:
          <textarea
            name="inquiry"
            value={form.inquiry}
            onChange={handleChange}
            required
            rows="5"
            style={{
              padding: "10px",
              width: "100%",
              borderRadius: "6px",
              border: "1px solid #ccc"
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            backgroundColor: "#2b6e44",
            color: "#fff",
            padding: "12px",
            borderRadius: "6px",
            fontWeight: "bold",
            cursor: "pointer"
          }}
        >
          Send Inquiry
        </button>
      </form>

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <a
          href="sms:+19735322247"
          style={{
            display: "inline-block",
            backgroundColor: "#444",
            color: "#fff",
            padding: "10px 20px",
            borderRadius: "6px",
            textDecoration: "none",
            fontWeight: "bold"
          }}
        >
          📱 Text Us
        </a>
      </div>
    </section>
  );
}

export default Order;
