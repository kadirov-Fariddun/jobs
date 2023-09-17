import React from 'react';
import  envatoPng  from "../images/brands/envato.png";
import  forbesPng  from "../images/brands/forbes.png";
import  geekPng  from "../images/brands/geek.png";
import  slackPng  from "../images/brands/slack.png";
import  usaTodayPng  from "../images/brands/usa-today.png";

export default function TitleSection(props) {
  return (
    <>
    <section className="title-section">
        <div className="container">
            <div className="title-section-title">
                {props.title}
            </div>
            <div className="title-section-text">
                {props.text}
            </div>
            {props.home ? 
            <div className="title-section-info">
                <div>
                    <span>Location</span>
                    <p>Enter preferred location</p>
                </div>
                <div>
                    <span>Type</span>
                    <p>What kind of role do you want?</p>
                </div>
                <a href="#">
                Explore Now
                </a>
            </div>
            :''
        }
        </div>
    </section>
    {props.brands ? 
    <div className="brands">
        <div className="container">
          <div className="brands-flex">
             <img src={slackPng} alt="company logotype" />
             <img src={geekPng} alt="company logotype" />
             <img src={forbesPng} alt="company logotype" />
             <img src={usaTodayPng} alt="company logotype" />
             <img src={envatoPng} alt="company logotype" />
          </div>
        </div>
    </div>
    :''}
    </>
  )
}
