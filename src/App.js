import Child from "./Child";
import { useState } from "react";


function App() {
  let [count, setCount] = useState(0);
  let incNum = () => {setCount(++count);};
  let decNum = () => {setCount(count ? count - 1 : (count = 0));};
  let resetNum = () => {setCount(0);};
  return (
    <>
        <Child count={count} incNum={incNum} decNum={decNum} resetNum={resetNum}/>
    </>
  );
}

export default App;
