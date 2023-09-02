import { Link } from "react-router-dom";

import '../styles/footer.css'

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer">
                <div className="footer-copyright">@ 2023 Patrik Pátek</div>
                <div className="footer-links-container">
                    <ul className="footer-links-list">
                        <li className="footer-item">
                            <Link to="/" className="footer-link">Home</Link>
                        </li>
                        <li className="footer-item">
                            <Link to="/projects" className="footer-link">Projects</Link>
                        </li>
                        <li className="footer-item">
                            <Link to="/about" className="footer-link">About</Link>
                        </li>
                        <li className="footer-item">
                            <Link to="/contact" className="footer-link">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


export default Footer;