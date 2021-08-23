import React from 'react';

const LetterItem = (props) => {
	return (
		<div className={props.isCorrect? "correct-letter": ""}>
			{props.value}
		</div>
	);
};

export default LetterItem;
