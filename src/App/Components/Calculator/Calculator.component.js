import React, { useState, useEffect, useCallback, useMemo } from 'react';
import CalculatorContent from './Calculator.content';
import { calculate, formatCalculateString } from './Calculator.utils';


const Calculator = () => {
  const [ num1, setNum1 ] = useState(null);
  const [ num2, setNum2 ] = useState(null);
  const [ operation, setOperation ] = useState(null);
  const [ result, setResult ] = useState(null);
  const [ confirmation, setConfirmation ] = useState(false)
  
  const calculationString = useMemo(()=>{
    return formatCalculateString(num1, operation, num2, result)
  }, [num1, num2, operation, result])

  const calculateOperation = useCallback(()=> {
    if(num1 && num2 && operation && confirmation){
      calculate(operation, num1, num2, setResult);
    }
  }, [num1, num2, confirmation, operation])
  
  useEffect(()=> {
    calculateOperation();
  }, [calculateOperation])

  const setNum = (num) => {
    !num1 && setNum1(num);
    !num2 && operation && setNum2(num);
  }

  const clear = () => {
    setConfirmation(false);
    setOperation(null);
    setResult(null);
    setNum1(null);
    setNum2(null);
  }

  return (
    <CalculatorContent
      setNum={setNum}
      setOperation={setOperation}
      clear={clear}
      setConfirmation={setConfirmation}
      calculationString={calculationString}
    />
  );
}

export default Calculator; 