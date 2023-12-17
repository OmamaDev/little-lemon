import React from "react";
import restaurantfood from "../images/restaurantfood.jpg"
import { Link } from "react-router-dom";


const Header = () => {
    return(
        <header className="header-background">
            <section className="header-container">
            <div className="header-content">
            <h2>Little Lemon Restaurant</h2>
            <h3>Brooklyn</h3>
            <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes servred with a modern twist.</p>
            <Link to="/Booking"><button aria-label="On Click">Reserve Table</button></Link>
            </div>
            <div className="header-image">
                <img src={restaurantfood} />
            </div>
            </section>
        </header>
    )
}

export default Header;