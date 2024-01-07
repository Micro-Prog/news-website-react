import React from "react";
import Heading from '../../../common/heading/Heading'
import { ppost } from '../../../../Data'
import Slider from "react-slick";
import './ppost.css'

const Ppost = () => {
    const settings = {
        dots: true, 
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    }
    return (
    <>
      <section className='popularPost'>
        <Heading title='Popular Posts'/>
        <div className="content">
        <Slider {...settings} >
        {
            ppost.map((item) => {
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
    </>
    )
}


export default Ppost;