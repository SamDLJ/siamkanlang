import { useState, useCallback } from 'react';
import { Tag, Card, Image } from 'antd';
import '../App.css';

import { useSpring, animated } from 'react-spring';


//import Fader from './Fader';
// import { pic } from 'antd
//import Draggable from "react-draggable";
// onClick -> checkCorrect()

const { Meta } = Card;

function importAll(r) {
  let images = [];
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
const bgcolor = "#005522";





const CardChoice = ({ isCorrect, currCard, text, type, choiceID, onCorrect }) => {
	
	const [fadeOn, setFadeOn] = useState(true);
	//const [ignored, newState] = useState();
	//const styles = useSpring({ opacity: toggle ? 1 : 0 });
	//const [styles, api] = useSpring(() => ({ opacity: 1 }));
	//api.start({ opacity: toggle ? 1 : 0 });
	
	
	
	
	const fade = useSpring({
		reset: true,
		from: { opacity: 0.0 }, 
		to: { 
			opacity: 1,
		}
	});
	
	// jump out if correct, shake if wrong
	
	const stylesSpring = useSpring({
		reset: true,
	  from: { x: 10, y: 5 },
	  to: { x: 0, y: 0 },
		config: { mass: 0.5, tension: 2000, friction: 10}
	});
	
	
	const [state, toggle] = useState(true);
	/*
	const {  } = useSpring({
		from: { x: 0 },
		x: state ? 10 : 0,
		config: { duration: 1000 },
	});
	*/
	
	var imagepath = "";
	if (type == "image") {
		imagepath = "./images/"+text;
	};
	
	
	const checkChoice = () => {
		//let isCorrect = currCard == 
		//console.log(currCard+" ? "+isCorrect);
		
		toggle(!state);
		onCorrect(isCorrect, type, choiceID);
		
	};
	
	
	
	
	// also an "else if image" config={{duration: 5000}}
	//  className="fade-in"
	return (
		type == "written" ?
			<animated.div  style={{  padding: "4px 5px", float: "left", opacity: fade.opacity, /*...stylesSpring*/ }} id="siamkan">
				<Tag 
					style={{ padding: "10px", fontSize: "1.2em",  boxShadow: "2px 2px 3px black"}} 
					color="#004400" 
					id="handpointer"
					onClick={() => checkChoice()}
					
				>
					{ text }
				</Tag>
			</animated.div>
		 :
		(type == "image" ?
			<animated.div style={{  padding: "10px 10px", float: "left", background: bgcolor, opacity: fade.opacity }} >
		  	<div style={{ boxShadow: "3px 3px 4px black"}}>
					<Card
				    id="handpointer" 
				    style={{ width: 100, height: 100, padding: "0px", color: "#990000" }}
				    cover={<img alt="example" src={images[text]} />}
						bodyStyle={{padding: "0px 0px 0px 0px"}}
						onClick={() => checkChoice()}
						/>
				</div>
				
			</animated.div>
			: 
			(type == "romanized" ?
				<animated.div  style={{ padding: "10px 5px", float: "left", opacity: fade.opacity }} >
					<Tag 
						style={{  padding: "5px", fontSize: "1.5em", boxShadow: "2px 2px 3px black"}} 
						color="#339944" 
						id="handpointer" 
						onClick={() => checkChoice()}
					>
						{ text }
					</Tag>
				</animated.div>
				:
				<animated.div  style={{ padding: "10px 5px", float: "left", opacity: fade.opacity }} >
					<Tag 
						style={{  padding: "5px", fontSize: "1.5em", boxShadow: "2px 2px 3px black"}} 
						color="#668800" 
						id="handpointer" 
						onClick={() => checkChoice()}
						
					>
						{ text }
					</Tag>
				</animated.div>
			)
		)
	);
}

export default CardChoice;

/*

li.pointer {
        cursor: pointer;
      }

	<Tag color="magenta">magenta</Tag>
	<Tag color="red">red</Tag>
	<Tag color="volcano">volcano</Tag>
	<Tag color="orange">orange</Tag>
	<Tag color="gold">gold</Tag>
	<Tag color="lime">lime</Tag>
	<Tag color="green">green</Tag>
	<Tag color="cyan">cyan</Tag>
	<Tag color="blue">blue</Tag>
	<Tag color="geekblue">geekblue</Tag>
	<Tag color="purple">purple</Tag>





	carddata is undefined?
*/

/*

onDragOver={(e)=>this.onDragOver(e)}

		<Draggable>
			<Tag color="magenta">{ text }</Tag>
		</Draggable>

		<>
			{cards.map((card) => (
				<Card key={card.cEnglish} task={card}/>
			))}
		</>

*/