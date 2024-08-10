import React, { useState } from 'react';
import Modals from './Modals';
import Button from 'react-bootstrap/Button';

const NewForm = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(true);
  const handleShow = () => setShowModal(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modals
        show={showModal}
        handleClose={handleClose}
        title="Sign-up Form"
      >
        <form>
          <input type="email" className="form-control" placeholder="Email" aria-label="email" />
          <input type="password" className="form-control" placeholder="Password" aria-label="password" />
          <input type="password" className="form-control" placeholder="Confirm Password" aria-label="confirm-password" />
        </form>
      </Modals>
    </div>
  );
};

export default NewForm;
