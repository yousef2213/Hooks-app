import React from 'react';
import './App.css';
import Navbar from './component/Navbar.js'
import Groups from './component/Groups.js'
import Footer from './component/Footer.js'

function App() {
  return (
    <div className="app">
        <Navbar />
        <Groups />
        <Footer />
    </div>
  );
}


export default App;
