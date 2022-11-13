import React from 'react'
import './community.css'
import comImg from '../../images/commImg.png'

const Community = () => {
  return (
    <div className='community'>
      <div className='container mt-5 mb-5'>
            <div className='row row-cols-1 row-cols-lg-2 align-items-center g-5'>
                <div className='col col-lg-5'>
                    <h1 className='comTitle'>Metabnb NFTs</h1>
                    <p className='comDesc'>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                    <button className='comBtn'>Learn more</button>
                </div>
                <div className='col col-lg-7'>
                    <img src={comImg} alt="" className='comImg'/>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Community
