import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import Logo from '../assets/white logo.png'
import '../Styles/Nav.scss'
import { MdAccountCircle } from "react-icons/md";
import { IoMdArrowDropdown } from "react-icons/io";
import { LuLogIn } from "react-icons/lu";
import { IoPersonOutline } from "react-icons/io5";
import { MdPersonAddAlt } from "react-icons/md";
import { IoDiamondOutline } from "react-icons/io5";


const Nav = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const [NavHighlight, setNavHighlight] = useState('Home')
  const [loggedIn, setLoggedIn] = useState(true)
  useEffect(()=>{
    setNavHighlight(location.pathname === "/" ? 'Home':'' || location.pathname === '/about' ? 'HIW':'' || location.pathname === '/report' ? 'RAP':'')
  }, [location])
  return (
    <nav className='nav'>
            <a href="/"><img src={Logo} alt="myLawyer" className='logo_nav'/></a>
        <ul>
            <li className={`nav_options ${NavHighlight === "Home" ? 'nav_selected': null}`} onClick={(e)=>{
              e.preventDefault()
              navigate("/")
              setNavHighlight('Home')
            }}><a href="/">Home</a></li>
            <li className={`nav_options ${NavHighlight === "HIW" ? 'nav_selected': null}`} onClick={(e)=>{
              e.preventDefault()
              navigate("/about")
              setNavHighlight('HIW')
            }}><a href="/">How it Works?</a></li>
            <li className={`nav_options ${NavHighlight === "RAP" ? 'nav_selected': null}`} onClick={(e)=>{
              e.preventDefault()
              navigate("/report")
              setNavHighlight('RAP')
            }}><a href="/">Report A Problem</a></li>
        </ul>
        <div className="right_nav">
          <a className="free_cta" href='/'>Get Free Consultation</a>
        <div className="account"><MdAccountCircle size={30} color={'#f1f1f1'} className='account_circle'/><IoMdArrowDropdown size={20} color='#f1f1f1' className='arrow_nav_account'/>
            {loggedIn ? <div className="ctas">
        <a href="/" className='cta1_nav' onClick={(e)=>{
              e.preventDefault()
              navigate("/account")
            }}>Account <IoPersonOutline size={20}/></a>
    <a href="/" className='cta_nav' onClick={(e)=>{
              e.preventDefault()
              navigate("/")
              setLoggedIn(false)
            }}>Get Pro<IoDiamondOutline size={20}/></a>
    <a href="/" className='cta_nav' onClick={(e)=>{
              e.preventDefault()
              navigate("/")
              setLoggedIn(false)
            }}>Log Out <LuLogIn size={20}/></a>
    </div>:<div className="ctas">
        <a href="/" className='cta1_nav' onClick={(e)=>{
              e.preventDefault()
              navigate("/auth/login")
              setLoggedIn(true)
            }}>Login <LuLogIn size={20}/></a>
    <a href="/" className='cta_nav' onClick={(e)=>{
              e.preventDefault()
              navigate("/auth/signup")
              setLoggedIn(true)
            }}>Signup <MdPersonAddAlt size={20}/></a>
    </div>}
       </div>
        </div>
    
    </nav>
  )
}

export default Nav