import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
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
        <NavBar />
        <MainContent />

        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>

      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
