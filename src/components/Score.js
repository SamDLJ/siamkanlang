import { useState, useCallback } from 'react';
import { CheckCircleTwoTone } from '@ant-design/icons';

import '../App.css';

import { useSpring, animated } from 'react-spring';



const Score = ({live}) => {
	
	
	// maybe a list of them
	
	return (
		<>
			<CheckCircleTwoTone twoToneColor={live ? "#aaaa00" : "#000000"} style={{fontSize: '30px' }} />
		</>
	);
}

export default Score;