import React, { useState } from 'react';
// components
import TitleSection from './TitleSection';
import TestimonialCard from './TestimonialCard';
// images 
import testimonialCard1Png from '../images/testimonial/card-1.png';
import testimonialCard2Png from '../images/testimonial/card-2.png';
import testimonialCard3Png from '../images/testimonial/card-3.png';
import videos from '../images/vid.mp4';

export default function Testimonial() {
    
    let data = [
        {
          info:`
          “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
           Velit officia consequat duis enim velit mollit.
           Exercitation veniam consequat.”
          `,
          name:'Wade Warren',
          special:'UI Designer, Adobe',
          src:testimonialCard1Png
        },
        {
          info:`
          “Velit officia consequat duis enim velit mollit.
           Exercitation veniam consequat.
           Amet minim mollit non deserunt ullamco.”
          `,
          name:'Theresa Webb',
          special:'UI Designer, Adobe',
          src:testimonialCard2Png
        },
        {
          info:`
          “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
           Velit officia consequat duis enim velit mollit.
           Exercitation veniam consequat.”
          `,
          name:'Floyd Miles',
          special:'UI Designer, Adobe',
          src:testimonialCard3Png
        },
        {
            info:`
            “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
             Velit officia consequat duis enim velit mollit.
             Exercitation veniam consequat.”
            `,
            name:'Wade Warren',
            special:'UI Designer, Adobe',
            src:testimonialCard1Png
          },
          {
            info:`
            “Velit officia consequat duis enim velit mollit.
             Exercitation veniam consequat.
             Amet minim mollit non deserunt ullamco.”
            `,
            name:'Theresa Webb',
            special:'UI Designer, Adobe',
            src:testimonialCard2Png
          },
          {
            info:`
            “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
             Velit officia consequat duis enim velit mollit.
             Exercitation veniam consequat.”
            `,
            name:'Floyd Miles',
            special:'UI Designer, Adobe',
            src:testimonialCard3Png
          },
          {
            info:`
            “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
             Velit officia consequat duis enim velit mollit.
             Exercitation veniam consequat.”
            `,
            name:'Wade Warren',
            special:'UI Designer, Adobe',
            src:testimonialCard1Png
          },
          {
            info:`
            “Velit officia consequat duis enim velit mollit.
             Exercitation veniam consequat.
             Amet minim mollit non deserunt ullamco.”
            `,
            name:'Theresa Webb',
            special:'UI Designer, Adobe',
            src:testimonialCard2Png
          },
          {
            info:`
            “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
             Velit officia consequat duis enim velit mollit.
             Exercitation veniam consequat.”
            `,
            name:'Floyd Miles',
            special:'UI Designer, Adobe',
            src:testimonialCard3Png
          }
      ];

  return (
    <>
    <div className="testimonial">
       <TitleSection
        key={1}
        title='Testimonials'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget odio cras at aliquam id. Et maecenas.'
        home={false}
        brands={false}
         />
      <div className="container">
          <div className="testimonial-title">
          People We Helped To Find TheirBest Job
          </div>
          <div className="testimonial-cards">
                 {data.map((item,index)=>{
                    return(<TestimonialCard 
                    key={index}
                    info={item.info}
                    name={item.name}
                    src={item.src}
                    special={item.special}
                    />
                    )
                   })}
          </div>
        </div>
        <div className="testimonial-video">
            <div className="testimonial-video-text">
            “Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”
            <span><span></span>Elithabeth Doe</span>
            </div>
            <div className="testimonial-video-play">
            
            <video src={videos} id='vid' loop autoPlay muted controls></video>
                
                <div className="play-btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
                    <path d="M7 6v12l10-6z"></path>
                </svg>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
