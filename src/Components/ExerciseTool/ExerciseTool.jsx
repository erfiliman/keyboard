import React from 'react';

const ExerciseTool = (props) => {
	return (
		<div className="exercise-tool-container">
			<div className="exercise-tool exercise-tool_average-error">
				<div>Средний процент ошибки: </div>
				<div>{(props.errors* 100).toFixed(2) }%</div>
			</div>
			<div className="exercise-tool exercise-tool_average-speed">
				<div>Время на символ: </div>
				<div>{(props.time).toFixed(0) }</div>
			</div>
		</div>
	);
};

export default ExerciseTool;
