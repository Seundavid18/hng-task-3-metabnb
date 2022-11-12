import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import fox from '../../images/fox.png'
import wallet from '../../images/wallet.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function NavModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="btn nav-btn" type="submit" variant="primary" onClick={handleShow}>Connect Wallet</button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Connect Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h4 className='walletTxt'>Choose your preferred wallet:</h4>
            <ul className='wallet'>
                <li className='walletItem mb-3'>
                    <img src={fox} alt="" className='walletImg'/>
                    <span className='walletMetaText'>Metamask</span>
                    <div className='ms-auto'>
                        <ArrowForwardIosIcon style={{color: "#959DA6"}}/>
                    </div>
                </li>
                <li className='walletItem mb-3'>
                    <img src={wallet} alt="" className='walletImg'/>
                    <span className='walletMetaText'>WalletConnect</span>
                    <div className='ms-auto'>
                        <ArrowForwardIosIcon style={{color: "#959DA6"}}/>
                    </div>
                </li>
            </ul>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavModal;

