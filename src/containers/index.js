import React from 'react'
import Main from './Main';
import NavigationBar from './../components/NavigationBar';
import Header from './../components/Header';
import Footer from './../components/Footer';

const App = () => (
  <React.Fragment>
    <NavigationBar />
    <Header />
    <Main />
    <Footer />
  </React.Fragment>
)

export default App;