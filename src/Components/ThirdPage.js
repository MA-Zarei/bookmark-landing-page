import React from 'react'
import './ThirdPage.css'
import dots from '../images/bg-dots.svg'
import chrome from '../images/logo-chrome.svg'
import firefox from '../images/logo-firefox.svg'
import opera from '../images/logo-opera.svg'

function ThirdPage() {
  return (
    <div className='container justify-content-center mt-5' id='pricing'>
        <div className='row'>
            <p id='thtitle'>Download the extension</p>
            <p id='thdes'>
                We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
            </p>
        </div>
        <div className='row justify-content-center'>
            <div className='col-md-12 col-lg-4 t'>
                <div className='cardd my-5'>
                    <img src={chrome} />
                    <p>Add to Chrome</p>
                    <p>Minimum version 62</p>
                    <img src={dots} className='devider'/>
                    <a href='#'> Add & Install Extension</a>
                </div>
            </div>
            <div className='col-md-12 col-lg-4 t'>
                <div className='cardd my-5'>
                    <img src={firefox} />
                    <p>Add to Firefox</p>
                    <p>Minimum version 55</p>
                    <img src={dots} className='devider'/>
                    <a href='#'> Add & Install Extension</a>
                </div>
            </div>
            <div className='col-md-12 col-lg-4 t'>
                <div className='cardd my-5'>
                    <img src={opera} />
                    <p>Add to Opera</p>
                    <p>Minimum version 46</p>
                    <img src={dots} className='devider'/>
                    <a href='#'> Add & Install Extension</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ThirdPage