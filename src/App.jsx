import { useState,React } from 'react';
import { Routes,Route,NavLink } from 'react-router-dom';
// components
import Home from './components/Home';
import Head from './components/Head';
import Footer from './components/Footer';
import About from './components/About';
import Jobs from './components/Jobs';
import Job from './components/Job';
import Contact from './components/Contact';
// data jobs
import jobsData from './jobsData';
import Testimonial from './components/Testimonial';
import Auth from './components/Auth';


function App() {

  return (
    <>
    {/* header components */}
    <Head 
            class='header'
            adaptiveMenu={true}
            menuItems={
                <>
                <NavLink to="/">
                    Home
                </NavLink>
                 <NavLink to="/about">
                 About Us
             </NavLink>
              <NavLink to="/jobs">
              Our Jobs
          </NavLink>
          <NavLink to="/testimonial">
          Testimonials     
          </NavLink>
          <NavLink to="/contact">
          Contact Us    
          </NavLink>
          </>
            }
            buttons={
                <>
                <NavLink to="/sign">
                    Sign In
                </NavLink>
                <NavLink className='header-register-btn' to="/register">
                    Register
                </NavLink>
                </>
            }
            />
     {/* header components end */}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/register" element={
      <Auth 
      class='reg'
      register={true}
      title='Register'
      text='No credit card required'
      emailTitle='Email *'
      passTitle='Password *'
      agree='I agree to the'
      />} />
      // sign in
      <Route path="/sign" element={
         <Auth 
         class='sin'
         signIn={true}
         title='Sign in'
         text='Enter your account details below'
         emailTitle='Email'
         passTitle='Password'
         agree='Keep me signed in'
         />} />
      <Route path="/reset" element={
         <Auth 
         class='res'
         title='Reset Password'
         text='Enter your account details below'
         emailTitle='Email Adress'
         />
      } />
      {jobsData.map(item => {
        return(
        <Route path={'/job-'+item.id} element={
        <Job 
        key={item.id}
        category={item.category}
        title={item.title}
        text={item.text}
        responsibilities={item.responsibilities}
        requiredSkills={item.requiredSkills}
        aboutCompany={item.aboutCompany}
        adres={item.adres}
        email={item.email}
        phone={item.phone}
        salary={item.salary}
        />
        }/>
        )     
})}
    <Route path='/testimonial' element={<Testimonial/>} />
    <Route path='/contact' element={<Contact/>} />
    </Routes>
    {/* footer */}
    <Footer/>
    {/* footer end */}
    
    </>
  )
}

export default App;
