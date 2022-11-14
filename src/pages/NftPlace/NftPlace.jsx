import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import './nftplace.css'
import { nFTS } from '../../components/NFTs-Data/Nftdata'
import Footer from '../../components/Footer/Footer'
import TuneIcon from '@mui/icons-material/Tune';

const NftPlace = () => {
  return (
    <div>
        <Topbar />
        <div className='container mt-5'>
            <div className='location '>
                <ul className='locationList d-lg-flex flex-wrap justify-content-evenly g-3'>
                    <li className='locationListItem'>Resturant</li>
                    <li className='locationListItem'>Cottage</li>
                    <li className='locationListItem'>Castle</li>
                    <li className='locationListItem'>Fantast city</li>
                    <li className='locationListItem'>Beach</li>
                    <li className='locationListItem'>Carbins</li>
                    <li className='locationListItem'>Off-grid</li>
                    <li className='locationListItem'>Farm</li>
                    <div className='btnLocation'>Location<TuneIcon className='ms-4'/></div>
                </ul>
            </div>
            <h1 className='inspo mb-5'>Inspiration for your next adventure</h1>
            <div className='mb-5'>
                <div className='row justify-content-md-center row-cols-1 row-cols-md-2 row-cols-lg-4 g-4'>
                    {nFTS.map((item) => {
                        return(
                            <div className='col nftBody'>
                                <div className='card nftCard' key={item.id}>
                                    <div className='card-body'>
                                        <img src={item.img} alt="" className='nftImg' />
                                        <div className='nftDeets'>
                                            <span className='nftTxt1'>{item.size}</span>
                                            <span className='nftTxt2'>{item.amount}</span>
                                        </div>
                                        <div className='nftDeets'>
                                            <span className='nftTxt1'>{item.miles}</span>
                                            <span className='nftTxt1'>{item.duration}</span>
                                        </div>
                                        <img src={item.ratings} alt="" className='starsImg' />
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div> 
        <Footer /> 
    </div>
  )
}

export default NftPlace