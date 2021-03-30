import { useState } from 'react';
import Calculator from './components/Calculator';

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const setMode = () => {
    setDarkMode(!darkMode)
  }

  return (
    <>
      <button onClick={setMode}>dark mode</button>
      { darkMode ? <Calculator /> : <div>dark mode off</div>}
    </>
  );
}

export default App;
