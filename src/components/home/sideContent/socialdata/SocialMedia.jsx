import React from "react";
import './socialmedia.css'


const SocialMedia = () => {
    return (
        <>

            <section className="socials">
            <div className="socialbox">
                    <i className="fab fa-youtube"></i>
                    <span className="socialText">1111 Followers</span>
            </div>

                <div className="socialbox">
                    <i className="fab fa-pinterest"></i>
                        <span className="socialText">11111 Followers</span>
                </div>

                <div className="socialbox">
                    <i className="fab fa-facebook-f"></i>
                        <span className="socialText">11111 Followers</span>
                    
                </div>

                <div className="socialbox">
                    <i className="fab fa-twitter"></i>
                        <span className="socialText">11111 Followers</span>
                    
                </div>

                <div className="socialbox">
                    <i className="fab fa-instagram"></i>
                        <span className="socialText">11111 Followers</span>
                    
                </div>


            </section>


        </>
    )
}

export default SocialMedia;