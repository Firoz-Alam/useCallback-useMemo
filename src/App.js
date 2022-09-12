import { useState,useCallback} from "react";
import Button from "./components/Button";
import ShowComponent from "./components/ShowComponent";
import Title from "./components/Title";

function App() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const incrementByOne = useCallback(() => {
    setCount1((prevCount)=> prevCount + 1);
  },[]);
  
  const incrementByTwo = useCallback(() => {
    setCount2((prevCount)=> prevCount + 5);
  },[]);

  return (
    <div className="App">
      <Title/>

      <ShowComponent count = {count1} title= 'Counter 1'/>
      <Button handleClick={incrementByOne}>Increment By One</Button>

      <hr/>

      <ShowComponent count = {count2} title = 'Counter 2'/>
      <Button handleClick={incrementByTwo}>Increment By five</Button>
      
    </div>
  );
}

export default App;
