import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = () => {
	return (
		<div className="expenses-filter">
			<div className="expenses-filter__control">
				<label>Filter by year</label>
				<select>
					<option value="2029">2029</option>
					<option value="2028">2028</option>
					<option value="2027">2027</option>
					<option value="2026">2026</option>
					<option value="2025">2025</option>
					<option value="2024">2024</option>
					<option value="2023">2023</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
