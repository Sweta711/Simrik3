import React from "react";
import "../styles/Hero.css";
import heroyay from "../assets/heroktm.jpg";
import Footer from "./Footer";

export default function Hero() {
    return (
        <section>
            <div className="hero-section"
                style={{ backgroundImage: `url(${heroyay})` }}
                >
                <div className="hero-overlay"></div>

                <div className="hero-content">
                    <h1>TRAVEL COMFORTABLY, ARRIVE ON TIME</h1>
                    <p>Enjoy your journey with fast, free Wi-Fi, 
                    premium seating,and the comfort of our A/C Deluxe coaches.</p>

                    <button className="hero-btn">BOOK A SEAT NOW</button>
                </div>
            </div>
        </section>
    );
}
