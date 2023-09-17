import React from 'react';
import { NavLink } from 'react-router-dom';
export default function Card(props) {
  return (
    <>
    <div className="card">
        <div className="card-map">
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
               <path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"></path>
           </svg>
           {props.adres}
        </div>
        <div className="card-title">
            {props.title}
        </div>
        <div className="card-text">
            By <span>{props.text}</span>
        </div>
        <div className="card-footer">
            <div className="card-footer-date">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM5 7h14v2H5V7z"></path>
               </svg>
               {props.date}
           </div>
           <NavLink to={'job-'+props.id} className="card-footer-btn">
              {props.btnText}
           </NavLink>
        </div>
    </div>
    </>
  )
}
