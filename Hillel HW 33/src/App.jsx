import { useState } from 'react';
import CDlogo from '/CDlogo.png';
import './App.css';
import { MainHeader } from './components/MainHeader/MainHeader';
import { NavBar } from 'c:/Users/antim/Desktop/Hillel-HW-33/Hillel HW 33/src/components/navbar/navbar';
import { MainContent } from './components/MainContent/MainContent';

// Додаток повинен складатися з трьох блоків:

// хедер;
// ліва бічна навігація;
// центральний контейнер.
// Контент всередині блоків довільний

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={CDlogo} className='cdlogo' alt='CD logo' />
        <MainHeader />
      </div>
      <div className='mainblock'>
        <NavBar />
        <MainContent />
      </div>
    </>
  );
}

export default App;
