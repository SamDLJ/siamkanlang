import { useState, useCallback } from 'react';
import { HeartTwoTone } from '@ant-design/icons';

import '../App.css';

import { useSpring, animated } from 'react-spring';



const Health = ({live}) => {
	
	
	// maybe a list of them
	
	return (
		<>
			<HeartTwoTone twoToneColor={live ? "#008800" : "#000000"} style={{fontSize: '30px' }} />
		</>
	);
}

export default Health;