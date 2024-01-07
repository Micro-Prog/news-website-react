import React from 'react'
import PageComponent from './card/PageComponent'
import Home from './Content/homes/Home'
import Life from './Content/life/Life'
import Popular from './Content/popular/Popular'
import Discover from './discover/Discover'

const Homepages = () => {
  return (
    <>
        <PageComponent />
        <Home />
        <Discover />
    </>
  )
}

export default Homepages