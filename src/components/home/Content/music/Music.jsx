import React from "react";
import './music.css'
import { popular } from '../../../../Data' 
import Heading from '../../../common/heading/Heading'
import Slider from "react-slick";


const Music = () => {
    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "",
        speed: 500,
        slidesToShow: 1,
        slidesPerRow: 1,
        rows:2,
        dots: false,
    }
    return (
        <div>
        <section className='music'>
        <Heading title='Music News'/>
        <div className="content">
        <Slider {...settings} >
        {
            popular.filter((item) => item.category === "fun")
            .map((item) => {
               return ( 
               
               <div className='items'>
                    <div className='box shadow flexSB' >
                        <div className='image'>
                            <div className='img'>
                                <img src={item.cover} alt="" />
                            </div>
                            <div className='category categoryA'>
                                <span>{item.category}</span>
                            </div>
                            </div>
                            <div className='text'>
                                <h1 className='title'>{item.title.slice(0, 35)} ...</h1>
                                <div className='date'>
                                    <i className='fas fa-calendar-days'></i>
                                    <label htmlFor=''>{item.date}</label>
                                </div>
                                <p className="desc">{item.desc.slice(0, 250)} ...</p>
                                <div className='comment'>
                                    <i className='fas fa-share'></i>
                                    <label htmlFor=''>Share.</label>
                                </div>
                                <div className='comment'>
                                    <i className='fas fa-comment'></i>
                                    <label htmlFor=''>{item.comments}</label>
                                </div>
                            </div>
                        </div>
                    </div>
               )    
        })
        }

        </Slider>
        </div>
      </section>  
        </div>
    )
}

export default Music;