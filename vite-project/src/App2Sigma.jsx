import React from 'react'

import Navbar from './components2-Sigma/Navbar.jsx'
import Footer from './components2-Sigma/Footer.jsx'
import Cards from './components2-Sigma/Cards.jsx';

const App2Sigma = () => {
  return (
    <>
      <Navbar />
      <div className="cards">
        <Cards title="Card 1 " description="This is About  Card 1 " />
        <Cards title="Card 2 " description="This is About Card 2  " />
        <Cards title="Card 3 " description="This is About Card 3 " />
        <Cards title="Card 4 " description="This is About Card 4 " />
      </div>
      <Footer />
    </>
  );
}

export default App2Sigma