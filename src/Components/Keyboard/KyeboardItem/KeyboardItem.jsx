import React from 'react';

const KeyboardItem = (props) => {
	return (
		<div className={`keyboard-item 
			keyboard-item_type${props.type}
			keyboard-item_size${props.size} 
			${props.isActive? "keyboard-item_active": ""}`}
			id={`keyboard-item-${props.id}`}>
			{props.value.map((item, index)=>{
				return <div key={`value-${index}`} className="keyboard-value">{item}</div>
			})}
		</div>
	);
};

export default KeyboardItem;
