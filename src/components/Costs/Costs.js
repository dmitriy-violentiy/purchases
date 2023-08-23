import CostItem from "./CostItem";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";

const Costs = (props) => {
	const [selectedYear, setSelectedYear] = useState("2020");

	const yearChangeHandler = (year) => {
		setSelectedYear(year);
	};

	return (
		<div>
			<CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
			<div className="costs">
				{props.costs.map((cost) => (
					<CostItem
						date={cost.date}
						description={cost.description}
						amount={cost.amount}
					/>
				))}
			</div>
		</div>
	);
};

export default Costs;
