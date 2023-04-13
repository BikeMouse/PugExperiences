import React from "react"
import photogrid from '../assets/photo-grid.png'

export default function Hero() {
    return (
        <section className='hero'>
            <img src={photogrid} className='grid'/>
            <h1 className='heroHeader'>Pug Experiences</h1>
            <p className='heroText'>
                Join activities with other pug dog parents
            </p>
        </section>
    )
}