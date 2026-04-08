import React from 'react';

// Layout
import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';

// Features
import { Hero } from '@features/hero';
import { Services } from '@features/services';
import { Visao } from '@features/visao';
import { Portfolio } from '@features/portfolio';
import { Pricing } from '@features/pricing';


// GSAP registration is handled in @lib/gsap

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

