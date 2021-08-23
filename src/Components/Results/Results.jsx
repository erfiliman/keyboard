import React, {useState} from 'react';

const Results = () => {
	const [notifications, setNotifications]  = useState(localStorage.getItem('notification') === null ? [] : JSON.parse(localStorage.getItem('notification')));
	return (
		<div className="result-items-container">
			{notifications.map((item)=>{
				return (
					<div className="result-item">
						<div>Процент ошибки: {item.error}%</div>
						<div>Время на символ: {item.speed}</div>
						<div>Дата: {item.date}</div>
					</div>
				)
			})}
		</div>
	);
};

export default Results;
