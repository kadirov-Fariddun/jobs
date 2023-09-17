import React from 'react';
// components
import TitleSection from './TitleSection';
import Category from './Category';
// images
import picture1 from '../images/about-pictures/picture-1.jpg';
import picture2 from '../images/about-pictures/picture-2.jpg';
import picture3 from '../images/about-pictures/picture-3.jpg';
import picture4 from '../images/about-pictures/picture-4.jpg';
import picture5 from '../images/about-pictures/picture-5.jpg';
import picture6 from '../images/about-pictures/picture-6.jpg';
// icons
import aboutIconSvg1 from '../images/about-pictures/icons/browse.svg';
import aboutIconSvg2 from '../images/about-pictures/icons/hours.svg';
import aboutIconSvg3 from '../images/about-pictures/icons/baby.svg';
import aboutIconSvg4 from '../images/about-pictures/icons/case.svg';
import aboutIconSvg5 from '../images/about-pictures/icons/gift.svg';
import aboutIconSvg6 from '../images/about-pictures/icons/dollor.svg';

export default function About() {
  return (
    <>
    <div className="about">
    <TitleSection
        key={1}
        title='About Us'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget odio cras at aliquam id. Et maecenas.'
        home={false}
        brands={true}
        />
        <div className="about-titles">
          <div className="container">
            <div className="about-title">
              Who We Are
            </div>
            <div className="about-text">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa, venenatis non sit neque.
                 Dignissim etiam arcu quis sapien posuere ac facilisis turpis. Nulla orci amet, aenean donec.
                  Neque turpis vehicula arcu interdum consequat, eu et. Morbi nullam mi hac aliquam. Dui,
                   volutpat volutpat donec ut lectus tortor gravida amet id.Mauris.
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Massa, venenatis non sit neque. Dignissim etiam arcu quis sapien posuere ac facilisis turpis.
              Nulla orci amet, aenean donec. Neque turpis vehicula arcu interdum consequat, eu et.
              Morbi nullam mi hac aliquam.
              Dui, volutpat volutpat donec ut lectus tortor gravida amet id. Mauris.
              </p>
            </div>
          </div>
        </div>
        <div className="about-pictures">
          <div className="container">
          <div className="about-pictures-title">
          See some pictures of our users who found their dream job.
          </div>
          <div className="about-pictures-flex">
            <div>
            <img src={picture1} alt="picture" className='picture-1'/>
            </div>
            <div>
            <img src={picture2} alt="picture" className='picture-2'/>
            <img src={picture3} alt="picture" className='picture-3'/>
            </div>
            <div>
            <img src={picture4} alt="picture" className='picture-4'/>
            <img src={picture5} alt="picture" className='picture-5'/>
            </div>
            <div>
            <img src={picture6} alt="picture" className='picture-6'/>
            </div>
          </div>
          </div>
        </div>
        {/* cotegories */}
        <Category
        class='about-cards'
        cardLen={6}
        title=''
        text=''
        cardNumber={
          [
            <img src={aboutIconSvg1} alt="icon"/>,
            <img src={aboutIconSvg2} alt="icon"/>,
            <img src={aboutIconSvg3} alt="icon"/>,
            <img src={aboutIconSvg4} alt="icon"/>,
            <img src={aboutIconSvg5} alt="icon"/>,
            <img src={aboutIconSvg6} alt="icon"/>
          ]
        }
        cardTitle={[
          'Browse Hundrens Of Jobs',
          'Flexible hours',
          'Possibility To Work Remotly',
          'Work and travel',
          'Yearly bonuses',
          'Smart salary'
        ]}
        cardText={Array(6).fill('A team of experts passionate about product management.')}
        />
      {/* working procces */}
       {/*  working procces */}
    <Category
    key={14}
    class='working-procces'
    title='Our Working Process'
    text=''
    cardLen={4}
    cardTitle={[
      'Register',
      'Submit Resume',
      'Search For  a Job',
      'Apply'
    ]}
    cardNumber={[1,2,3,4]}
    cardText={[
      'Enterprise definition is - a project or undertaking that',
      'Enterprise definition is - a project or undertaking that',
      'Enterprise definition is - a project or undertaking that',
      'Enterprise definition is - a project or undertaking that'
    ]}
    />
    <div className="about-users-count">
      <div className="container">
        <div className="about-users-count-flex">
          <div className="about-users-count-card">
            <span>
            30k+
            </span>
            <span>
              Active<br/>Users
            </span>
          </div>
          <div className="about-users-count-card">
            <span>
            20k+
            </span>
            <span>
            Open Job<br/>Positions
            </span>
          </div>
          <div className="about-users-count-card">
            <span>
            5k
            </span>
            <span>
            Popular<br/>Companies
            </span>
          </div>
          <div className="about-users-count-card">
            <span>
            10k+
            </span>
            <span>
            Happy<br/>Clients
            </span>
          </div>
        </div>
      </div>
     </div>
    </div>
    </>
  )
}
