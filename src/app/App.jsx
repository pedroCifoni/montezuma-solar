import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Layout
import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';

// Features
import { Hero } from '@features/hero';
import { Services } from '@features/services';
import { Visao } from '@features/visao';
import { Portfolio } from '@features/portfolio';
import { Pricing } from '@features/pricing';

// Registration
gsap.registerPlugin(ScrollTrigger);

export default function App() {
  return (
    <div className="bg-background selection:bg-accent selection:text-secondary">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Visao />
        <Portfolio />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
