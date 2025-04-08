import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Products from "./Components/Products";
import { useState } from "react";

function App() {
  const information = {
    name: "nayok",
    phone: 10126272,
    money: 20000,
  };

  const [count, setCount] = useState(0)
  const handleStateCount = () => {
    const incres = count + 1;
    setCount(incres);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h2>Hello React World</h2>
      <hr />

      <h3>count: {count}</h3>

      <button onClick={ handleStateCount}>State Count</button>

      <Products info={information} />
    </>
  );
}

export default App;
