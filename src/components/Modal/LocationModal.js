import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import TuneIcon from '@mui/icons-material/Tune';

function LocationModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className='btnLocationMobile'type="submit" variant="primary" onClick={handleShow}>Location<TuneIcon className='ms-4'/></div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Location</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4 className='walletTxt'>Choose your preferred location:</h4>
            <div className='locationMobile'>
                <ul className='locationListMobile'>
                    <li className='locationListItemMobile'>Resturant</li>
                    <li className='locationListItemMobile'>Cottage</li>
                    <li className='locationListItemMobile'>Castle</li>
                    <li className='locationListItemMobile'>Fantast city</li>
                    <li className='locationListItemMobile'>Beach</li>
                    <li className='locationListItemMobile'>Carbins</li>
                    <li className='locationListItemMobile'>Off-grid</li>
                    <li className='locationListItemMobile'>Farm</li>
                </ul>
            </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LocationModal;

