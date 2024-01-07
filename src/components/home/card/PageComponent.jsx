import React, { useState } from "react";
import { Data } from '../../../Data'
import Card from "./Card";
import './pagecomponent.css'

const PageComponent = () => {
    // const [items, setitems] = useState(Data)
    return (
        <>
            <section className='pagecomponent' >
                <div className='container'>
                    {
                        Data.map((item) => {
                            return <Card key={item.id} item={item} />
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default PageComponent