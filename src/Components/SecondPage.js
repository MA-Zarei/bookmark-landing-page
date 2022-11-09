import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './SecondPage.css'
import pic1 from '../images/illustration-features-tab-1.svg'
import pic2 from '../images/illustration-features-tab-2.svg'
import pic3 from '../images/illustration-features-tab-3.svg'



function SecondPage() {
  return (
    <div className='container scp' id='features'>
        <div className='row justify-content-center my-5'>
            <p className='feature'>Features</p>
            <p className='featured w-75'>
                Our aim is to make it quick and easy for you to access your favortite websites. Your bookmarks sync between your devices so you can access them on the go.
            </p>
        </div>
        <div>
            <Tabs
            defaultActiveKey="one"
            id="uncontrolled-tab-example"
            className="mb-3"
            justify
            >
        <Tab eventKey="one" title="Simple Bookmarking">
                <div className='row'>
                    <div className='col-md-12 col-lg-6 tabhero text-center mt-5'>
                        <img src={pic1} className='hero'/>
                        <div className='tabblue'></div>
                    </div>
                    <div className='col-md-12 col-lg-1'></div>
                    <div className='col-md-12 col-lg-5 d-flex  firsttext text-center align-items-center justify-content-center'>
                        <h1 className='tabtitle'>Bookmark in one click</h1>
                        <p className='tabtext'>
                            Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favorite sites.
                        </p>
                        <button className='tabbtn'>
                            <a href='#' className='tablink'>More    Info</a>
                        </button>
                    </div>
                </div>
        </Tab>
        <Tab eventKey="two" title="Speedy Searching">
            <div className='row'>
                <div className='col-md-12 col-lg-6 tabhero text-center mt-5'>
                    <img src={pic2} className='hero'/>
                    <div className='tabblue'></div>
                </div>
                <div className='col-md-12 col-lg-1'></div>
                <div className='col-md-12 col-lg-5 d-flex  firsttext text-center align-items-center justify-content-center'>
                    <h1 className='tabtitle'>Intelligent search</h1>
                    <p className='tabtext'>
                        Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
                    </p>
                    <button className='tabbtn'>
                        <a href='#' className='tablink'>More    Info</a>
                    </button>
                </div>
            </div>
        </Tab>
        <Tab eventKey="three" title="Easy Sharing">
            <div className='row'>
                <div className='col-md-12 col-lg-6 tabhero text-center mt-5'>
                    <img src={pic3} className='hero'/>
                    <div className='tabblue'></div>
                </div>
                <div className='col-md-12 col-lg-1'></div>
                <div className='col-md-12 col-lg-5 d-flex  firsttext text-center align-items-center justify-content-center'>
                    <h1 className='tabtitle'>Share your bookmarks</h1>
                    <p className='tabtext'>
                        Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
                    </p>
                    <button className='tabbtn'>
                        <a href='#' className='tablink'>More Info</a>
                    </button>
                </div>
            </div>
        </Tab>
        </Tabs>
        </div>
    </div>
  )
}

export default SecondPage