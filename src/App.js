import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import React, { useState } from "react";

const INITIAL_COSTS = [
	{
		id: "c1",
		date: new Date(2021, 2, 12),
		description: "Холодильник",
		amount: 70000,
	},
	{
		id: "c2",
		date: new Date(2021, 11, 25),
		description: "Айфон",
		amount: 120000,
	},
	{
		id: "c3",
		date: new Date(2021, 4, 1),
		description: "Табурет",
		amount: 3000,
	},
];

const App = () => {
	const [costs, setCosts] = useState(INITIAL_COSTS);

	const addCostHandler = (cost) => {
		setCosts((prevCosts) => {
			return [cost, ...prevCosts];
		});
	};

	return (
		<div>
			<NewCost onAddCost={addCostHandler} />
			<Costs costs={costs} />
		</div>
	);
};

export default App;
