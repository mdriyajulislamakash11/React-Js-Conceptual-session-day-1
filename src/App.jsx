import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Products from "./Components/Products";
import { useEffect, useState } from "react";
import World from "./Components/World";
import Country from "./Components/Country";

function App() {
  // const information = {
  //   name: "nayok",
  //   phone: 10126272,
  //   money: 20000,
  // };
  const [count, setCount] = useState(0)
  const [state, setState] = useState(true);

  const handleState = () => {
    setState(!state)
    console.log(state)
  }

  // dependency ache state name joto bar ami btn a click korbo totobar useEffect auto call hobe
  useEffect(() => {
    console.log("hello i am useEffect")
  },[count])

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

      {/* conditional rendaring */}
      {
        state ? <World /> : <Country />
      }



      <button onClick={handleState}>Hanle Tate</button>  
      <h3>count: {count}</h3>
      <button onClick={ handleStateCount}>State Count</button>

      {/* <Products info={information} /> */}
    </>
  );
}

export default App;
