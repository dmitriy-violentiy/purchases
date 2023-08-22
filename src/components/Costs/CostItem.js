import Card from "../UI/Card";
import CostDate from "./CostDate";
import "./CostItem.css";
import React, { useState } from "react";

const CostItem = (props) => {
	const [description, setDescription] = useState(props.description);

	const changeDescription = () => {
		setDescription("New text");
	};
	return (
		<Card className="cost-item">
			<CostDate date={props.date} />
			<div className="cost-item__description">
				<h2>{description}</h2>
				<div className="cost-item__price">{props.amount}р.</div>
			</div>
			<button onClick={changeDescription}>Изменить описание</button>
		</Card>
	);
};

export default CostItem;
