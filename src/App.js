import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = () => {
	const costs = [
		{
			date: new Date(2021, 2, 12),
			description: "Холодильник",
			amount: 70000,
		},
		{
			date: new Date(2021, 11, 25),
			description: "Айфон",
			amount: 120000,
		},
		{
			date: new Date(2021, 4, 1),
			description: "Табурет",
			amount: 3000,
		},
	];

	return (
		<div>
			<NewCost />
			<Costs costs={costs} />
		</div>
	);
};

export default App;
