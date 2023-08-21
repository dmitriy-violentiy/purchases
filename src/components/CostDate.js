import Card from "./Card";
import "./CostDate.css";

function CostDate(props) {
	const month = props.date.toLocaleString("ru-RU", { month: "long" });
	const year = props.date.getFullYear();
	const day = props.date.toLocaleString("ru-RU", { day: "2-digit" });

	return (
		<Card className="cost-date">
			<div className="cost-date__month">{month}</div>
			<div className="cost-date__year">{year}</div>
			<div className="cost-date__day">{day}</div>
		</Card>
	);
}

export default CostDate;
