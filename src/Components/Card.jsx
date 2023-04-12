import React from 'react'
import star from '../assets/star.png'

export default function Card(props){
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className='card'>
            {badgeText && <div className="cardBadge">{badgeText}</div>}
            <img src={new URL(`../assets/${props.coverImg}`, import.meta.url).href} className='CardImg'/>
            <div className='stats'>
                <img src={star} className='star'/>
                <span className='rating'>{props.rating}</span>
                <span className='grey'>({props.reviewCount}) • </span>
                <span className='grey'>{props.location}</span>
            </div>
            <p className='title'>{props.title}</p>
            <p className='price'><span className='bold'>From ${props.price}</span> / person</p>
        </div>
    )
}