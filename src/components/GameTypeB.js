import { 
	Button, 
	Tooltip,
	Layout,
	List,
	Avatar,
	Tag,
	Space
} from 'antd';
	
import { 
	LeftOutlined,
	SoundTwoTone
} from '@ant-design/icons';

//import Sound from ‘react-sound’;
import { useState, forceUpdate } from 'react';
import { Checkbox } from 'antd';


import Health from "./Health";
import Score from "./Score";

import CardTable from "./CardTable";
import { SentenceData } from "../SentenceData";
import { LessonBData } from "../LessonData";
import { LessonListData } from "../LessonListData";

import { useSpring, animated } from 'react-spring';

import click from '../sfx/click.mp3';

import useSound from 'use-sound';

//import Profile from "./components/Profile";
//import Login from "./components/Login";
//import { useSelector } from 'react-redux';

import '../App.css';

function importAll(r) {
  let images = [];
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));

const sounds = importAll(require.context('../sfx', false, /\.(mp3|ogg|mpeg)$/));

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

//const audio = new Audio('../sfx/a.m4a');

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const bgcolor = "#005522";
const listnames = LessonBData.map( d => Object.keys(d)[0] );
const slist_titles = SentenceData.map( d => d.title );


const { Header, Content, Sider } = Layout;


const totalNumCards = 7; // update this for however many vocabulary words there are 


