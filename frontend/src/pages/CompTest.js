import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import Toasts from '../components/Toasts';
import CompOffCanvas from '../components/CompOffCanvas';
import Modals from '../components/Modals';

import Jobrole from '../components/Jobrole';
import Users from './Users';
import Alertbutton from '../components/Alertbutton';


function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(true);

  const toggleShowA = () => setShowA(!showA);
  const toggleShowB = () => setShowB(!showB);

  return (
    <div style={{ padding: '4rem', gap: '1rem', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr' }}>
      {/* <div className='modaltest'>
        <h1>Modal</h1>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      {/* Modal config */}

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        </div> */}
      <Modals />


{/* Toast config */}
<div className='toasttest'>
<Row>
      <Col md={6} className="mb-2">
      <h1>Popvers</h1>
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

<div className='RealToast' style={{borderStyle:'solid', borderColor:'black'}}>
<h2>Toasts</h2>
<Toasts toastMessage={'it is working'} position={'top-end'} />
</div>

      <div className="off-canvas">

      <h2>OffCanvas</h2>
        <CompOffCanvas />
  
      </div>
<div style={{display:'grid', gridTemplateColumns:'1fr '}}>

      <Jobrole/>
      <Users/>
      <Alertbutton />
</div>
    </div>
  );
}

export default Example;