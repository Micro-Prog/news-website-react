import React, { useEffect, useState } from "react";
import './single.css'
import { Data } from '../../Data'
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import PageSlider from "./pageslider/PageSlider";
import SideContent from '../home/sideContent/SideContent';


const Single = () => {
    const { id } = useParams(null);
    const [item, setItem] = useState(null);

    useEffect(() => {
        const item = Data.find((item) => item.id === parseInt(id));
        window.scrollTo(0, 0);
        if(item) {
            setItem(item)
        }
    }, [id])


    return (
        <div>

                {item ? (
                    <main>
                        <PageSlider />
                        <div className="container">
                            <div className="pageContent details">
                                <h1 className="title">{item.title}</h1>

                                <div className="author">
                                    <span>by</span>
                                    <img src={item.authorImg} alt="" />
                                    <p>{item.authorName}</p>
                                    <label htmlFor="">{item.time}</label>
                                </div>

                                <div className="socials">
            <div className="socialbox">
                    <i className="fab fa-youtube"></i>
            </div>

                <div className="socialbox">
                    <i className="fab fa-pinterest"></i>
                </div>

                <div className="socialbox">
                    <i className="fab fa-facebook-f"></i>                    
                </div>

                <div className="socialbox">
                    <i className="fab fa-twitter"></i>                    
                </div>

                <div className="socialbox">
                    <i className="fab fa-instagram"></i>                    
                </div>

                </div>

                <div className="desc">
                    {
                        item.desc.map((e) => {
                            return (
                                <div>
                                    <p>{e.para1}</p>
                                    <p>{e.para2}</p>
                                </div>
                            )
                        })
                    }
                </div>

                <img src={item.cover} alt='' className="cover"/>

                <div className="descA">
                    {
                        item.details.map((e) => {
                            return (
                                <div>
                                    <h1>{e.title}</h1>
                                    <p>{e.para3}</p>
                                </div>
                            )
                        })
                    }
                </div>


                    <div className="quote">
                        <i className="fa fa-quote-left"></i>
                        {
                            item.details.map((e) => {
                                return (
                                    <div>
                                        <p>{e.quote}</p>
                                    </div>   
                                )
                            })
                        }
                    </div>

                        <div className="descB">
                            {
                                item.details.map((e) => {
                                    return (
                                        <div>
                                            <p>{e.para2}</p>
                                            <p>{e.para3}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                               

                            </div>

                            <section className="sideContent AD">
                                <SideContent />
                            </section>

                        </div>
                    </main>
                ) : (<h1>not found</h1>)
                }
        </div>
        )

}

export default Single;