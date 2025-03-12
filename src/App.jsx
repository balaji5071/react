import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Usercard from './components/usercard.jsx';

function App() {
  const cards = Array.from({ length: 10 });
  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
    padding: '16px',
  };
const data={
  name:"balaji.ch",
  num:"256435244",
  Address:"delhi",
  Mail:"balaji@gmail.com"
}

  return (
    <div style={gridStyle}>
      {cards.map((_, index) => (
        <Usercard key={index} {...data} />
      ))}
    </div>
  );
}

export default App;
