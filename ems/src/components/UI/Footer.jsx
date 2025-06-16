import React from 'react'
import   FooterApi from '../../Api/footerApi.json'
import { MdPlace } from 'react-icons/md'
import { IoCallSharp } from 'react-icons/io5'
import { TbMailPlus } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'
export const Footer = () => {
  const footerIcon = {
    MdPlace:<MdPlace/>,
    IoCallSharp:<IoCallSharp/>,
    TbMailPlus:<TbMailPlus/>
  }
  return (
    <footer className='footer-Section'>
      <div className='container'>
        {
          FooterApi.map((curData,index)=>{
            const {icon,title,details} = curData;
            return( 
            <div className='footer-contact' key={index}>
              <div className='icon'>{footerIcon[icon]}</div>
              <div className='footer-contact-text'>
                <p className='p1'>{title}</p>
                <p className='p2'>{details}</p>
              </div>
            </div>
          )})
        }
      </div>
      <div className='copyright-area'>
        <div className='container'>
          <div className='grid grid-two-cols'>
            <div className='copyright-text'>
              <p className='copyright-text1'>All Right Reserved
                <NavLink to="https://www.youtube.com/channel/UCh9VcYhJ8XDy7luJaUki_HA" target='_blank' className="navbar1">
                Jaat Jiiiii</NavLink>
              </p>
            </div>
            <div className='copyright-text2'>
              <ul>
                <li>
                  <NavLink to="/"  className="navbar">Home</NavLink>
                </li>
                <li>
                  <NavLink to="https://www.instagram.com/kuldeep_jaat_j?igsh=MXBzaDlleTN1NGY0dQ==" target='_blank'  className="navbar">
                    Social
                  </NavLink>
                </li>
                <li>
                  <NavLink to="https://www.instagram.com/kuldeep_jaat_j?igsh=MXBzaDlleTN1NGY0dQ==" target='_blank' className="navbar">
                    Source code
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" target='_blank' className="navbar">
                   Contect
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}



//    https://www.youtube.com/channel/UCh9VcYhJ8XDy7luJaUki_HA