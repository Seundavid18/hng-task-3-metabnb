import React from 'react'
import './herobox.css'
import heroImg from '../../images/heroImg.png'
import meta from '../../images/meta.png'

const Herobox = () => {
  return (
    <div className='hero mt-5'>
        <div className='container'>
            <div className='d-lg-flex flex-nowrap align-items-center gap-5'>
                <div className=''>
                    <h1 className='heroTxt mb-4'>Rent a <span style={{color: "#A02279"}}>Place</span> away from <span style={{color: "#A02279"}}>Home</span> in the <span style={{color: "#A02279"}}>Metaverse</span></h1>
                    <p className='heroDesc'>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
                    <form className="mt-5 mb-4">
                        <div className='inputContainer'>
                            <input placeholder='Serach for location' />
                            <button className='btn heroBtn'>Search</button>
                        </div>
                    </form>
                </div>
                <div className='heroImg'>
                    <img src={heroImg} alt="" className='heroImg'/>
                </div>
            </div>
        </div>
        <div>
            <img src={meta} alt="" className='meta mb-2'/>
        </div>
    </div>
  )
}

export default Herobox
