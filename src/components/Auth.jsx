import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Auth(props) {
  return (
    <>
    <div className='auth'>
      <div className="auth-grid">
        <div className={`auth-bgi ${props.class}`} ></div>
        <div className="auth-form">
            <form action="#">
                <div className="auth-title">{props.title}</div>
                <div className="auth-text">{props.text}</div>
                {
                    props.register ?
                <label>
                    <span className="auth-input-title">Name *</span>
                    <input type="text" name="name" placeholder='Ex: John Doe' autoComplete='off'/>
                </label>:''
                }
                <label>
                    <span className="auth-input-title">{props.emailTitle}</span>
                    <input type="text" name="email" placeholder='Ex: john@email.com' autoComplete='off'/>
                </label>
                 {
                    props.register||props.signIn ?
                <label>
                    <span className="auth-input-title">{props.passTitle}</span>
                    <input type="text" name="password" placeholder='i.e. IAmthepreciouspass123' autoComplete='off'/>
                </label>:''
                }
                {
                    props.register ? 
                    <label>
                    <span className="auth-input-title">Confirm Password *</span>
                    <input type="text" name="password" placeholder='i.e. IAmthepreciouspass123' autoComplete='off'/>
                </label>:''
                }
                {
                    props.register || props.signIn?
                <label class='label-agree'>
                    <input type="checkbox" name="agree" />
                    <span>{props.agree} {props.register?<a href='#'>Terms & Conditions</a>:''}</span>
                </label>:''
                }
                <button className="auth-btn">
                    {!props.register||!props.signIn?'Send reset link':'Submit'}
                </button>
                
                    {props.register ?
                    <div className="auth-help">
                    Already have an account? 
                    <NavLink to='/sign'>Sign in</NavLink>
                    </div>:props.signIn ?
                    <div className="auth-help">
                        Forgot password? 
                    <NavLink to='/reset'>Reset now</NavLink>
                    </div>:
                    <div className="auth-help">
                        Remember password? 
                    <NavLink to='/sign'>Sign in now</NavLink>
                    </div>}
                
            </form>
        </div>
      </div>
    </div>
    </>
  )
}
