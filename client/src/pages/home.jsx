import React from 'react'
import Hero from '../components/Hero'
import RecommendedRooms from '../components/RecommendedRooms'
import SpecialOffers from '../components/SpecialOffers'
import Testimonial from '../components/Testimonial'
import NewLetter from '../components/NewLetter'

const Home = () => {
    return (
    <>
        <Hero />
        <RecommendedRooms />
        <SpecialOffers />
        <Testimonial />
        <NewLetter />
    </>
  )
}

export default Home