import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [form, setForm] = useState({ name: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
    setForm({ name: "", message: "" });
  };

  return (
    <div>

      {/* NAV */}
      <header className="nav">
        <h2>☕ Sunrise Café</h2>
        <div className="links">
          <a href="/">Home</a>
          <a href="/">Menu</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>Premium Coffee Experience</h1>
        <p>Fresh coffee • Cozy vibes • Better mornings</p>
        <a className="btn" href="/">Explore Menu</a>
      </section>

      {/* MENU */}
      <section className="section">
        <h2>Our Menu</h2>

        <div className="grid">
          {[
            { name: "Cappuccino", price: "₹120" },
            { name: "Espresso", price: "₹100" },
            { name: "Cold Coffee", price: "₹150" }
          ].map((item, i) => (
            <div key={i} className="card">
              <h3>{item.name}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about">
        <h2>About Us</h2>
        <p>
          A modern café built for comfort, creativity, and great coffee.
          We serve fresh drinks and a peaceful workspace environment.
        </p>
      </section>

      {/* CONTACT */}
      <section className="section">
        <h2>Contact Us</h2>

        <form onSubmit={handleSubmit} className="form">
          <input name="name" placeholder="Your Name" onChange={handleChange} />
          <textarea name="message" placeholder="Your Message" onChange={handleChange} />
          <button type="submit">Send Message</button>
        </form>

        <a className="wa" href="/">Chat on WhatsApp</a>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        © 2026 Sunrise Café • Designed with love
      </footer>

    </div>
  );
}