import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Preview from './Preview.js'
import '../App.css'
import Cookies from "js-cookie";
export default function PreviewModal(props) {
  const isAuthenticated = !!Cookies.get("token");
  if (!isAuthenticated) {
    props.history.push("/");
  }
  const [show, setShow] = useState(false);
  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Preview
      </Button>
      <Modal
        show={show}
        scrollable={true}
        onHide={() => setShow(false)}
        dialogClassName="modal-width"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Preview 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Preview/>
        </Modal.Body>
      </Modal>
    </>
  );
}

