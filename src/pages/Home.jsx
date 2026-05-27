import { useEffect } from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import Specials from '../components/Specials';
import TrustAndOrder from '../components/TrustAndOrder';
import Gallery from '../components/Gallery';

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full">
      <Hero />
      <Categories />
      <Specials />
      <TrustAndOrder />
      <Gallery />
    </div>
  );
}
