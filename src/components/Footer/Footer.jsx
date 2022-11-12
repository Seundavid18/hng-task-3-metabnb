import React from 'react'
import './footer.css'
import footerImg from '../../images/footerImg.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

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
                        <li className='footerListItem'>NFT</li>
                        <li className='footerListItem'>Tokens</li>
                        <li className='footerListItem'>Landlords</li>
                        <li className='footerListItem'>Discord</li>
                    </ul>
                </div>

                <div className='footerItems'>
                    <h1 className="footerTitle">Places</h1>
                    <ul className='footerList'>
                        <li className='footerListItem'>Castle</li>
                        <li className='footerListItem'>Farms</li>
                        <li className='footerListItem'>Beach</li>
                        <li className='footerListItem'>Learn more</li>
                    </ul>
                </div>

                <div className='footerItems'>
                    <h1 className="footerTitle">About us</h1>
                    <ul className='footerList'>
                        <li className='footerListItem'>Road map</li>
                        <li className='footerListItem'>Creators</li>
                        <li className='footerListItem'>Career</li>
                        <li className='footerListItem'>Contact us</li>
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