import React from 'react';
import './App.css';
import LeftMenu from './components/LeftMenu';
import Main from './components/Main';
import Sidebar from './components/sidebar/SideBar';
import RightMenu from './components/RightMenu';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App" id="app">
      <Nav />
      <Sidebar />
      <LeftMenu />
      <Main />
      <RightMenu />
      
    </div>
  );
}

export default App;
