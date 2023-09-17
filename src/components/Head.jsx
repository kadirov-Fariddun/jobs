import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function Head(props) {
  const [showMenu,setShowMenu] = useState(false);
  const linkMenu = document.querySelectorAll('.header .navbar a');
  const authBtns = document.querySelectorAll('.header .header-buttons a');
  // убераем актив класс с меню
  function removeActiveNavbar (linkMenu) {
    for(let i = 0 ; i<linkMenu.length;i++){
      linkMenu[i].onclick = ()=>{
        setShowMenu(false);
      }
    }
  };
  removeActiveNavbar(linkMenu);
  removeActiveNavbar(authBtns);
  return (
    <>
    <div className={`${props.class} ${showMenu?'show-menu':''}`}>
      <div className="container">
        <div className={props.class+'-flex'}>
          <div className="logo">
            <NavLink to="/" onClick={()=>setShowMenu(false)}>LOGO</NavLink>
          </div>
          <nav className="navbar">
            {props.menuItems}
          </nav>
          <div className={props.class+'-buttons'}>
            {props.buttons}
          </div>
         
        </div>
      </div>
    </div>
    {props.adaptiveMenu ? 
          <button className='menu-btn' onClick={()=>{
            showMenu?setShowMenu(false):setShowMenu(true)
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </button>:''}
    </>
  )
}
