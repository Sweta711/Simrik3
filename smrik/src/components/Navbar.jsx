import React, { useState } from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.png";


export default function Navbar() {
  const [form, setForm] = useState({
    from: "Kathmandu",
    to: "",
    date: "",
    passenger: 1,
  });

  return (
    <div className="navbar">

      {/* LEFT: LOGO */}
      <div className="nav-left">
        <img src={logo} alt="logo" className="nav-logo" />
      </div>


      <div className="search-box">
        <div>
          <label>FROM</label>
          <select
            value={form.from}
            onChange={(e) => setForm({ ...form, from: e.target.value })}
          >
            <option value="Kathmandu">Kathmandu</option>
            <option value="Pokhara">Pokhara</option>
          </select>
        </div>

        <div>
          <label>TO</label>
          <select
            value={form.to}
            onChange={(e) => setForm({ ...form, to: e.target.value })}
          >
            <option>Select Destination</option>
            <option value="Biratnagar">Biratnagar</option>
            <option value="Nepalgunj">Nepalgunj</option>
          </select>
        </div>

        <div>
          <label>DATE</label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
          />
        </div>

        <div>
          <label>PASSENGERS</label>
          <input
            type="number"
            min="1"
            value={form.passenger}
            onChange={(e) =>
              setForm({ ...form, passenger: e.target.value })
            }
          />
        </div>

        <button className="search-btn">SEARCH BUS</button>
      </div>
    </div>
  );
}
