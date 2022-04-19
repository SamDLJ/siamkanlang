import { Card, Avatar } from 'antd';
//import { useState } from 'react';


//import { EllipsisOutlined } from '@ant-design/icons';

import { useSpring, animated } from 'react-spring';


//import { CardData } from '../CardData';
//import Draggable from "react-draggable";

//const { Header, Footer, Sider, Content } = Layout;


function importAll(r) {
  let images = [];
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}


// Use the function you've created by passing in the directory!
//const images = importAll(require.context('../images',false))
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));


const { Meta } = Card; // antd

//const totalNumCards = 4; // update this for however many vocabulary words there are 

//const bgcolor = "#116611";

//boxShadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

//const vocabCard = ({ vcard, playAudio }) => {
const FlashCard = ({ currCard, getNewCard }) => {
	
	
	
	// if newCard
	
	
	//const [resetCard, setResetCard] = useState(getNewCard);
	
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
	*/	
	//if (getNewCard) {
	//	setResetCard(true);
	//}
	
	
	// only reset if new card
	const stylesSpring = useSpring({
	    reset: getNewCard,
	    from: { rotateZ: getNewCard ? 200 : -5 },
	    to: { rotateZ: -5 },
	});

	
	// card.cImage, card.cEnglish, card.cWritten, card.cRomanized, card.cText, card.audioOn
	// https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png
	// "./images/image-001.png"
	
	return (
			<animated.div 
				style={{
					marginLeft: "auto", marginRight: "auto",
					width: "", height: "", 
					padding: "30px 30px", 
					...stylesSpring 
				}}
			>
				<div style={{ boxShadow: "10px 10px 10px #223322",}}>
					<Card 
						style={{
							textAlign: "center",  
							//"margin-right": "5px",
							//"margin-left": "5px",
							//"margin-top": "5px",
							//"margin-bottom": "5px",
							width: currCard.singleWord ? "250px" : "auto",
							//boxShadow: "5px 5px 5px #222222",
							//background: "#efffef"
						
						}}
				    //title={currCard.showEnglish ? <h1 style={{fontSize: currCard.size, color: "#888800"}}>{currCard.english}</h1> : "-"}
						title={currCard.showEnglish ? <h1 style={{fontSize: "1.5em", color: "#888800"}}>{currCard.english}</h1> : "-"}
				    cover={<
							img alt="" 
							src={currCard.showImage ? images[currCard.image] : "" } 
							style={{
								width: "150px", 
								height: currCard.image == "-" ? "0px" : "150px",
							
								//objectFit: "contain",
								"marginTop": "10px",
								//"margin-bottom": "10px",
								"marginRight": "auto",
								"marginLeft": "auto", /**/
							}}
						/>}
				  >
				    <Meta 
							style={{width: "auto", height: "auto"}}
				      title={currCard.showWritten ? <h1 id="siamkan" style={{fontSize: "2.7em"}}>{currCard.written}</h1> : "-"}
				      description={currCard.showRomanized ? <h1 style={{fontSize: "1.5em", color: "#007700", fontStyle: "italic"}}>{currCard.romanized}</h1> : "-"}
				    />
				  </Card>
				</div>
			</animated.div>
	);
	
	
}


/*
FlashCard.defaultProps = {
	english: '[english]',
	image: '[image]',
	written: '[written]',
	romanized: '[pronunciation]',
	showEnglish: true,
	showImage: true,
	showWritten: true,
	showRomanized: true,
}
*/

export default FlashCard;

/*
	<Meta
		avatar={<Avatar src={images["silvestor.png"]} />}
	>
				<p style={{textAlign: "center", background: "#ffffff"}}>
					{}&nbsp;&nbsp;
					{currCard.image}&nbsp;&nbsp;
					{cid}
				</p>

		<Card
	    
	    cover={<img alt="[no image]" src={"../images/image-"+cid+".png"}/>}
	    actions={[<EllipsisOutlined key="ellipsis" />,]}

			actions={[<EllipsisOutlined key="ellipsis" />,]}
	  >





	return (
		<>
		<div className={vcard.cEnglish}>
		
			<h3>{vcard.cEnglish}</h3>
			<img src={vcard.cImage}/>
			<h2>{vcard.cWritten}</h2>
			<h3>{vcard.cRomanized}</h3>
		
		
		</>
	)



		<div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
			<h3 onClick={() => onDelete(task.id)}>{task.text}</h3>
			<p>{task.day}</p>
		</div>

		<h3 onClick={() => playAudio(card.cAudio)}>{card.cText}</h3>




			switch(card.cType) {
			  case 0:
					{
						<img src={card.cImage}>
						<h3>{card.cWritten}</h3>
					}
			    break;
			  case 1:
					{
						<h2>{card.cWritten}</h2>
						<h3>. . . . .</h3>
						<h3>{card.cEnglish}</h3>
					}
			    break;
			  case 2:
					{
						<h3>{card.cEnglish}</h3>
						<h2>{card.cWritten}</h2>
						<h3>{card.cRomanized}</h3>
					}
			    break;
			  
			  default:
					{
						<h3>{card.cEnglish}</h3>
						<img src={card.cImage}>
					}
			} 











*/