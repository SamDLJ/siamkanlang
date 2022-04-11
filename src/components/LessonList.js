import React from 'react';
//import { useState } from 'react';
import { Button, Tooltip, Steps, Layout, } from 'antd';

import { SearchOutlined, LeftOutlined } from '@ant-design/icons';

import { LessonListData } from "../LessonListData";

import useSound from "use-sound";
//import a_ from '../sfx/a.m4a';
import click from '../sfx/click.mp3';


import '../App.css';

//const bgcolor = "#005522";

const { Header, Sider, Content } = Layout;
const { Step } = Steps;

//const audio = new Audio('../sfx/a.m4a');

const LessonList = ({ lessonState, lessonProgress }) => {
	
	const [play] = useSound(click);
	
	//const [ currScreen, setScreen ] = useState("state-userlogin");
	
	/*
		could have the lecture information inside the clickable component
	
	*/
	
	
	const chooseLesson = (isLesson, i) => {
		//console.log("clicked on item "+i+".  isLesson: "+isLesson+"      userProgress: "+lessonProgress);
		
		//console.log("LessonList .choos    eLesson() -> "+isLesson);
		lessonState(isLesson, i);
	};
	//console.log(lessonProgress);
	
	const availableLessons = [];
	
	let score_ = 450;
	let time_ = "2:00"
	
	for (let i=0; i<=lessonProgress; i++){
		let lesson = LessonListData[i];
		availableLessons.push(
			<Step 
				key={i}
				title={lesson.title}
				description={lesson.description}
				onClick={() => { 
					lesson.type == "lecture" ? chooseLesson("state-lecture", i) : 
					(lesson.type == "lessonA" ? chooseLesson("state-vocabulary", i) : chooseLesson("state-sentences", i)) }}
				id={ i == lessonProgress ? "handpointer-lesson" : "handpointer" }
				/*subTitle={"Score: "+score_+"  Time:"+time_+"  Difficulty: easy"}*/
			/>
		);
	}
	
	for (let i=lessonProgress+1; i<LessonListData.length; i++) {
		let lesson = LessonListData[i];
		availableLessons.push(
			<Step 
			key={i}
				title={lesson.title}
				description={lesson.description}
				size="small"
			/>
		);
	}
	
	
	/*
		change onClick to check if current lesson
	
	
	const temp = 
		<>
			<Step title="Finished" description="Introduction to Siamkan" />
			<Step title="Finished" description="Word order: Verb-Subject-Object" />
		  <Step 
				title="In Progress" 
				description="Vocabulary 1" 
				onClick={() => { chooseLesson("state-vocabulary") }}
				id="handpointer"
			/>
			<Step title="Next Lesson" description="Past Tense" />
			<Step title="Next Lesson" description="Pronouns" />
		</>;
	*/
	
	return (
		
		<div id="lessonlistbg" >
			<Layout style={{ color: "#000000", background: "transparent"}}>
			  <Header style={{background: "#222222", color: "white"}} >
					<Tooltip title="Go back to the Login Menu.">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<Button 
							style={{ background: "#222222" }}
							type="primary" 
							shape="round" 
							icon={<LeftOutlined />}
							onClick={() => chooseLesson("state-userlogin")} 
						/>
						&nbsp; User Login
					</Tooltip>
				</Header>
			  <Layout style={{ color: "#000000", background: "transparent"}}>
			    <Sider style={{ color: "#000000", background: "transparent"}} >
						&nbsp;&nbsp;&nbsp;Choose your lesson!
						&nbsp;&nbsp;&nbsp;<p id="siamkan">&nbsp;&nbsp; migsia </p>
					</Sider>
			    <Content  >

						<Steps 
							current={lessonProgress} 
							
							direction="vertical" 
							style={{padding: "25px", background: "rgba(255, 255, 255, 0.5)", color: "#009900", maxHeight: "60vh", overflow: 'auto'}}
						>
				      {availableLessons}
				    </Steps>

					</Content>
					<Sider style={{ color: "#000000", background: "transparent"}} />
			  </Layout>
	
				<div style={{ background: "transparent", height: "100vh" }} >
					<div style={{ bottom: "70px", left: "150px", position: "fixed"}} >
					<Tooltip title="Search for Siamkan words!" >
						&nbsp;&nbsp;&nbsp;
						<Button 
							style={{ bottom: "50px", left: "70px", position: "fixed",  background: "#227722", boxShadow: "5px 5px 5px #223322", }}
							type="primary" 
							//shape="circle" 
							icon={<SearchOutlined />}
							id="handpointer"
							onClick={play}
						>
						&nbsp; Dictionary </Button>
					</Tooltip>
					</div>
				</div>
			</Layout>
		</div>
		
	);
}

export default LessonList;






