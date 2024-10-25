'use client';

import React from "react"
// import {
//     XMarkIcon,
//     CreditCardIcon,
// } from '@heroicons/react/24/outline';


interface HomeProps
{
    
}


interface HomeState
{
    
}

export default class Home extends React.Component<HomeProps, HomeState>
{

    constructor(props: HomeProps)
    {
        super(props)
        this.state = {

        }
    }

    render()
    {
        return (
            <div id="home">
                <header>
                    <div className="frame"></div>
                    <div className="container">
                        <h1>LifePathGuidanc3</h1>
                        <p>
                            It is an absolute truth: we exist, as evidenced by our living. Everything is energy, everything is vibration. And we are eternal. Even death does not erase this, as everything that constitutes us is vibration. Assembled or disassembled, we tend towards the infinitely large and the infinitely small, without beginning or end, and we are connected to this infinite universe.
                            <br/><br/>
                            We are free to live as we wish, exercising our free will, as long as we do not intentionally harm others and their lives. Thus, even what seems impossible becomes possible.
                        </p>
                    </div>
                </header>
                <section>
                    <h2>Eternal Existence</h2>
                    <div className="link">
                        <a href="https://docs.google.com/document/d/1LfKqU2Uy3t3ABo0OG8OFRDcIqaPkQZCJMEoZrTYMHGQ/edit?usp=sharing" target="_blank">REVEAL</a>
                    </div>
                </section>
                <footer></footer>
            </div>
        )
    }
}