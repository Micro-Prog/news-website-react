import React from "react";
import Heading from '../../../common/heading/Heading'
import { popular } from '../../../../Data'
import './popular.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const Popular = () => {
    const settings = {
        className: "center",
        centerMode: false,
        infinite: true,
        centerPadding: "5px",
        speed: 500,
        slidesToShow: 2,
        slidesPerRow: 1,
        rows:4,
        dots: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1, 
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    }
    return (
    <>
      <section className='popular'>
        <Heading title='Posspular'/>
        <Slider {...settings} >
        {
            popular.map((item) => {
               return ( 
               
               <div className='items'>
                    <div className='box shadow' >
                        <div className='image row'>
                            <div className='img'>
                                <img src={item.cover} alt="" />
                            </div>
                            <div className='category categoryA'>
                                <span>{item.category}</span>
                            </div>
                            </div>
                            <div className='text row'>
                                <h1 className='title'>{item.title.slice(0, 35)} ...</h1>
                                <div className='date'>
                                    <i className='fas fa-calendar-days'></i>
                                    <label htmlFor=''>{item.date}</label>
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
      </section>  
    </>
    )
}


export default Popular;