import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './container/navigation';
import Loading from './ui/loading';

const Home = lazy(() => import('./page/home'));

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contentElement = document.querySelector('#content');
      const scrollPercentage = (window.scrollY / (contentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercentage >= 8) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section>
      <Navigation isScrolled={isScrolled} />
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </section>
  );
}

export default App;
