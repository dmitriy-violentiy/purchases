import Card from "../UI/Card";
import CostDate from "./CostDate";
import "./CostItem.css";
import React, { useState } from "react";

const CostItem = (props) => {
	return (
		<li>
			<Card className="cost-item">
				<CostDate date={props.date} />
				<div className="cost-item__description">
					<h2>{props.description}</h2>
					<div className="cost-item__price">{props.amount}р.</div>
				</div>
			</Card>
		</li>
	);
};

export default CostItem;
