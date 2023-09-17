import React from 'react';
import { NavLink } from 'react-router-dom';
// components
import TitleSection from './TitleSection';
import Category from './Category';
import Cards from './Cards';
import Card from './Card';
import Slide from './Slide';
// images
import envatoPng  from "../images/brands/envato.png";
import forbesPng  from "../images/brands/forbes.png";
import geekPng from "../images/brands/geek.png";
import slackPng from "../images/brands/slack.png";
import usaTodayPng from "../images/brands/usa-today.png";
// jobs data
import jobsData from '../jobsData';





export default function Home() {
  return (
    <>
    <div className="home">
        <TitleSection
        key={1}
        title='Find Exciting Jobs Today.'
        text='Get the most exciting part time jobs from the best cities of Europe and UAE.'
        home={true}
        brands={true}
        />
    <Category
    key={2}
    class='explore-jobs'
    title='Explore Jobs by Category'
    text='Get the most exciting jobs from the best cities of
    Europe and UAE and grow your career fast with others.'
    cardLen={8}
    cardTitle={[
      'Hotel',
      'Restaurants',
      'Beauty Salons',
      'Trade Centers',
      'Real Estate',
      'Sports Coaches',
      'Babysitting',
      'Cleaning'
    ]}
    cardNumber={[]}
    cardText={['37 Jobs','50 Jobs','45 Jobs','55 Jobs','40 Jobs','30 Jobs','38 Jobs','37 Jobs']}
    />
    <Cards
    key={3}
    title='Our Featured Jobs'
    text='Check our featured jobs from popular companies. Start applying now.'
    card={[
      <Card 
      key={4}
      id={1}
      adres='Paris, France'
      title='Professional Hairdresser'
      text='Chorocon Salon.'
      date='1 Week ago'
      btnText='Apply Now'
      />,
      <Card 
      key={5}
      id={2}
      adres='Paris, France'
      title='Project Manager'
      text='Construction LLC.'
      date='1 Week ago'
      btnText='Apply Now'
      />,
      <Card 
      key={6}
      id={3}
      adres='Paris, France'
      title='3D Interior Designer'
      text='Construction LLC.'
      date='1 Week ago'
      btnText='Apply Now'
      />,
      <Card 
      key={7}
      id={4}
      adres='Paris, France'
      title='Professional Hairdresser'
      text='Chorocon Salon.'
      date='1 Week ago'
      btnText='Apply Now'
      />,
      <Card 
      key={8}
      id={5}
      adres='Paris, France'
      title='Project Manager'
      text='Construction LLC.'
      date='1 Week ago'
      btnText='Apply Now'
      />,
      <Card 
      key={9}
      id={6}
      adres='Paris, France'
      title='3D Interior Designer'
      text='Construction LLC.'
      date='1 Week ago'
      btnText='Apply Now'
      />
    ]}
    />
    {/* Urgents jobs */}
    <Cards
    key={10}
    class='urgent-job'
    title='Our Urgent Jobs'
    text='Check our featured jobs from popular companies. Start applying now. '
    card={[
      <Card 
      key={11}
      id={7}
      adres='Paris, France'
      title='Someone to Clean My Room'
      text='Chorocon Salon.'
      date='1 Week ago'
      btnText='Apply Now'
      />,
      <Card 
      key={12}
      id={8}
      adres='Paris, France'
      title='Someone to Clean My Room'
      text='Chorocon Salon.'
      date='1 Week ago'
      btnText='Apply Now'
      />,
      <Card 
      key={13}
      id={9}
      adres='Paris, France'
      title='Someone to Clean My Room'
      text='Chorocon Salon.'
      date='1 Week ago'
      btnText='Apply Now'
      />,
    ]}
    />
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
    </div>
    <Slide key={15} />

    </>
  )
}
