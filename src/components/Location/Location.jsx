import React from 'react'
import { Link } from 'react-router-dom'
import './location.css'
import TuneIcon from '@mui/icons-material/Tune';

const Location = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top topBar">
        <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className='btnLocation'>Location<TuneIcon className='ms-4'/></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <Link className="nav-link navbarItem me-3 text-dark c" to="/">Resturant</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navbarItem me-3 text-dark link" to="/location">Cottage</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navbarItem me-3 text-dark link" to="#">Castle</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navbarItem me-3 text-dark link">Fantast city</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navbarItem me-3 text-dark link">Beach</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navbarItem me-3 text-dark link">Carbins</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navbarItem me-3 text-dark link">Off-grid</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link navbarItem me-3 text-dark link">Farm</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Location
