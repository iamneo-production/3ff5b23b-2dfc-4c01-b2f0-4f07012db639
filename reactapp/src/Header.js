import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import { useStateValue } from './StateProvider'

function Header() {
  const [{basket},dispatch] =useStateValue();
  return (
    <div className='header'>


      <div className='header_nav'>
        <div className='header_option'>
          <span
            className='header_optionLineone'>
            E-Book
          </span>


        </div>
        <Link to='/'>
          <div className='header_option'>

            <span
              className='header_optionLineone'>
              Home
            </span>
          </div>
        </Link>
        <Link to='/cart'>
          <div className='header_option'>
            <span
              className='header_optionLineone'>
              Cart
            </span>
            <span className='header_optionLineTwoheader_basketCount'>
              {basket?.length}
            </span>
          </div>
        </Link>
        <div className='header_option'>
          <span
            className='header_optionLineone'>
            My order
          </span>
        </div>
        <Link to='/login'>
        <div className='header_option2'>
          <span
            className='header_optionLineone'>
            Logout
          </span>
        </div>
        </Link>


      </div>
    </div>
  )
}

export default Header