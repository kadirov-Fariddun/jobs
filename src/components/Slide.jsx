import React from 'react';
import Slider from "react-slick";
// component TestimonialCard
import TestimonialCard from './TestimonialCard';
// import "slick-carousel/slick/slick.css"; 

// images 
import testimonialCard1Png from '../images/testimonial/card-1.png';
import testimonialCard2Png from '../images/testimonial/card-2.png';
import testimonialCard3Png from '../images/testimonial/card-3.png';


export default function Slide() {
    const settings = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive:[
          {
            breakpoint:1031,
            settings:{
              slidesToShow:2,
              slidesToScroll:2
            }
          },
          {
            breakpoint:600,
            settings:{
              slidesToShow:1,
              slidesToScroll:1
            }
          }
        ]
      };
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
    <div className="slider">
      <div className="container">
       <div className="slider-title">
       What They Says About Our Services
       </div>
           <Slider {...settings}>
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
           </Slider>
          
      </div>
    </div>
    </>
  );
}
