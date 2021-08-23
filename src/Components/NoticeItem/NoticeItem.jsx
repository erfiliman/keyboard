import React from 'react';

const NoticeItem = (props) => {
	return (
		<div className="notice-item">
			<div>Процент ошибки: {props.error}%</div>
			<div>Время на символ: {props.speed}</div>
		</div>
	);
};

export default NoticeItem;
