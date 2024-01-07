import React from "react";
import Heading from '../../../common/heading/Heading'
import { tpost } from '../../../../Data'
import './tpost.css'

const Tpost = () => {
    return (
        <div>
            <section className="tpost">
                <Heading title="Post on TikTok" />

                {
                    tpost.map((e) => {
                        return (
                            <div className="box flexSB">
                                <div className="img">
                                    <img src={e.cover} alt='' />
                                </div>
                            <div className="text">
                                <h2 className="title">{e.title.slice(0, 25)} ....</h2>
                                <span>a year ago</span>
                            </div>
                            </div>
                        )
                    })
                }

            </section>
        </div>
    )
}

export default Tpost;