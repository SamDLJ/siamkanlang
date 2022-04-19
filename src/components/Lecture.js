import { 
	Button, 
	Tooltip,
	Layout,
	
} from 'antd';
	
import { 
	LeftOutlined
} from '@ant-design/icons';


import { useState } from 'react';

import { LectureData } from "../LectureData";
import { LessonListData } from "../LessonListData";

import { useSpring, animated } from 'react-spring';
//import CardTable from "./CardTable";
//import { VocabData } from "../VocabData";

//import Profile from "./components/Profile";
//import Login from "./components/Login";
//import { useSelector } from 'react-redux';

import '../App.css';




//const bgcolor = "#cceeaa";
const bgcolor = "#55bb55";

const { Header, Content, Sider } = Layout;

const listnames = LectureData.map( d => Object.keys(d)[0] ); // <-----
/*
		also need audio clips

*/

function importAll(r) {
  let items = [];
  r.keys().map((item, index) => { items[item.replace('./', '')] = r(item); });
  return items;
}
const images = importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
const sounds = importAll(require.context('../audio/speech', false, /\.(mp3|ogg|mpeg)$/));


const Lecture = ({ lectureState, lectureProgress, finished=0, prevProgress }) => {
	
	
	
	
	const fade_text = useSpring({
		reset: true,
		from: { opacity: 0.0 }, 
		to: { 
			opacity: 1,
		}
	});
	
	//console.log("---------------------");
	//console.log("Lecture prevProgress: "+prevProgress+"  lectureProgress: "+lectureProgress);
	
	var title = LessonListData[lectureProgress].title;
	var lecture = "";
	var isPrev = false;
	
	if (prevProgress != lectureProgress) {
		
		title = LessonListData[prevProgress].title;
		isPrev = true;
	}
	
	lecture = LectureData[listnames.indexOf(title)][title];
	//currSlide.
	//console.log("title: "+title+"   index: "+listnames.indexOf(title)+"   prevProgress: "+prevProgress+"=="+lectureProgress+"?  isPrev: "+isPrev);
	
	//transition: width 2s;
	//console.log(lecture.slides);
	/*
	//console.log("current: "+title+"    "+listnames); // if lecture
	//if (listnames.includes(title)) { // then 
		
		//if (prevProgress == lectureProgress) {
		//	title = LessonListData[lectureProgress].title;
	  //}
		lecture = LectureData[title]; // Lesson 1 not in there! use prevProgress instead if not there
		//isPrev = false;
		console.log("title "+title+"    lecture "+lecture);
		
	} else {
		console.log("lecture data does not have title");
		if (prevProgress == lectureProgress) {
			console.log("latest");
		}
		
		title = LessonListData[prevProgress].title;
		lecture = LectureData[title];
		
		if (lectureProgress == prevProgress){
			isPrev = false;
			//console.log("isprev true");
		} else {
			isPrev = true;
		}
		
	}
	*/
	
	/*
	<Button 
		className="howToSay"
		style={{background: "#eeffee", right: "20px", top: "25px"}}
		shape="circle" 
		icon={<SoundTwoTone twoToneColor="#229900" />} 
		//onClick={}
	/>
	*/
	
	
	//let x = LectureData[lectureProgress];
	//console.log(lecture.slides[0].image);
	//console.log("Lecture prevProgress: "+prevProgress+"  title: "+title+"  ");
	
	
	const changeLectureState = (changeLecture) => {
		//console.log("GameTypeA .chooseGameA() -> "+changeLecture);
		
		//console.log(slide_no);
		lectureState(changeLecture);
	};
	
	const max = lecture.slides.length;
	//const lecture.slides.text
	
	
	
	const [isFinished, setFinished] = useState(false);
	const [currSlide, setCurrSlide] = useState(0);
	const [currText, setCurrText] = useState(0);
	const [nextButton, setNextButton] = useState(false);
	
	
	
	const fade = useSpring({
		reset: true,
		from: { opacity: currText == 0 ? 0.0 : 1 }, 
		to: { 
			opacity: 1,
		},
		config: {
			duration: 500,
		}
	});
	
	const prevSlide = () => {
		let curr = currSlide-1;
		if (currSlide > 0) {
			setCurrSlide(curr);
			//console.log(curr+" "+isFinished);
		}
		
	};
	
	
	const nextSlide = () => {
		let curr = currSlide+1;
		if (curr >= max) {
			//console.log("curr >= max  "+prevProgress+"   "+lectureProgress);
			
			if (!isPrev) {
				//console.log("! isPrev. finished(2)");
				finished(2);
			} else {
				//console.log("isPrev.   finished(1)");
				finished(1);
			}
			
			changeLectureState("state-lessonlist");
		} else {
			setCurrSlide(curr);
			setCurrText(0);
			setNextButton(false);
			//console.log(curr+" "+isFinished);
		}
	};
	
	const num_texts = lecture.slides[currSlide].text.length;
	const nextText = () => {
		let curr = currText+1;
		if (curr < num_texts) {
			setCurrText(curr);
		} 
		if (curr >= num_texts-1){
			setNextButton(true);
		}
	}
	
	const allTexts = Array.apply(null, Array(currText+1)).map(function (x, i) { 
		return <p key={i}>{lecture.slides[currSlide].text[i]}</p>;
	});
	
	const text_right = lecture.slides[currSlide].text_position == "right";
	
	var got_image = true;
	if (!lecture.slides[currSlide].image) {
		got_image = false;
	}
	//console.log(got_image);
	//console.log(lecture.slides[currSlide].image);
	
	
	
	//console.log(right);
	
	
	
	return (
		<Layout style={{ background: bgcolor, height: "200vh", }}>
			<Header style={{ background: "#222222", color: "white" }} >
				
				<Tooltip title="Choose a different lesson.">
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					<Button 
						style={{ background: "#222222", color: "#ffffff" }}
						type="primary" 
						shape="round" 
						icon={<LeftOutlined />} 
						onClick={() => changeLectureState("state-lessonlist")}
					/>
						&nbsp; Lesson List &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{lecture.description}
					
				</Tooltip>
				
			</Header>
	
			<Content style={{ 
				background: bgcolor, 
				//width: "80%",
				//height: "auto",
				//background: "#000000",
				//textAlign: "center",
				//"marginRight": "auto",
				//"marginLeft": "100px",
				//"marginTop": "50px",
				//"marginBottom": "50px",
				/* margin: "auto" /**/
			}}>
				<Layout style={{ background: bgcolor }} onClick={() => nextText()}>
					<Sider width={100} style={{ background: "transparent" }} />
				 
					
					<Content 
						style={{ background: bgcolor, height: "100vh", }}
					>
						
						<animated.div 
							style={{ 
								float: text_right? "left" : "",
								opacity: fade.opacity, 
								textAlign: text_right? "left" : "center",  
								padding: "5%", 
								background: bgcolor, 
								width: "auto", 
								height: "auto",
								
							}}
							onClick={() => nextText()}
						>
							<img 
								src={images[lecture.slides[currSlide].image]}
								style={{
									width: "400px", 
									height: "400px", 
									boxShadow: "rgba(0, 0, 0, 0.29) 0px 10px 20px, rgba(0, 0, 0, 0.53) 0px 6px 6px",	
									visibility: got_image ? "" : "hidden",
									userSelect: "none"
								}}
							/>
						</animated.div>
						
						<div 
							style={{
								transition: "background 2s", 
								padding: "",
								textAlign: "center",
								//textAlign: text_right? "right": "center",
								position: "relative",
								top: text_right? (got_image ? "40px" : "0px") : (got_image ? "-30px" : "-450px"),
								userSelect: "none"
							}}
							onClick={() => nextText()}
						>
							{allTexts}
						</div>
							
					</Content>
					<Sider width={200} style={{ background: "transparent"}} />
				</Layout >
			</Content>
								
	
    
			<div >
		    <Button 
					style={{ background: "#222222", bottom: "75px", left: "100px", position: "fixed" }} 
					type="primary" 
					htmlType="submit" 
					onClick={() => prevSlide()}
				>
		      Previous
		    </Button>	
		    <Button 
					style={{ background: "#222222", bottom: "75px", right: "200px", position: "fixed", opacity: nextButton ? "1.0" : "0.3" }} 
					type="primary" 
					htmlType="submit" 
					onClick={() => nextButton ? nextSlide() : ""} // can still trigger even if greyed out
				>
		      { currSlide >= max-1 ? "Finish!" : "Next"}
		    </Button>	
			</div>
		</Layout>
	);
}

//currSlide {currSlide}  <br/> currText {currText >= num_texts-1 ? "next" : currText } <br/> {isFinished ? "finished" : ""}

export default Lecture;
