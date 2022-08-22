import React, { useEffect, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/Main-content';
import LayoutContext from './store';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert" className=''>
      <p>Something went wrong.</p>
      <p>Try to refresh the page.</p>
    </div>
  )
}

function App() {

  const [width, setWidth] = useState(window.screen.width);

  const resizefn = () => {
    setWidth(window.screen.width);
  }

  useEffect(() => {
    setWidth(window.screen.width);
    window.addEventListener('resize', resizefn);
    return () => window.removeEventListener('resize', resizefn);
  }, []);

  return (
    <ErrorBoundary
      FallbackComponent={ErrorFallback}>
      <LayoutContext.Provider value={width}>
        <div className="d-flex flex-column h-100">
          <Header />
          <MainContent />
          <Footer />
        </div>
      </LayoutContext.Provider>
    </ErrorBoundary>
  )
}

export default App;
