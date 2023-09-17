import React from 'react'

export default function TestimonialCard(props) {
  return (
    <>
    <div className="testimonial-card">
      <div className="testimonial-card-info">
        {props.info}
      </div>
      <div className="testimonial-card-titles">
        <div className="testimonial-card-image">
          <img src={props.src} alt="user" />
        </div>
        <div className="testimonial-card-name">
           <p>
             {props.name}
           </p>
           <span className="testimonial-card-special">
             {props.special}
           </span>
        </div>
      </div>
    </div>
    </>
  )
}
