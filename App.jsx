import React from 'react';
import Header from './components/Header';
import Vision from './components/Vision';
import Goals from './components/Goals';
import FocusAreas from './components/FocusAreas';
import Implementation from './components/Implementation';
import Challenges from './components/Challenges';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-india-blue">
      <Header />
      <main className="container mx-auto px-4 pt-24">
        <Vision />
        <Goals />
        <FocusAreas />
        <Implementation />
        <Challenges />
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;