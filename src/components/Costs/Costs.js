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
				<CostItem
					date={props.costs[0].date}
					description={props.costs[0].description}
					amount={props.costs[0].amount}
				/>
				<CostItem
					date={props.costs[1].date}
					description={props.costs[1].description}
					amount={props.costs[1].amount}
				/>
				<CostItem
					date={props.costs[2].date}
					description={props.costs[2].description}
					amount={props.costs[2].amount}
				/>
			</div>
		</div>
	);
};

export default Costs;
