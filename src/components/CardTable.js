import CardChoice from './CardChoice';
import FlashCard from './FlashCard';
import { Layout } from 'antd';
import { useState } from 'react';
import { Space } from 'antd';
//import { CardData } from '../CardData';
//import Draggable from "react-draggable";
import '../App.css';
//import { useState } from 'react';


/*

state includes all the cardchoices

takes in a list of tags

usage:
<CardTable 
	cardChoices={cardchoices}
	

***-------> FlashCard should be connected to the CardChoices somehow ***
	
*/
const { Header, Footer, Sider, Content } = Layout;
//const totalNumCards = 4; // update this for however many vocabulary words there are 

const bgcolor = "#005522";

const CardTable = ({ currCard, cardChoices, onCorrect, resetCard }) => {
	
	//const [cardChoices, setCardchoices] = useState()
	
	//<FlashCard cardChoices={}/>
	
	/*-------> this should not be random, should be a higher level since you cant change the card directly 
	const cid = ("000" + Math.floor(Math.random()*totalNumCards)).slice(-3);
	const cData = CardData[cid];
	
	const [currCard, setCardState] = useState(
		{
			english: cData.english,
			image: cData.image,
			written: cData.written,
			romanized: cData.romanized,
			showEnglish: true,
			showImage: true,
			showWritten: true,
			showRomanized: true,
		}
	);
	
	onClick={() => onCorrect(cardChoice.id)}
	*/
	
	//const [checkChoice, setCheckChoice] = useState();
	//const newCard = resetCard;
	
	const onCorrectCheck = (correct, type, choiceID) => {
		if (correct) {
			//console.log("adding "+type+" onto card...");
			
			
		} else {
			//console.log("nope!");
			
		}
		onCorrect(correct, type, choiceID);
		
	}
	
	const allTags = cardChoices.map((cardChoice) => 
		<CardChoice 
			key={cardChoice.id}
			
			isCorrect={cardChoice.isCorrect}
			choiceID={cardChoice.id}
			currCard={currCard.cardID}
			text={cardChoice.text} 
			type={cardChoice.type}
			
			onCorrect={onCorrectCheck}
		/>
	);
	// change to div instead a layout
	
	return (
		
		<Layout  style={{width: "auto", height: "", background: bgcolor}}>
			<FlashCard  currCard={currCard} getNewCard={resetCard} />
			
			<Sider 
				style={{background: bgcolor, marginLeft: "100px"}} 
				width={500}
				//minWidth={300}
			>
				{allTags}
			</Sider>
			<Sider style={{background: bgcolor, width: "auto", marginRight: "auto"}} width={200} />
		</Layout>
		
		
	);
}

export default CardTable;

/*
<Sider style={{background: "#227700"}} width={50}/>
		<>
			{cardChoices.map((cardChoice) => (
				<cardChoice key={card.cEnglish} task={card}/>
			))}
		</>

*/