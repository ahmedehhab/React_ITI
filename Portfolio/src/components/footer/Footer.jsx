import './Footer.css'; 

const Footer = () => {

    return (
        <footer className="footer-wrapper">
            <div className="footer-glow"></div>
            
            <div className="footer-content">
                <div className="footer-grid">
                    
                    <div className="footer-section">
                        <h2 className="footer-logo">
                            AHMED EHAB <span className="accent-text">FAROUK</span>
                        </h2>
                        <p className="footer-tagline">
                            Software Engineer & Open Source Scholar.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4 className="section-title">Navigation</h4>
                        <nav className="footer-links">
                            <a href="#about">About</a>
                            <a href="#projects">Projects</a>
                            <a href="#skills">Skills</a>
                        </nav>
                    </div>

                    {/* Social Section */}
                    <div className="footer-section">
                        <h4 className="section-title">Connect</h4>
                        <div className="footer-links">
                            <a href="https://github.com/ahmedehhab" target="_blank" rel="noreferrer">GitHub</a>
                            <a href="https://www.linkedin.com/in/ahmedehabx/" target="_blank" rel="noreferrer">LinkedIn</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="iti-info">
                        <span className="iti-tag">ITI Intake 46</span>
                        <p>Open Source Applications Development • Smart Village</p>
                    </div>
                    <p className="copyright">
                        © 2026 • Crafted with passion
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;