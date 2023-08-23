import React, { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
	const [inputName, setInputName] = useState("");
	const [inputAmount, setInputAmount] = useState("");
	const [inputDate, setInputDate] = useState("");

	const nameChangeHandler = (event) => {
		setInputName(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setInputAmount(event.target.value);
	};

	const dateChangeHandler = (event) => {
		setInputDate(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		const costData = {
			name: inputName,
			amount: inputAmount,
			date: new Date(inputDate),
		};

		props.onSaveCostData(costData);
		setInputName("");
		setInputAmount("");
		setInputDate("");
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-cost__controls">
				<div className="new-cost__control">
					<label>Название</label>
					<input type="text" value={inputName} onChange={nameChangeHandler} />
				</div>
				<div className="new-cost__control">
					<label>Сумма</label>
					<input
						value={inputAmount}
						onChange={amountChangeHandler}
						type="number"
						min="0.01"
						step="0.01"
					/>
				</div>
				<div className="new-cost__control">
					<label>Дата</label>
					<input
						value={inputDate}
						onChange={dateChangeHandler}
						type="date"
						min="2019-01-01"
						max="2023-08-22"
					/>
				</div>
				<div className="new-cost__actions">
					<button type="submit">Добавить расход</button>
				</div>
			</div>
		</form>
	);
};

export default CostForm;
