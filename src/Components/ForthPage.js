import React from 'react'
import './ForthPage.css'
import Accordion from 'react-bootstrap/Accordion';

function ForthPage() {
  return (
    <div className='container justify-content-center mt-5'>
        <div className='row'>
            <p id='ftitle'>Frequently Asked Questions</p>
            <p id='fdes'>Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>
        </div>
        <div className='row mt-3'>
            <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0">
                <Accordion.Header>What is Bookmark?</Accordion.Header>
                <Accordion.Body>
                    In the context of the World Wide Web, a bookmark is a Uniform Resource Identifier that is stored for later retrieval in any of various storage formats. All modern web browsers include bookmark features.
                    </Accordion.Body>
                </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>How can I request a new browser?</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Is there a mobile app?</Accordion.Header>
                <Accordion.Body>
                    Mi ipsum faucibus vitae aliquet nec ullamcorper sit amet. Curabitur gravida arcu ac tortor dignissim convallis aenean. Enim neque volutpat ac tincidunt vitae semper quis lectus nulla. A condimentum vitae sapien pellentesque habitant morbi tristique senectus. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Orci porta non pulvinar neque laoreet. Viverra accumsan in nisl nisi scelerisque. Erat velit scelerisque in dictum non consectetur a erat nam. Id velit ut tortor pretium viverra suspendisse potenti nullam. Sagittis eu volutpat odio facilisis mauris sit amet. Ante metus dictum at tempor commodo ullamcorper. Volutpat blandit aliquam etiam erat velit. In nibh mauris cursus mattis. Odio facilisis mauris sit amet massa vitae tortor.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>What about other Chromium browsers?</Accordion.Header>
                <Accordion.Body>
                    Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Orci porta non pulvinar neque laoreet. Viverra accumsan in nisl nisi scelerisque. Erat velit scelerisque in dictum non consectetur a erat nam. Id velit ut tortor pretium viverra suspendisse potenti nullam. Sagittis eu volutpat odio facilisis mauris sit amet. Ante metus dictum at tempor commodo ullamcorper. Volutpat blandit aliquam etiam erat velit. In nibh mauris cursus mattis. Odio facilisis mauris sit amet massa vitae tortor.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
        </div>
        <div className='row justify-content-center mt-5'>
            <a href='#' className='fa'>
                More Info
            </a>
        </div>
        <br/><br/><br/><br/><br/>
    </div>
  )
}

export default ForthPage