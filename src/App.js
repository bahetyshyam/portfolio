import React, { Fragment } from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';

function App() {
  return (
    <Fragment>
      <Header />
      <main className="flex-1 items-center">
        <Home />
      </main>
      <Footer />
    </Fragment>

  );
}

export default App;
