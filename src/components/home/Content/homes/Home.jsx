import React from "react";
import './home.css';
import Popular from '../popular/Popular'
import Ppost from "../ppost/Ppost";
import Life from "../life/Life";
import Music from "../music/Music";
import SideContent from '../../sideContent/SideContent'


const Home = () => {
    return (
        <>
            <main>
                <div className='container'>
                    
                    <section className='mainContent'>
                        <Popular />
                        <Ppost />
                        <Music />

                        <Life />
                    </section>

                    <section className='sideContent'>
                        <SideContent />
                    </section>
                </div>
            </main>
        
        
        </>
    )
}

export default Home;