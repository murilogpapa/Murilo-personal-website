import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// src/App.jsx
import React from 'react';
import LeftSidebar from './components/LeftSidebar';
import ScrollableContent from './components/ScrollableContent';

function App() {
  return (
    <div className="">
      
      <div className=' flex h-screen bg-[#000000] text-[#ffffff] max-sm:hidden'>
      <LeftSidebar />
    
      <ScrollableContent />
      </div>
      <div className=' flex h-screen bg-[#000000] text-[#ffffff] min-sm:hidden'>
      <ScrollableContent />
      </div>
    </div>
    
    
  );
}

export default App;