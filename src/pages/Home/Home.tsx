import React from 'react'
import Slideshow from '../../components/Slideshow/Slideshow';

const Home = () => {
  const images = [
    'https://via.placeholder.com/600x300?text=Image%201',
    'https://via.placeholder.com/600x300?text=Image%202',
    'https://via.placeholder.com/600x300?text=Image%203',
  ];
  return (
    <div>
      <Slideshow images={images} />
    </div>
  )
}

export default Home