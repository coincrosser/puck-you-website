import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Gallery from './Gallery';
import Roadmap from './Roadmap';
import Socials from './Socials';

interface HomeProps {
  handlePlayNow: () => void;
}

const Home: React.FC<HomeProps> = ({ handlePlayNow }) => {
  return (
    <>
      <Header />
      <Hero onPlayNow={handlePlayNow} />
      <Gallery />
      <Roadmap />
      <Socials />
    </>
  );
};

export default Home;
