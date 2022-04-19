import { 
	Button, 
	Tooltip,
	Layout,
	Space
	
} from 'antd';
	
import { 
	LeftOutlined
} from '@ant-design/icons';


import { useState } from 'react';

import Health from "./Health";
import Score from "./Score";
import CardTable from "./CardTable";
//import { VocabData } from "../VocabData";
import { LessonAData } from "../LessonData";
import { LessonListData } from "../LessonListData";

//import Profile from "./components/Profile";
//import Login from "./components/Login";
//import { useSelector } from 'react-redux';

import '../App.css';


function shuffleArray(array_) {
   for (var i = array_.length - 1; i > 0; i--) {
   
       // Generate random number
       var j = Math.floor(Math.random() * (i + 1));
                   
       var temp = array_[i];
       array_[i] = array_[j];
       array_[j] = temp;
   }
       
   return array_;
}


const bgcolor = "#005522";
const listnames = LessonAData.map( d => Object.keys(d)[0] ); // <-----


const { Header, Content } = Layout;


//const totalNumCards = 7; // update this for however many vocabulary words there are 


const GameTypeA = ({ gameAState, lessonProgress, success=0, prevProgress, getHealthState, setHealthState }) => {
	
	var title = LessonListData[lessonProgress].title;
	var lesson = "";
	var isPrev = false;
	
	if (prevProgress != lessonProgress) {
		
		title = LessonListData[prevProgress].title;
		isPrev = true;
	}
	
	lesson = LessonAData[listnames.indexOf(title)][title];
	let cards = lesson["cards"];
	
	let numCards = Object.keys(cards).length-1;
	//console.log(numCards);
	
	let cid = ("000" + (Math.floor(Math.random()*numCards)) ).slice(-3);
	
	let cData = cards[cid]; //LessonAData[listnames.indexOf(title)][title];
	//console.log(cid+"-------------");
	//console.log(cData);
	//const cid = ("000" + (2+Math.floor(Math.random()*totalNumCards)) ).slice(-3);
	
	//let cData = VocabData[cid];
	
	const [cardState, setCardState] = useState(
		{
			english: cData.english,
			image: cData.image,
			written: cData.written,
			romanized: cData.romanized,
			showEnglish: true,
			showImage: true,
			showWritten: true,
			showRomanized: true,
			resetSpin: false,
		}
	);
	
	//const [debugText, setDebug] = useState("");
	
	const [cardchoices, setCardChoices] = useState([]);
	
	const [winState, setWinState] = useState({ 
		score: getHealthState.score,
		health: getHealthState.health
	});
	/*
		{
			id: 0,
			text: "",
			type: "",
		}
	
	*/
	
	
	// new card
	const newRandomCard = () => {
		//const id = Math.floor(Math.random() * 10) + 1;
		//let cid = ("000" + (2+ Math.floor(Math.random()*numCards)) ).slice(-3);
		//let cData = VocabData[cid];
		let cid = ("000" + (Math.floor(Math.random()*numCards)) ).slice(-3);
		let cData = cards[cid]; //LessonAData[listnames.indexOf(title)][title];
		
		
		/*
			make copy of card data list, and remove the 'answer' card
		*/
		//let copyCardData = {...VocabData};
		let copyCardData = {...cards};
		delete copyCardData[cid];
		
		let copyCDList = Object.values(copyCardData);
		let trickCardData = shuffleArray(copyCDList);
		let difficulty = 3;
		
		
		/* 
			get subset of possible types to take from 'answer' card. 
			No more than three (otherwise, nothing to match on the card!)
		*/
		let allFourTypes = cData.image == "-" ? shuffleArray(["english", "written", "romanized"]) : shuffleArray(["english", "written", "romanized", "image"]);
		let hasNoImage = cData.image == "-" ? 2 : 3;
		let randSp = Math.floor(Math.random() * hasNoImage)+1;
		let takeFromFourTypes = [...allFourTypes].splice(0, randSp);
		let leftoverTypes = [...allFourTypes].splice(randSp);
		
		/*
			create correct answer tags
		*/
		var idcount = 0;
		let correctChoices = [];
		for (let i=0; i<leftoverTypes.length; i++) {
			correctChoices.push({
				id: idcount,
				isCorrect: true,
				text: cData[leftoverTypes[i]],
				type: leftoverTypes[i]
			});
			idcount++;
		}
		
		/*
			get subset of 'fake' answers, no more than the amount 
				of total entries (don't want repeats)
		*/
		let trickChoices = [];
		for (let i=0; i<difficulty && i<trickCardData.length; i++){
			
			for (let j=0; j<leftoverTypes.length; j++){
				let ctype = leftoverTypes[j];
				//console.log(i+" "+j+" "+ctype+" "+trickCardData[i][ctype]);
				
				if (!(ctype == "image" && trickCardData[i]["image"] == "-")) {
					trickChoices.push({
						id: idcount,
						isCorrect: false,
						text: trickCardData[i][ctype],
						type: ctype
					});
					idcount++;
				}
			}
		}
		
		let allChoices = shuffleArray([...correctChoices, ...trickChoices]);
		
		//let correct = cid+" "+cData.english+" . . . ";
		//let correct = cid+" . . . . "+allFourTypes.toString()+" -> "+takeFromFourTypes.toString()+" / "+leftoverTypes.toString()+ "___________ "+allChoices.toString();
		//let correct = allChoices.toString();
		//let correct = cData.english;//trickCardData[cid].english; //map(k => k.toString());
		
		//setDebug(correct);
		setCardChoices( allChoices );
		
		
		let newCardState = {
				cardID: cid,
				english: cData.english,
				image: cData.image,
				written: cData.written,
				romanized: cData.romanized,
				showEnglish: takeFromFourTypes.includes("english"),
				showImage: takeFromFourTypes.includes("image"),
				showWritten: takeFromFourTypes.includes("written"),
				showRomanized: takeFromFourTypes.includes("romanized"),
				resetSpin: true,
				singleWord: cData.singleWord,
				noImage: cData.image == "-" ? true : false,
			  //size: cData.size ? cData.size : "2em",
		};
		
		
		setCardState( newCardState );
		
		
	};
	
	const onCorrect = (correct, type, choiceID) => {
		//console.log("correct? "+choice);
		if (correct) {
			
			//console.log("got it! adding "+type+" back onto the card");
			let newCardState = {...cardState}; //re-map the card state but change the type
			newCardState.resetSpin = false;
			
			switch(type) {
				case "english":
					newCardState.showEnglish = true;
					break;
				case "image":
					newCardState.showImage = true;
					break;
				case "written":
					newCardState.showWritten = true;
					break;
				case "romanized":
					newCardState.showRomanized = true;
					break;
				default:
					console.log("no change.");
			} 
			setCardState( newCardState );
			
			// reset choices -- remove choice from table
			let newCardChoices = [...cardchoices];
			
			let rm = 0;
			for (let i=0; i<newCardChoices.length; i++) {
				if (newCardChoices[i].id === choiceID) {
					rm = i;
					break;
				}
			}
			newCardChoices.splice(rm, 1);
			
			setCardChoices( newCardChoices );
			
			
			if (
				newCardState.showEnglish &&
				(newCardState.showImage || newCardState.noImage) &&
				newCardState.showWritten &&
				newCardState.showRomanized
			) {
				//let updateScore = winState.score+1; //
				//let updateHealth = winState.health; //
				let s = getHealthState.score+1;
				let h = getHealthState.health;
			
				//setHealth(h)
				setHealthState(s, h);
				setWinState({score: s, health: h});
				//setWinState({ score: updateScore, health: updateHealth });
				
				if (getHealthState.score >= 5) {
					triggerWin();
				}
				
				// *** ***   play success animation here   *** ***
				
				
				newRandomCard();
				
				
			}
			
		} else {
			
			
			//let updateScore = winState.score;
			//let updateHealth = winState.health-1;
			let s = getHealthState.score;
			let h = getHealthState.health-1;
		
			//setHealth(h)
			setHealthState(s, h);
			setWinState({score: s, health: h});
			//setWinState({ score: updateScore, health: updateHealth });
			
			if (getHealthState.health <= 0) {
				triggerLose();
			}
			
		}
	};
	
	
	
	
	
	const chooseGameA = (changeGameA, i) => {
		
		//console.log("GameTypeA .chooseGameA() -> "+changeGameA);
		gameAState(changeGameA, i);
	};
	
	const triggerWin = () => {
		if (!isPrev) {
			//console.log("not isPrev!");
			success(2);
		} else {
			success(1);
		}
		
	};
	
	const triggerLose = () => {
		success(0);
	};
	
	/*
		useEffect(() => {
		  if (courseData && courseData.lessonsRead) {
		    setLessonsRead(courseData.lessonsRead)
		  }
		}, [courseData])
	*/
	/*
	// --------- state-lessonlist ------------
	// after user clicks on a lesson
	const chooseLesson = (lesson) => {
		if (lesson == "state-gametypeA") {
			newRandomCard();
		}
		
		setState(lesson);
	};
	*/
	/* 
	
	style={{ color: "#000000", background: "transparent"}}
	
	
	UserloginScreen.js
	LessonlistScreen.js
	GameTypeAScreen.js
					//<Layout>
					//<Layout>
	
	<Sider style={{background: "#222222", color: "white"}}>sider</Sider>
	*/
	
	
	const allHearts = Array.from({length: 3}, (e, i) => <><Health key={i} live={i < winState.health}/></> )
	const allScore = Array.from({length: 5}, (e, i) => <><Score key={i} live={i < winState.score}/></> );
	
	
	return (
		<Layout style={{ background: bgcolor, height: "100vh" }}>
			<Header style={{ background: "#222222", color: "white"}} >
		
				<Tooltip title="Choose a different lesson.">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<Button 
						style={{ background: "#222222", color: "#ffffff" }}
						type="primary" 
						shape="round" 
						icon={<LeftOutlined />} 
						onClick={() => chooseGameA("state-lessonlist", 99999)}
					/>
					&nbsp; Lesson List
				</Tooltip>
				<Space style={{ position: "relative", left: "200px" }} > {allHearts}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {allScore}  </Space>
				
			</Header>
	
			<Content style={{ 
				background: bgcolor, 
				//width: "80%",
				//height: "auto",
				//background: "#000000",
				//textAlign: "center",
				//"marginRight": "auto",
				"marginLeft": "100px",
				"marginTop": "50px",
				//"marginBottom": "50px",
				/* margin: "auto" /**/
			}}>
				<div style={{width: "", height: ""}}>
					<CardTable 
						currCard={cardState}
						cardChoices={cardchoices}
						onCorrect={onCorrect}
						resetCard={cardState.resetSpin}
					/>
				</div>
		
			</Content>
	
	
    
			<div >
		    <Button 
					style={{ background: "#222222", bottom: "75px", left: "45%", position: "fixed" }} 
					type="primary" 
					htmlType="submit" 
					onClick={() => newRandomCard()}
				>
		      New Card
		    </Button>	
			</div>
		</Layout>
	);
}
// {getHealthState.score}
export default GameTypeA;
