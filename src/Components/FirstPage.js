import './FirstPage.css'
import pic from '../images/illustration-hero.svg'


function FirstPage() {

  return (
    <>
    <div className='container-fluid mt-5'>
      <div className='row' dir='rtl'>
        <div className='col-md-12 col-lg-6 firsthero text-center'>
          <img src={pic} className='hero'/>
          <div className='blue'></div>
        </div>
        <div className='col-md-12 col-lg-6 d-flex  firsttext text-center align-items-center justify-content-center'>
          <h1>A Simple Bookmark Manager</h1>
          <p className='mt-2'>
            A clean and simple interface to organize your favorite websites. Open a new browser tab and see your sites load instantly. Try it for free.
          </p>
          <div className='row bttn justify-content-center'>
            <div className='col-md-12 col-lg-5 chrome d-flex text-center align-items-center justify-content-center m-1'>
              <a href='#' className='l'>Get it on Chrome</a>
            </div>
            <div className='col-md-12 col-lg-5 firefox d-flex text-center align-items-center justify-content-center m-1'>
              <a href='#' className='l'>Get it on Firefox</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default FirstPage;
