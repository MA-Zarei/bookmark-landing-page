import './Navcomponent.css'
import pic from '../images/logo-bookmark.svg'
import hambur from '../images/icon-hamburger.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import Container from 'react-bootstrap/Container';
import { Button , Nav , Navbar} from 'react-bootstrap';

function Navcomponent() {
  
  return (
    <>
      <style type="text/css">
        {`
        .btn-danger{
          background-color:hsl(0, 94%, 66%);
          border-color:hsl(0, 94%, 66%);
          color:white
        }
        .btn-xxl{
          padding:0rem 2rem;
        }
        .btn-danger:hover{
          background-color:white;
          color:hsl(0, 94%, 66%)
        }
        .nav-dark{
          color:red;
        }
        `}
      </style>
    <Navbar bg="white" expand="lg" className='mt-3' sticky="top" >
      <Container>
        <Navbar.Brand href="#top">
          <img src={pic} className='logo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" variant='dark'>
            <Nav.Link className='me-5' href="#features">FEATURES</Nav.Link>
            <Nav.Link className='me-5' href="#pricing">PRICING</Nav.Link>
            <Nav.Link className='me-5' href="#ff">CONTACT</Nav.Link>
            <Button variant="danger" size='xxl'>LOGIN</Button>
            <div className='d-lg-none text-center mt-3'>
              <img src={facebook} className='d-lg-none me-2 social'/>
              <img src={twitter} className='d-lg-none ms-2 social'/>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Navcomponent;
