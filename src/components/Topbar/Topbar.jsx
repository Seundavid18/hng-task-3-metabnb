import React from 'react'
import './topbar.css'
import logo from '../../images/Logo.png'
import NavModal from '../Modal/NavModal'
import { Link } from 'react-router-dom'

const Topbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top topBar">
        <div className="container">
            <Link className="navbar-brand link" to="#">
                <img src={logo} alt="" className='logo' />
            </Link>
            <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="toggler-icon top-bar"></span>
            <span className="toggler-icon middle-bar"></span>
            <span className="toggler-icon bottom-bar"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link navbarItem me-3 text-dark c" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navbarItem me-3 text-dark link" to="/location">Place to stay</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navbarItem me-3 text-dark link" to="#">NFTs</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navbarItem me-3 text-dark link">Community</Link>
                    </li>
                </ul>
                <NavModal />
            </div>
        </div>
    </nav>
  )
}

export default Topbar

