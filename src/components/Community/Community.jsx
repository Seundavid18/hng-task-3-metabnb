import React from 'react'
import './community.css'
import comImg from '../../images/commImg.png'

const Community = () => {
  return (
    <div className='community'>
      <div className='container mt-5 mb-5'>
            <div className='d-lg-flex flex-nowrap gap-5'>
                <div className='flex-meta'>
                    <h1 className='comTitle'>Metabnb NFTs</h1>
                    <p className='comDesc'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                    <button className='btn comBtn'>Learn more</button>
                </div>
                <div className='flex-box'>
                    <img src={comImg} alt="" className='comImg'/>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Community
