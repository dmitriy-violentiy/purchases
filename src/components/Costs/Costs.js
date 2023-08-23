import CostItem from "./CostItem";
import CostsFilter from "./CostsFilter";
import React, { useState } from "react";

const Costs = (props) => {
	const [selectedYear, setSelectedYear] = useState("2020");

	const yearChangeHandler = (year) => {
		setSelectedYear(year);
	};

   const filteredCoasts = props.costs.filter(cost => {
      return cost.date.getFullYear().toString() === selectedYear
   })

	return (
		<div>
			<CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
			<div className="costs">
				{filteredCoasts.map((cost) => (
					<CostItem
                  key={cost.id}
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
