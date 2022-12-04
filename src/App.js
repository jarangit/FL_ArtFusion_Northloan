import './App.css';
import Banner from './components/banner';
import Footer from './components/footer';
import Section1 from './components/sections/section1';
import Section2 from './components/sections/section2';
import Section3 from './components/sections/section3';
import Section4 from './components/sections/section4';
import Section5 from './components/sections/section5';
import React, { useEffect, useState } from 'react'
import Button from './components/button';

function App() {
  const [showBut, setShowBut] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', pop);
    return () => window.removeEventListener('scroll', pop);
  }, []);

  const pop = () => {
    console.log(window.scrollY)
    if (window.scrollY > 1000) {
      setShowBut(true);
    } else {
      setShowBut(false);
    }
  }
  return (
    <div>
      <Banner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Footer />
      <Button showBut={showBut} />
    </div>
  );
}

export default App;
