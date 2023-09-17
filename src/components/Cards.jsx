import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';

export default function Cards(props) {
  return (
    <>
    <div className={`cards ${props.class}`}>
        <div className="container">
            <div className="cards-titles-flex">
               <div className="cards-titles">
                 <div className="cards-title">
                  {props.title}
                 </div>
                 <div className="cards-text">
                  {props.text}
                 </div>
                </div>
                <div className="cards-link-btn">
                    <NavLink to='/jobs'>
                    View All Jobs
                    </NavLink>
                </div>
            </div>
            <div className="cards-flex">
                {props.card.map((item)=>{
                    return item
                })}
            </div>
        </div>
    </div>
    </>
  )
}

