import React, {useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import PropTypes from 'prop-types';
import '../App.css';

/*
const Fader = ({ text }) => {
	
	const [fadeProp, setFadeProp] = useState({
		fade: 'fade-in',
	});
	
	return (
		<>
		
		</>
	);
}

Fader.defaultProps = {
	text: 'Hello there'
	
}

Fader.propTypes = {
	text: PropTypes.string,
	
}
*/

const Fader = () => {
	const [isOn, setFade] = useState(false);
	const fade = useSpring({
		opacity: isOn ? 1 : 0
	});
	
	return (
		<animated.div style={fade}>
			<button onClick={() => setFade(!isOn)}> fade </button>
		</animated.div>
	);
}

export default Fader;