const GameTypeB = ({ gameBState, lessonProgress, success=0, prevProgress, getHealthState, setHealthState }) => {
	
	//console.log("\nresetting...");//"  winState.health: "+winState.health);
	
	var title = LessonListData[lessonProgress].title;
	var lesson = "";
	var isPrev = false;
	
	if (prevProgress != lessonProgress) {
		
		title = LessonListData[prevProgress].title;
		isPrev = true;
	}
	
	lesson = SentenceData[slist_titles.indexOf(title)];
	const sentences = lesson.sentences;
	
	let cid = Math.floor(Math.random()*sentences.length);
	//let cid = ("000" + ) ).slice(-3);
	
	
	
	let convo = sentences[cid];
	
	//console.log(convo);
	
	const [convoState, setConvoState] = useState(convo);
	
	const [choicesState, setChoicesState] = useState();
	
	const [correctState, setCorrectState] = useState("");
	/*
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
	*/
	
	//const handleUpdate = () => {
	//    this.forceUpdate();  
	//};
	
	//console.log(convo);
	
	//const cid = ("000" + (2+Math.floor(Math.random()*totalNumCards)) ).slice(-3);
	
	//console.log(listnames+" - "+title);
	//console.log(slist_titles.indexOf(title))
	//var lesson_name = LessonBData[listnames.indexOf(title)][title];
	
	//console.log(lesson_name+"       "+slist_titles.indexOf(lesson_name));
	
	
		
	//var lesson_desc = LessonBData[listnames.indexOf(title)][description];
	
	//console.log(sentences);
	
	//console.log(lessonProgress+"   "+lesson_name+" "+title);
	//console.log(SentenceData.map( d => d.title ));
	
	var sss = 0;
	//var add = 0;
	//let h = healthState;
	
	const [winState, setWinState] = useState({ 
		score: getHealthState.score,
		health: getHealthState.health
	});
	
	
	
	const [nextCardState, setNextCardState ] = useState(0);
	//console.log("reloaded component... "+nextCardState);
	
	const chooseGameB = (changeGameB, i) => {
		setHealthState(0, 3);
		//console.log("GameTypeA .chooseGameA() -> "+changeGameA);
		gameBState(changeGameB, i);
	};
	
	const triggerWin = () => {
		console.log("triggerWin()");
		if (!isPrev) {
			//console.log("not isPrev!");
			success(2);
		} else {
			success(1);
		}
		
	};
	
	const triggerLose = () => {
		
		setHealthState(0, 3);
		console.log("triggerLose()");
		success(0);
	};
	
	const resetNextCardState = () => {
		//console.log("resetting resetNextCardState()...");
		//setNextCardState(false);
		//sss = false;
		newRandomSentence();
	};
	
	//console.log(nextCardState);
	const checkChoice = (tchoice) => {
		//console.log("checkChoice(): sss: "+sss+"   winState.health: "+winState.health);
		//console.log("clicked:  nextCardState:"+nextCardState);
		if (tchoice) {
			
			setCorrectState("");
			
			//console.log("bout to update score. s before:"+winState.score+"   h before:"+winState.health);
			let s = getHealthState.score+1;
			let h = getHealthState.health;
			
			//setHealth(h)
			setHealthState(s, h);
			setWinState({score: s, health: h});
			//add++;
			setNextCardState(1);
			sss = 1;
			//newRandomSentence(); want delayed
			//console.log("changed score:   s-"+s+" h-"+h);
			//console.log("+ sss: "+sss+"   winState.health: "+winState.health);
			
			
			
		} else {
			
			if (sss == 0) {
				let s = getHealthState.score;
				let h = getHealthState.health-1;
				
				setHealthState(s, h); //send to parent
				setWinState({score: s, health: h});
				
				console.log(s+" "+h);
				//add--;
				//console.log("changed health:   s-"+s+" h-"+h+"    winState: "+winState.score+" "+winState.health);
			} else {
				console.log("tried to update health");
			}
			
		}
		
		if (getHealthState.health <= 0) {
			
			triggerLose();
		} else if (getHealthState.score >= 5) {
			triggerWin();
		}
		//toggle(!state);
		//onCorrect(isCorrect, type, choiceID);
		
		//handleUpdate();
		
	};
	
	// onClick={() => (nextCardState ? resetNextCardState() : (correctChoice == tagchoice[tagchoice.length-1] ? checkChoice(true) : checkChoice(false) ) ) }
	
	const newRandomSentence = () => {
		//console.log("sss: "+sss);
		
		cid = Math.floor(Math.random()*sentences.length);
		convo = sentences[cid];
		setConvoState(convo);
		
		
		let type = shuffleArray(["english", "written"])[0];
		setCorrectState(type);
		
		let correct = convo[type];
		let correctChoice = correct[correct.length-1];
		
		let fake_choices = [...sentences];
		fake_choices.splice(cid, 1);
		let shuf_choices = shuffleArray(fake_choices);
		
		let choices = shuffleArray([ shuf_choices[0][type], shuf_choices[1][type], shuf_choices[2][type], correct ]);
		
		
		let allTags = choices.map((tagchoice, i) => 
			<div key={i} id={type == "written" ? "siamkan" : ""} style={{padding: "20px"}}>
				<Tag 
					style={{ padding: "10px 10px 10px 10px", fontSize: "1.2em",  boxShadow: "2px 2px 3px black"}} 
					color="#449944" 
					id="handpointer"
					onClick={() => (correctChoice == tagchoice[tagchoice.length-1] ? checkChoice(true) : checkChoice(false) ) }
				>
					<div >
						{tagchoice[tagchoice.length-1]}
					</div>
				</Tag>
			</div>
		);
		
		
		//setNextCardState(0);
		
		//sss = false;
		
		setChoicesState(allTags);
		//console.log("new sentence  winState: "+winState.score+" "+winState.health);
		//console.log("new sentence");
		//console.log("...after setChoicesState");
	};
	
	
	
	//const allHearts = [Array(winState.health).fill()].map(<><Health live={true}/></>);
	//const allHearts = Array(3).fill().map( (v, i) => {
	//	if (i < winState.health-1) {
	//			return <><Health live={true}/></>;
	//	} else {
	//			return <><Health live={false}/></>;
	//	}});
	
	const allHearts = Array.from({length: 3}, (e, i) => <><Health key={i} live={i < winState.health}/></> );
	const allScore = Array.from({length: 5}, (e, i) => <><Score key={i} live={i < winState.score}/></> );
	
	//score: {winState.score}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; health: {winState.health}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; waiting...{nextCardState}
	
	//console.log("...about to return:   sss: "+sss+"   winState.health: "+winState.health);
	
	//let s = winState.score;
	//let h = winState.health;
	//setWinState({score: s, health: h});
	//console.log(winState);
	console.log(sounds);
	
	
	
	var [play] = useSound(click);
	
	//const playSound = (filename) => {
	//	[play] = useSound(filename);
	//}
	
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
						onClick={() => chooseGameB("state-lessonlist", 99999)}
					/>
					&nbsp; Lessons
				</Tooltip>
				<Space style={{ position: "relative", left: "200px" }} > {allHearts}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {allScore} </Space>
				
					
				
			</Header>
	
			<Content style={{ 
				background: bgcolor, 
				//width: "80%",
				//height: "auto",
				//background: "#000000",
				//justifyContent: "center",
				//textAlign: "center",
				//"marginRight": "auto",
				//"marginLeft": "10vw",
				//"marginTop": "50px",
				//"marginBottom": "50px",
				/* margin: "auto" /**/
			}}>
				
				<div style={{
					backgound: "#ff0000", 
					position: "relative", 
					top: "100px", 
					left: "50px", 
					//right: "100px", 
					//width: "100vw", 
					height: "50vh",  
					display: "flex",
					padding: "20px 100px 30px 100px",
					alignItems: "center", 
					textAlign: "center"
				}}>
					
					
					<div style={{ 
						background: "#eeeeee", 
						position: "relative",
						//display: "flex",
						width: "100vw", 
						//left: "10px",
						right: "50px",
						minWidth: "400px",
						maxWidth: "500px",
						//width: "500px",
						//rightMargin: "400px",
						padding: "5px 20px 20px 20px", 
						boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
						borderRadius: "20px"
					}}>
					
				
				
						<List
					    itemLayout="horizontal"
					    dataSource={convoState.speakers}
					    renderItem={ (item, i) => (
							
					      <List.Item style={{ padding: "1px", position: "relative", top: "10px", bottom: "10px" }}>
									{i % 2 ?
										<>
											<List.Item.Meta 
												style={{ textAlign: "right" }} 
												title={<>
													<a className="howToSay" id="siamkan" style={{padding: "20px", color: "#000000"}}>
														{i == convoState.speakers.length-1 && correctState == "written" ? "  " : convoState.written[i]}
													<Button 
														className="howToSay"
														style={{background: "#eeffee", left: "20px", top: "25px"}}
														shape="circle" 
														icon={<SoundTwoTone twoToneColor="#229900" style={{ transform: "scaleX(-1)"/*backgroundColor: "#000000"/**/}}/>} 
														onClick={play}
													/>
													</a>
													<div className="hide" style={{padding: "0px 50px 0px 0px"}}>
														{i == convoState.speakers.length-1 && correctState == "written" ? "???" : convoState.romanized[i]}
													</div>
												</>} 
												description={
													<a style={{ padding: "10px 50px", fontStyle: "italic", color: "#777777" }}>
														{i == convoState.speakers.length-1 && correctState == "english" ? "???" : convoState.english[i]}
													</a>
												}
											/>
											
											<Avatar size="large" src={images[convoState.images[i]]} style={{position: "relative", left: "10px"/*right: "20px", left: "20px"*/}} />
										</>
										: 
										<>
											<Avatar size="large" src={images[convoState.images[i]]} style={{position: "relative", right: "10px"}}/>
										
											<List.Item.Meta 
												style={{textAlign: "left",  }}
												title={<>
													<a className="howToSay" id="siamkan" style={{padding: "20px", color: "#000000"}}>
													<Button 
														className="howToSay"
														style={{background: "#eeffee", right: "20px", top: "25px"}}
														shape="circle" 
														icon={<SoundTwoTone twoToneColor="#229900" style={{/*backgroundColor: "#000000"/**/}}/>} 
														onClick={play}
														//onClick={playSound(sounds[convoState.sound])}
													/>
														{i == convoState.speakers.length-1 && correctState == "written" ? "  " : convoState.written[i]}
													</a>
													<div className="hide" style={{padding: "0px 0px 0px 50px"}}>
													
														{i == convoState.speakers.length-1 && correctState == "written" ? "???" : convoState.romanized[i]}
														
													</div>
													
												</>} 
												description={
													<a style={{ padding: "10px 50px", fontStyle: "italic", color: "#777777" }}>
														{i == convoState.speakers.length-1 && correctState == "english" ? "???" : convoState.english[i]}
														
													</a>
												}
												
											/>
											
										</>
									}
					      </List.Item>
					    )}
					  />
					
				
					</div>
							
					<div style={{ 
								//background: bgcolor, 
								background: "rgba(0,0,0,0)",
								//opacity: 0,
								//width: "100%", 
								//left: "50px",
								//display: "flex",
								//alignItems: "right",
								padding: "10px", 
								position: "relative",
								float: "right"
					}}>
						<div style={{ padding: "20px"}}>
							{choicesState}
						</div>
					</div>
					
							
				</div>
				
						
					
					
								
			</Content>
							
					
					
    
			<div >
		    <Button 
					style={{ background: "#222222", bottom: "75px", left: "45%", position: "fixed" }} 
					type="primary" 
					htmlType="submit" 
					onClick={() => resetNextCardState()}
				>
		      Refresh
		    </Button>	
					
			</div>
					
		</Layout>
	);
}

export default GameTypeB;
