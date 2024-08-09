import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Batman from '../assets/batman.png'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import Toasts from '../components/Toasts';
import CompOffCanvas from '../components/CompOffCanvas';
import Modals from '../components/Modals';
import Jobrole from '../components/Jobrole';
import Users from './Users';
import Alertbutton from '../components/Alertbutton';
import Spinner from '../components/spinners/Spinners';
import '../styles/componentStyle.css'
import ToolTips from '../components/ToolTip';
import Progressbars from '../components/Progressbars';
import NavTabs from '../components/NavTabs';
import Carousel from 'react-bootstrap/Carousel';
import Spinner3 from '../components/spinners/Spinner3';
import Spinner2 from '../components/spinners/Spinner2';
import Spinners from '../components/spinners/Spinners';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';



function Example() {
  const customSVG = "M25 5 L30 20 H20 Z";
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);

  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Set a delay of 3 seconds before showing the content
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      <h1 style={{textAlign:'center'}}>Component's page</h1>
      <div className='component-grid common-children'>
        <div className='modals'>
          <Modals />
        </div>
        {/* Toast config */}
        <div className='toasttest'>
          <Row>
            <Col md={6} className="mb-2">
              <h2>Popvers</h2>
              <Button onClick={toggleShowA} className="mb-2">
                Toggle popover <strong>with</strong> Animation
              </Button>
              <Toast show={showA} onClose={toggleShowA}>
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
              </Toast>
            </Col>
          </Row>
        </div>

        <div className='RealToast'>
          <h2>Toasts</h2>
          <Toasts toastMessage={'it is working'} position={'top-end'} show={show} onClose={() => { setShow(false) }} />
          <Button title='Click here' onClick={handleShow} >Click</Button>
        </div>

        <div className="off-canvas">
          <h2>OffCanvas</h2>
          <CompOffCanvas />
        </div>

        <div className='accrodion'>
          <h2>Accordion</h2>
          <Jobrole />
        </div>

        <div className='table-pag'>
          <h2>Table with pagination</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Users />
          </div>
        </div>

        <div className='alerts'>
          <h2>Alerts</h2>
          <Alertbutton />
        </div>

        <div className='spinners-carousel' style={{ display: 'flex', backgroundColor: 'black', color: 'white' }}>
          <h2>Spinner Carousel</h2>
          <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                <Spinners
                  size="60px"
                  color="white"
                  svgPath={customSVG}
                />
              </div>
              <Carousel.Caption>
                {/* <h3>First Slide</h3> */}
                <p>circle-round</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                <Spinner2
                  size="60px"
                  color="white"
                  svgPath={customSVG}
                />
              </div>
              <Carousel.Caption>
                {/* <h3>Second Slide</h3>
                <p>Description for the second spinner.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex justify-content-center align-items-center" style={{ height: '200px' }}>
                <Spinner3
                  size="60px"
                  color="white"
                  svgPath={customSVG}
                />
              </div>
              <Carousel.Caption>
                {/* Description here */}

              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className='spinners' style={{ display: 'flex', alignItems: 'center' }}>
          <h2>Spinner</h2>
          <Spinner
            size="60px"
            color="black"
            svgPath={customSVG}
          />
        </div>


        <div className='Tooltip'>
          <h2>ToolTips</h2>
          <ToolTips placement={'right'} variant={'primary'} tipMessage={'Tooltip is working'} />
        </div>
        <div className='Progress-bar'>
          <h2>Progress-bar</h2>
          <Progressbars />
        </div>
        <div className='Tabs'>
          <h2>Tabs</h2>
          <NavTabs />
        </div>

        <div className="skeleton">
          <h2>Skeleton</h2>
          <div className="d-flex justify-content-center">
            <Card style={{ width: '18rem' }}>
              {!showContent ? (
                <div style={{ height: '180px' }}>
                  <Placeholder style={{ width: '100%', height: '100%' }} animation="glow">
                    <Placeholder xs={12} />
                  </Placeholder>
                </div>
              ) : (
                <Card.Img variant="top" src={Batman} />
              )}
              <Card.Body>
                {showContent ? (
                  <>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the
                      bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </>
                ) : (
                  <>
                    <Placeholder as={Card.Title} animation="glow">
                      <Placeholder xs={6} />
                    </Placeholder>
                    <Placeholder as={Card.Text} animation="glow">
                      <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                      <Placeholder xs={6} /> <Placeholder xs={8} />
                    </Placeholder>
                    <Placeholder.Button variant="primary" xs={6} />
                  </>
                )}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>

  );
}

export default Example;