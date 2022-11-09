import React from 'react'
import './Footer.css'
import pic from '../images/logo-bookmark.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'

function Footer() {
  return (
    <div className='container-fluid justify-content-center'>
        <div className=' row' id='ff'>
            <p id='ftext'>35.000+ Already Joined</p>
            <p id='stext'>Stay up-to-date with what we're doing</p>
            <div className='row' id='sf'>
              <form>
                <input type={'email'} id='etext' placeholder='Enter Your Email here'/>
                <button id='ebtn'>Contact Us</button>
              </form>
            </div>
        </div>
        <div className='row pb-3' id='fsf'>
          <div className='col-md-12 col-lg-2 mt-3'>
            <a href='#top'><img src={pic} id='pic'  /></a>
          </div>
          <div className='col-md-12 col-lg-1 mt-3'>
            <a href='#features'>features</a>
          </div>
          <div className='col-md-12 col-lg-1 mt-3'>
            <a href='#pricing'>pricing</a>
          </div>
          <div className='col-md-12 col-lg-1 mt-3'>
            <a href='#ff'>contact</a>
          </div>
          <div className='col-md-12 col-lg-1'></div>
          <div className='col-md-12 col-lg-3'></div>
          <div className='col-md-12 col-lg-2 mt-3'>
            <img src={facebook}  id='soc1'/>
            <img src={twitter}  id='soc2'/>
          </div>
          <div className='col-md-12 col-lg-1'></div>
        </div>
    </div>
  )
}

export default Footer