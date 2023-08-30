import { Link } from "react-router-dom";

import '../styles/hero.css'

function Hero() {
    return (
        <div className="hero-container">
            <div className="hero">
                <div className="hero-content">
                    <div className="hero-description">
                        <h1 className="hero-title">Patrik Pátek</h1>
                        <p className="hero-subtitle">I am a developer</p>
                    </div>
                    <div className="hero-links-container">
                        <div className="hero-link-item">
                            <Link to="/about" className="hero-link">Learn more about me</Link>
                        </div>
                        <div className="hero-link-item">
                            <Link to="/project" className="hero-link">My work</Link>
                        </div>
                    </div>
                </div>
                <div className="hero-img-container">
                    <img className="hero-img" src="img.jpg" alt="profile-picture" />
                </div>
            </div>
        </div>
    )
}

export default Hero;