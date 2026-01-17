import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { TopNav } from './components/TopNav';
import { Footer } from './components/Footer';

import Home from './pages/Home';
import SchedulePage from './pages/Schedule';
import Venue from './pages/Venue';
import Hotel from './pages/Hotel';
import Athens from './pages/Athens';
import Sponsors from './pages/Sponsors';
import Speakers from './pages/Speakers';
import Safety from './pages/Safety';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div className="min-h-screen">
      <TopNav />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/venue" element={<Venue />} />
          <Route path="/hotel" element={<Hotel />} />
          <Route path="/athens" element={<Athens />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
