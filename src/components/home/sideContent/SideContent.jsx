import React from "react";
import Heading from '../../common/heading/Heading';
import SocialMedia from "./socialdata/SocialMedia";
import Tpost from './tpost/Tpost'
import { gallery } from '../../../Data'

import './sidecontent.css'
import Slider from "react-slick";

const SideContent = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const categories = ["World", "Sport", "Travel", "Fun", "Health", "Fashion", "Business", "Technology"];
    return (
        <>
            <Heading title="Get in Touch"/>
            <SocialMedia />
            <Heading title="Subscribe" />
            <section className="subsc">
                <h2 className="title">Subscribe to our Newsletter</h2>
                <form action="">
                    <input type="text" placeholder="Email Address ...." />
                    <button>
                        <i className="fa fa-paper-plane"></i>Submit
                    </button>
                </form>
            </section>

            <section className="ads">
                <img src="./images/sidebar-banner-new.jpg" alt=""/>
            </section>


            <Tpost />

            <section className="categories">
                <Heading title="Categories" />
                {
                    categories.map((e) => {
                        return (
                            <div className="category categoryB">
                                <span>{e}</span>
                            </div>
                        )
                    })
                }
            </section>

                <section className="gallery">
                    <Heading title="Our Gallery" />
                    <Slider {... settings} >
                    {
                        gallery.map((e) => {
                            return (
                                <div className="img">
                                    <img src={e.cover} alt='' />
                                </div>
                            )
                        })
                    }
                    </Slider>
                </section>


        </>
    )
}

export default SideContent;