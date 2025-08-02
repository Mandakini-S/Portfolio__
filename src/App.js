import React, { useState, useEffect } from 'react';
import './App.scss';
import Layout from './components/Layout';
import OnePagePortfolio from './components/OnePagePortfolio';
import Loader from 'react-loaders';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a page load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // Hide loader after 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Conditionally render the loader */}
      {loading && <Loader type="pacman" active />}
      
      {/* Render the main layout only when not loading, or use CSS to hide it */}
      <div className={loading ? 'app-hidden' : ''}>
        <Layout>
          <OnePagePortfolio />
        </Layout>
      </div>
    </>
  );
}

export default App;
