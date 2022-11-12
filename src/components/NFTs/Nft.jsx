import React from 'react'
import './nft.css'
import { nFTS } from '../NFTs-Data/Nftdata'


const Nft = () => {
  return (
    <div className='container mt-5'>
        <h1 className='inspo mb-5'>Inspiration for your next adventure</h1>
        <div className='mb-5'>
            <div className='nftBody gap-3'>
                {nFTS.slice(0,8).map((item) => {
                    return(
                        <div className='ntfItems'>
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
