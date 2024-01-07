import React from "react";
import './discover.css';
import Heading from '../../common/heading/Heading';
import { discover } from '../../../Data';

const Discover = () => {
    return (
        <div>
            <section className="discover">
                
                <div className="container">
                    <Heading title="Let's Discover More" />            
                </div>

                <div className="discoverContent">
                    {
                        discover.map((e) => {
                            return (
                            <div className="box">
                                <div className="img">
                                    <img src={e.cover} alt=""/>
                                </div>
                                <h2 className="title">{e.title}</h2>
                            </div>
                            )
                        })
                    }
                </div>

            </section>
        </div>
    )
}

export default Discover;