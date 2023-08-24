import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import CostList from "./CostList";
import CostDiagram from "./CostsDiagram";

const Costs = (props) => {
	const [selectedYear, setSelectedYear] = useState("2020");

	const yearChangeHandler = (year) => {
		setSelectedYear(year);
	};

	const filteredCosts = props.costs.filter((cost) => {
		return cost.date.getFullYear().toString() === selectedYear;
	});

	return (
		<div>
			<CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
			<CostDiagram costs={filteredCosts} />
			<CostList costs={filteredCosts} />
		</div>
	);
};

export default Costs;
