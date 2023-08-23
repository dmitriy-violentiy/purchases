import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = () => {
	const costs = [
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

	const addCostHandler = (cost) => {
		console.log(cost);
		console.log("app");
	};

	return (
		<div>
			<NewCost onAddCost={addCostHandler} />
			<Costs costs={costs} />
		</div>
	);
};

export default App;
