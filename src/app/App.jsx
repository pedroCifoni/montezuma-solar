import React from 'react';

// Layout
import Navbar from '@components/layout/Navbar';
import Footer from '@components/layout/Footer';
import WhatsAppFloat from '@components/layout/WhatsAppFloat';

// Features
import { Hero } from '@features/hero';
import { Solutions } from '@features/solutions';
import { Process } from '@features/process';
import { Portfolio } from '@features/portfolio';
import { Testimonials } from '@features/testimonials';
import { Faq } from '@features/faq';
import { FinalCta } from '@features/cta';


// GSAP registration is handled in @lib/gsap

export default function App() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Hero />
        <Solutions />
        <Process />
        <Portfolio />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
