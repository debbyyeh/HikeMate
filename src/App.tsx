import { useState } from 'react';
import './App.css';
import { Login } from './components/Login';
import { Register } from './components/Register';

const buttonStyle =
  'transition-all duration-200 cursor-pointer group flex items-center justify-center rounded-full px-4 text-sm/8 font-medium w-1/2 data-[selected=true]:bg-white data-[selected=true]:ring data-[selected=true]:font-bold data-[selected=true]:ring-gray-950/5 dark:data-[selected=true]:bg-gray-600 dark:data-[selected=true]:ring-0 dark:data-[selected=true]:inset-ring dark:data-[selected=true]:inset-ring-white/10';

function App() {
  const [firstTime, setFirstTime] = useState(true);

  return (
    <>
      <div className="flex flex-col">{!firstTime ? <Login /> : <Register />}</div>
      <div
        className="w-full md:w-1/2 lg:w-1/3 mx-auto flex gap-1 rounded-full bg-gray-950/5 p-1 dark:bg-white/10 mt-10"
        role="tabList"
      >
        <button
          role="tab"
          onClick={() => setFirstTime(false)}
          data-selected={!firstTime}
          type="button"
          className={buttonStyle}
        >
          Log In
        </button>
        <button
          role="tab"
          data-selected={firstTime}
          onClick={() => setFirstTime(true)}
          type="button"
          className={buttonStyle}
        >
          Register
        </button>
      </div>
    </>
  );
}

export default App;
