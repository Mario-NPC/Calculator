import React from 'react';
import { AppWording } from '../../Config/Wording/App.wording';
import { generateNumberButtons, generateOperations } from './Calculator.config'


const CalculatorContent = ({setNum, clear, setOperation, setConfirmation, calculationString}) => {
	const { calculator } = AppWording;
	const numberButtons = generateNumberButtons(setNum);
	const operationButtons = generateOperations(setOperation);

	const renderNumbers = () => {
		return numberButtons.map(
			numberButton => {
				const { value, onClick } = numberButton;
				return (
					<button onClick={onClick} key={value}>
						{value}
					</button>
				)
			}
		)
	}

	const renderOperations = () => {
		return operationButtons.map(
			operationButton => {
				const { value, onClick } = operationButton;
				return (
					<button onClick={onClick} key={value}>
						{value}
					</button>
				)
			}
		)
	}
	
	return (
		<div>
			<h1>{calculator}</h1>
			{
				renderNumbers()
			}
			{
				renderOperations()
			}
			<button onClick={() => setConfirmation(true)}>=</button>
			<button onClick={clear}>clear</button>
			<h1>{calculationString}</h1>
		</div>
	)
}

export default CalculatorContent;