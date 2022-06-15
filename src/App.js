import classes from 'App.module.css';
import { useState } from 'react';
import ButtonGrid from './components/ButtonGrid';

const App = () => {

  let [input, setInput] = useState('');
  let [previousNumber, setPreviousNumber] = useState('');
  let [currentNumber, setCurrentNumber] = useState('');
  let [operator, setOperator] = useState('');


  const addToInput = (val) => {
    setInput(input + val);
  }

  const addDecimal = (val) => {
    if(input.indexOf('.') === -1) {
      setInput(input + val);
    }
  }

  const addZeroToInput = (val) => {
    if(input !==('')) {
      setInput(input + val);
    }
  }

  const clearInput = () => {
    setInput("")
    setOperator() // Have another look at this
  }

  const add = () => {
    input = setInput(input);
    previousNumber = setPreviousNumber(previousNumber + "+");
    setInput('');
    setOperator('plus');
  }

  const subtract = () => {
    input = setInput(input);
    previousNumber = setPreviousNumber(previousNumber + "-");
    setInput('');
    operator = setOperator('subtract');
  }

  const multiply = () => {
    input = setInput(input);
    previousNumber = setPreviousNumber(previousNumber + "x");
    setInput('');
    operator = setOperator('multiply');
  }

  const divide = () => {
    input = setInput(input);
    previousNumber = setPreviousNumber(previousNumber + "/");
    setInput('');
    setOperator('divide');
  }

  const square = () => {
    input = setInput(input);
    previousNumber = setPreviousNumber(previousNumber + "^2");
    setInput('');
    setOperator('square');
  }

  const cube = () => {
    input = setInput(input);
    previousNumber = setPreviousNumber(previousNumber + "^3");
    setInput('');
    setOperator('cube');
  }
  
  const squareroot = () => {
    input = setInput(input);
    previousNumber = setPreviousNumber(previousNumber + "^1/2");
    setInput('');
    setOperator('squareroot');
  }

  const tenfold = () => {
    input = setInput(input);
    previousNumber = setPreviousNumber(previousNumber + "(x10)");
    setInput('');
    setOperator('tenfold');
  }
 
  const evaluate = () => {
    currentNumber = setCurrentNumber(input);
    switch(operator) {
      case "plus":
        add();
        setInput(parseInt(previousNumber) + parseInt(currentNumber));
        break;
      case "subtract":
        subtract();
        setInput(parseInt(previousNumber) - parseInt(currentNumber));
        break;

      case"multiply":
        multiply();
        setInput(parseInt(previousNumber) * parseInt(currentNumber));
        break;

      case "divide":
        divide();
        setInput(parseInt(previousNumber) / parseInt(currentNumber));
        break;

      case"square":
        square();
        setInput(parseInt(previousNumber)) * setInput(parseInt(previousNumber));
        break;

      case"cube":
        cube();
        let x = setInput(parseInt(previousNumber));
        setInput(x * x * x);
        break;

      case"squareroot":
        squareroot();
        setInput(Math.sqrt(parseInt(previousNumber)));
        break;

      case"tenfold":
        tenfold();
        setInput(parseInt(previousNumber) * 10);
        break;
      case"default":
        setOperator("");
        break;
    }
  

    return (
      <div className={classes.app}>
        <ButtonGrid />
      </div>
    );
  }
}

export default App;
  

