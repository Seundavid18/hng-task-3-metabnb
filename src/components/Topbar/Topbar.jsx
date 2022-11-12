import React from 'react'
import './topbar.css'
import logo from '../../images/Logo.png'
import fox from '../../images/fox.png'
import wallet from '../../images/wallet.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Topbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top topBar">
        <div className="container">
            <a className="navbar-brand" to="#">
                <img src={logo} alt="" className='logo' />
            </a>
            <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                    <a className="nav-link navbarItem me-3 text-dark" to="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navbarItem me-3 text-dark" to="#">Place to stay</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navbarItem me-3 text-dark" to="#">NFTs</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link navbarItem me-3 text-dark">Community</a>
                    </li>
                </ul>
                <button className="btn nav-btn" type="submit" data-bs-toggle="modal" data-bs-target="#walletModal">Connect Wallet</button>
                {/* <div className="modal fade" id="walletModal" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalToggleLabel">Connect wallet</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
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
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    </nav>
  )
}

export default Topbar

