import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import CDlogo from '/CDlogo.png';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <img src={CDlogo} className='cdlogo' alt='CD logo' />
        <h1> Комфортен дом 2024</h1>
        <nav>
          <ul>
            <li>Ремонт и обновление апартаментов</li>
            <ul>
              <li>Косметический ремонт</li>
              <li>Предпродажная подготовка</li>
              <li>Стайлинг и редизайн</li>
            </ul>
            <li>Повышение комфортности жилья</li>
            <ul>
              <li>Звукоизоляция апартаментов</li>
              <li>Гидроизоляция апартаментов</li>
              <li>Термоизоляция апартаментов</li>
              <li>Монтаж теплых полов</li>
            </ul>
            <li>Изготовление и монтаж металлоконструкций</li>
            <ul>
              <li>Ограждения для террас и участков</li>
              <li>Солнцезащитные тенты и навесы</li>
              <li>Оригинальные лестницы и парапеты</li>
            </ul>
          </ul>
        </nav>

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
