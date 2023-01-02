import React from 'react'
import './footer.css'
import footerImg from '../../images/footerImg.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='container'>
            <div className='footerBody'>
                <div className='footerItems'>
                    <img src={footerImg} alt="" className='footerImg'/>
                    <div className='footerIcons'>
                        <div><FacebookIcon className='me-3 iconColor'/></div>
                        <div><InstagramIcon className='me-3 iconColor' /></div>
                        <div><TwitterIcon className='iconColor'/></div>
                    </div>
                </div>

                <div className='footerItems'>
                    <h1 className="footerTitle">Community</h1>
                    <ul className='footerList'>
                        <li className='footerListItem'>
                           <Link style={{cursor: 'pointer', color: '#fff'}} className='link'>NFT</Link> 
                        </li>
                        <li className='footerListItem'>
                           <Link style={{cursor: 'pointer', color: '#fff'}} className='link'>Tokens</Link> 
                        </li>
                        <li className='footerListItem'>
                           <Link style={{cursor: 'pointer', color: '#fff'}} className='link'>Landlords</Link> 
                        </li>
                        <li className='footerListItem'>
                           <Link style={{cursor: 'pointer', color: '#fff'}} className='link'>Discord</Link> 
                        </li>
                    </ul>
                </div>

                <div className='footerItems'>
                    <h1 className="footerTitle">Places</h1>
                    <ul className='footerList'>
                        <li className='footerListItem'>
                           <Link style={{cursor: 'pointer', color: '#fff'}} className='link'>Castle</Link> 
                        </li>
                        <li className='footerListItem'>
                           <Link style={{cursor: 'pointer', color: '#fff'}} className='link'>Farms</Link> 
                        </li>
                        <li className='footerListItem'>
                           <Link style={{cursor: 'pointer', color: '#fff'}} className='link'>Beach</Link> 
                        </li>
                        <li className='footerListItem'>
                           <Link style={{cursor: 'pointer', color: '#fff'}} className='link'>Learn more</Link> 
                        </li>
                    </ul>
                </div>

                <div className='footerItems'>
                    <h1 className="footerTitle">About us</h1>
                    <ul className='footerList'>
                        <li className='footerListItem'>
                           <Link style={{cursor: 'pointer', color: '#fff'}} className='link'>Road map</Link> 
                        </li>
                        <li className='footerListItem'>
                           <Link style={{cursor: 'pointer', color: '#fff'}} className='link'>Creators</Link> 
                        </li>
                        <li className='footerListItem'>
                           <Link style={{cursor: 'pointer', color: '#fff'}} className='link'>Career</Link> 
                        </li>
                        <li className='footerListItem'>
                           <Link style={{cursor: 'pointer', color: '#fff'}} className='link'>Contact us</Link> 
                        </li>
                    </ul>
                </div>
            </div>
                <div className='footerBottom'>
                    &copy; 2022 Metabnb
                </div>
        </div>
    </div>
  )
}

export default Footer