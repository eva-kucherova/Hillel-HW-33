import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import CDlogo from '/CDlogo.png';

import './App.css';

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
        <h1> Комфортен дом 2024</h1>
        <p>
          Мы сделаем ваш дом тихим, сухим и теплым - <br />
          идеальные условия для комфортного проживания!
        </p>
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
        <main>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          dictum eget augue at mollis. Cras lacus turpis, fringilla non libero
          et, convallis molestie nulla. Duis nec ligula orci. Aliquam ornare
          euismod quam non dictum. Nullam et egestas orci. Donec fringilla
          ullamcorper orci, vel tristique risus facilisis eu. Etiam ex arcu,
          sodales quis pretium interdum, eleifend vitae lacus. Quisque quis
          nulla rhoncus, sodales mauris vitae, luctus tortor. Praesent et nisi
          in lorem eleifend consequat. Integer nunc ligula, iaculis nec tortor
          ut, hendrerit porta sapien. In molestie tincidunt orci, et ornare enim
          sodales vel. Nam lobortis mi quis arcu faucibus, sit amet dignissim
          ipsum venenatis. Suspendisse mi dolor, finibus eu elit non, ultricies
          bibendum ipsum. Sed aliquam libero ex, vel elementum quam facilisis
          sit amet. Proin finibus risus lacus, vitae cursus tortor iaculis non.
          Suspendisse in enim convallis, condimentum magna at, sodales orci.
          Nunc porta dapibus aliquam. Nunc luctus mauris a enim imperdiet
          hendrerit. Fusce porta fermentum est at porta. Fusce lobortis
          consectetur tincidunt. Maecenas sodales nibh sed aliquet iaculis.
          Maecenas quam nibh, consectetur sit amet risus quis, ornare consequat
          lorem. Maecenas id venenatis ante. Ut condimentum, quam non
          consectetur tristique, mi diam placerat sapien, at scelerisque elit
          tortor quis orci. Nullam non aliquet massa, et tempus arcu. Cras eget
          eleifend justo. Aliquam mattis condimentum tincidunt. Pellentesque id
          dui maximus, luctus mi ac, iaculis arcu. Aliquam vel leo iaculis,
          maximus dolor a, eleifend arcu.
        </main>

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
