import React from "react";
import './pageslider.css'
import Slider from "react-slick";
import Heading from '../../common/heading/Heading'
import { popular } from '../../../Data'

const PageSlider = ( ) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 2,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3, 
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    }
    return (
        <div>
      <section className='single'>
        <Heading title='Popular'/>
        <Slider {...settings} >
        {
            popular.map((item) => {
               return ( 
               
               <div className='items'>
                    <div className='box' >
                        <div className='image'>
                            <div className='img'>
                                <img src={item.cover} alt="" />
                            </div>
                            
                            </div>
                            <div className='text row'>
                                <h2 className='title'>{item.title.slice(0, 20)} ...</h2>
                            </div>
                        </div>
                    </div>
               )    
        })
        }

        </Slider>
      </section>  
        </div>
    )
}

export default PageSlider;