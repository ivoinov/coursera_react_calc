import { useState, useRef } from "react";
import Button from './components/Button';
import Input from './components/Input';
import './App.css';

function App() {
  const [result, setResult] = useState(0); 
  const [operation, setOperation] = useState(null);
  const [input, setInput] = useState([]);
  const inputRef = useRef(null); 
  const clickHandle = (e) => {
    inputRef.current.value += e.target.innerText;
  };
  const calculateResult = () => {
    let result  = eval(parseFloat(input.pop()) + operation + parseFloat(inputRef.current.value));
    setInput([...input, result]);
    setResult(result);
    setInput([]);
  };
  const performOperation = (e) => {
    setOperation(e.target.innerText);
    setInput([...input, inputRef.current.value]);
    inputRef.current.value = '';
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Simple Calculator</h1>
        <div className="result">
          <p>Result: {result}</p>
        </div>
        <div className="input">
          <Input inputRef={inputRef}/>
       </div>
        <div className="keypad">
          <div className='button-line'>
            <Button text='7' classes='button' clickHandle={clickHandle}/>
            <Button text='4' classes='button' clickHandle={clickHandle} />
            <Button text='1' classes='button' clickHandle={clickHandle} />
            <Button text='0' classes='button' clickHandle={clickHandle}/>
          </div>
          <div className='button-line'>
            <Button text='8' classes='button' clickHandle={clickHandle}/>
            <Button text='5' classes='button' clickHandle={clickHandle} />
            <Button text='2' classes='button' clickHandle={clickHandle} />
            <Button text='.' classes='button' clickHandle={clickHandle}/>
          </div>
          <div className='button-line'>
            <Button text='9' classes='button' clickHandle={clickHandle}/>
            <Button text='6' classes='button' clickHandle={clickHandle} />
            <Button text='3' classes='button' clickHandle={clickHandle} />
            <Button text='=' classes='button' clickHandle={calculateResult}/>
          </div>
          <div className='button-line actions-buttons'>
            <Button text='/' classes='button' clickHandle={performOperation}/>
            <Button text='-' classes='button' clickHandle={performOperation}/>
            <Button text='+' classes='button' clickHandle={performOperation}/>
            <Button text='*' classes='button' clickHandle={performOperation}/>
            <Button text='A/C' classes='button' clickHandle={() => {setResult(null); inputRef.current.value=''}}/>          
          </div>
      </div>

      </div>
    </div>
  );
}

export default App;
