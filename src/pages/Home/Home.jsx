import React from 'react'
import Community from '../../components/Community/Community'
import Footer from '../../components/Footer/Footer'
import Herobox from '../../components/Hero/Herobox'
import Nft from '../../components/NFTs/Nft'
import Topbar from '../../components/Topbar/Topbar'
import './home.css'

const Home = () => {
  return (
    <div>
      <Topbar />
      <Herobox />
      <Nft />
      <Community />
      <Footer />
    </div>
  )
}

export default Home
