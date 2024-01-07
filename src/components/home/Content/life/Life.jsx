import React from "react";
import './life.css'
import { lifestyle } from "../../../../Data";
import Heading from '../../../common/heading/Heading'
import Slider from "react-slick";


const Life = () => {
    const settings = {
        dots: false, 
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                },
            },
        ],
    }
    return (
        <div>
            <section className='popularPost life'>
        <Heading title='Life Style'/>
        <div className="content">
        <Slider {...settings} >
        {
            lifestyle.map((item) => {
               return ( 
               
               <div className='items'>
                    <div className='box shadow' >
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

export default Life;