import CostsFilter from "./CostsFilter";
import React, { useState } from "react";
import CostList from "./CostList"

const Costs = (props) => {
	const [selectedYear, setSelectedYear] = useState("2020");

	const yearChangeHandler = (year) => {
		setSelectedYear(year);
	};

	const filteredCoasts = props.costs.filter((cost) => {
		return cost.date.getFullYear().toString() === selectedYear;
	});

	
	return (
		<div>
			<CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
			<CostList costs={filteredCoasts}/>
		</div>
	);
};

export default Costs;
