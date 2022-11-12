import React from 'react'
import './topbar.css'
import logo from '../../images/Logo.png'
import fox from '../../images/fox.png'
import wallet from '../../images/wallet.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import NavModal from '../Modal/NavModal'

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
                <NavModal />
            </div>
        </div>
    </nav>
  )
}

export default Topbar

