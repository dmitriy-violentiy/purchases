import Card from "./Card";
import CostDate from "./CostDate";
import "./CostItem.css";

function CostItem(props) {
	return (
		<Card className="cost-item">
			<CostDate date={props.date} />
			<div className="cost-item__description">
				<h2>{props.description}</h2>
				<div className="cost-item__price">{props.amount}р.</div>
			</div>
		</Card>
	);
}

export default CostItem;
