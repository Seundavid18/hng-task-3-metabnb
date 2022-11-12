import React from 'react'
import './nft.css'
import { nFTS } from '../NFTs-Data/Nftdata'


const Nft = () => {
  return (
    <div className='container mt-5'>
        <h1 className='inspo mb-5'>Inspiration for your next adventure</h1>
        <div className='mb-5'>
            <div className='row justify-content-md-center row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 '>
                {nFTS.slice(0,8).map((item) => {
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
  )
}

export default Nft
