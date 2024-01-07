import React from "react";
import './footer.css'


const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="box logo">
                        <img src="../images/tech-logo-footer.png" alt="" />
                        <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée. Généralement, on utilise un texte en faux latin, le Lorem ipsum ou Lipsum.</p>

                        <i className="fa fa-envelope"></i>
                        <span>test@gmail.com</span>
                        <br />
                        <i className="fa fa-headphones"></i>
                        <span>+001 256 6556</span>

                    </div>

                    <div className="box">
                        <h3>Sport</h3>
                        <div className="item">
                            <img src="../images/hero/hero1.jpg" />
                            <p>Click to Read More ....</p>
                        </div>
                        <div className="item">
                            <img src="../images/hero/hero2.jpg" />
                            <p>Click to Read More ....</p>
                        </div>
                    </div>
                    
                    <div className="box">
                        <h3>Latest News</h3>
                        <div className="item">
                            <img src="../images/hero/hero3.jpg" />
                            <p>Click to Read More ....</p>
                        </div>
                        <div className="item">
                            <img src="../images/hero/hero4.jpg" />
                            <p>Click to Read More ....</p>
                        </div>
                    </div>

                    <div className="box">
                        <h3>Labels</h3>
                        <ul><li><span>Boxing</span><label>(5)</label></li></ul>
                        <ul><li><span>Fashion</span><label>(10)</label></li></ul>
                        <ul><li><span>Health</span><label>(11)</label></li></ul>
                        <ul><li><span>Nature</span><label>(13)</label></li></ul>
                    </div>

                </div>
            </footer>

                        <div className="legalNotice">
                            <div className="container flexSB">
                                <p>All Rights Reserved</p>
                            </div>
                        </div>

        </div>
    )
}

export default Footer;