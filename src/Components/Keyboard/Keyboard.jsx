import React, {useEffect, useState} from 'react';
import KeyboardItem from "./KyeboardItem/KeyboardItem";

const Keyboard = (props) => {
	const [info, setInfo] = useState([]);
	useEffect(()=> {
		setInfo(props.keyboardInfo);
	}, [props.keyboardInfo])

	return (

		<div className="keyboard-items-container" >
			{info.map((item, index)=>{
				return <KeyboardItem key={index} value={item.value} id={item.id} type={item.type} size={item.size} isActive={item.isActive} code={item.code} />
			})}
		</div>
	);
};

export default Keyboard;
