//import React from 'react'; // unnecessary?
import { 
	Form,
	Input,
	Button, 
	Tooltip,
	Steps,
	Divider,
	Layout,
	Checkbox
} from 'antd';
	
import { 
	EyeInvisibleOutlined, 
	EyeTwoTone, 
	InfoCircleOutlined, 
	UserOutlined,
	SearchOutlined,
	LeftOutlined
} from '@ant-design/icons';


import { useState } from 'react';

//import CardSpace from "./components/CardSpace";
import FlashCard from "./components/FlashCard";
import CardMatch from "./components/CardMatch";

import CardChoice from "./components/CardChoice";
import CardTable from "./components/CardTable";
import { CardData } from "./CardData";

//import Profile from "./components/Profile";
//import Login from "./components/Login";
import { useSelector } from 'react-redux';

import './App.css';


/*

@font-face {
  font-family: "sss";
  src: url("../fonts/SiamkanMac.ttf") format("truetype");
}

// <Button type="primary">Button</Button>


<Steps progressDot current={2} direction="vertical"> 
The current={2} is the progress

<Footer>Footer</Footer>


main app states: 
	"state-userlogin", 
	"state-lessonlist", 
	"state-gametypeA", 
	"state-gametypeB"


https://www.youtube.com/watch?v=KIS-ONH207A


-- should have a heart system, depending on the difficulty. can have a challenge mode, only one chance
-- earn more points for higher difficulties

*/

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


const { Header, Footer, Sider, Content } = Layout;
const { Step } = Steps;

const totalNumCards = 7; // update this for however many vocabulary words there are 

const App = () => {
	
	//first value is current state, second is the function used to update it
	//const [ currState, setState ] = useState("state-userlogin"); 
	//const [ currState, setState ] = useState("state-lessonlist"); 
	const [ currState, setState ] = useState("state-gametypeA"); 
	
	// --------- state-lessonlist ------------
	// after user clicks on a lesson
	const chooseLesson = (lesson) => {
		// 
		//setState("state-userlogin");
	};
	
	
	// --------- state-userlogin ------------
	const onFinish = (values) => {
	  console.log('Success:', values);
		
		// check values in database manager
		//setState("state-lessonlist");
	};

	const onFinishFailed = (errorInfo) => {
	  console.log('Failed:', errorInfo);
	};
	

	const cid = ("000" + Math.floor(Math.random()*totalNumCards)).slice(-3);
	let cData = CardData[cid];
	
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
		}
	);
	
	const [debugText, setDebug] = useState("");
	
	const [cardchoices, setCardChoices] = useState([]);
	
	
	/*
		{
			id: 0,
			text: "",
			type: "",
		}
	
	*/
	
	//const newRandomChoices = () => {};
	
	// new card
	const newRandomCard = () => {
		//const id = Math.floor(Math.random() * 10) + 1;
		let cid = ("000" + Math.floor(Math.random()*totalNumCards)).slice(-3);
		let cData = CardData[cid];
		
		
		/*
			make copy of card data list, and remove the 'answer' card
		*/
		let copyCardData = {...CardData};
		delete copyCardData[cid];
		
		let copyCDList = Object.values(copyCardData);
		let trickCardData = shuffleArray(copyCDList);
		let difficulty = 3;
		
		
		/* 
			get subset of possible types to take from 'answer' card. 
			No more than three (otherwise, nothing to match on the card!)
		*/
		let allFourTypes = shuffleArray(["english", "written", "romanized", "image"]);
		let randSp = Math.floor(Math.random() * 3)+1;
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
				trickChoices.push({
					id: idcount,
					isCorrect: false,
					text: trickCardData[i][ctype],
					type: ctype
				});
				idcount++;
			}
		}
		
		let allChoices = shuffleArray([...correctChoices, ...trickChoices]);
		
		//let correct = cid+" "+cData.english+" . . . ";
		//let correct = cid+" . . . . "+allFourTypes.toString()+" -> "+takeFromFourTypes.toString()+" / "+leftoverTypes.toString()+ "___________ "+allChoices.toString();
		let correct = allChoices.toString();
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
		};
		
		setCardState( newCardState );
		
	};
	
	const onCorrect = (correct, type, choiceID) => {
		//console.log("correct? "+choice);
		if (correct) {
			//console.log("got it! adding "+type+" back onto the card");
			let newCardState = {...cardState}; //re-map the card state but change the type
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
				if (newCardChoices[i].id == choiceID) {
					rm = i;
					break;
				}
			}
			newCardChoices.splice(rm, 1);
			
			setCardChoices( newCardChoices );
			
			
			if (
				newCardState.showEnglish &&
				newCardState.showImage &&
				newCardState.showWritten &&
				newCardState.showRomanized
			) {
				console.log("success!! (next card)");
				
				newRandomCard();
				
				
			}
			
		} else {
			console.log("fail!! (lose health)");
			
		}
	};
		
	
	
	/* 
	
	
	UserloginScreen.js
	LessonlistScreen.js
	GameTypeAScreen.js
					//<Layout>
					//<Layout>
	
	<Sider style={{background: "#222222", color: "white"}}>sider</Sider>
	*/
	
	// just use  style={{background: "#009999"}}
	const states = {
		"state-userlogin":
			<Layout style={{/*height: "100vh"*/}}>
			  <Header style={{background: "#222222", color: "white"}}></Header>
				<Layout>
					<Sider style={{background: "#222222", color: "white"}}></Sider>
					<Content style={{width: "auto"/*textAlign: "center"*/}}>
						
						<Form
				      name="basic"
				      labelCol={{span: 4,}}
				      wrapperCol={{span: 9,}}
				      initialValues={{remember: true,}}
				      onFinish={onFinish}
				      onFinishFailed={onFinishFailed}
				      autoComplete="off"
							style={{ padding: "30px", /*width: "500px", */}}
				    >
							
				      <Form.Item label="Username" name="username">
				        <Input />
				      </Form.Item>

				      <Form.Item label="Password" name="password">
				        <Input.Password />
				      </Form.Item>

				      <Form.Item
				        name="remember"
				        valuePropName="checked"
				        wrapperCol={{offset: 4, span: 10,}}
				      >
				        <Checkbox>Remember me</Checkbox>
				      </Form.Item>

				      <Form.Item
				        wrapperCol={{
				          offset: 8,
				          span: 16,
				        }}
				      >
				        <Button style={{ color: "ff2222" }} type="primary" htmlType="submit" onClick={() => setState("state-lessonlist")}>
				          Submit
				        </Button>
				      </Form.Item>
				    </Form>
						
					</Content>
					<Sider style={{background: "#222222", color: "white"}}></Sider>
				</Layout>
			  <Footer style={{background: "#222222", height: "100vh"}}></Footer>
			</Layout>,
		
		"state-lessonlist":
			<Layout>
	      <Header style={{background: "#222222", color: "white"}} onClick={chooseLesson}>
					<Tooltip title="Go back to the main menu.">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<Button 
							style={{ background: "#222222" }}
							type="primary" 
							shape="round" 
							icon={<LeftOutlined />}
							onClick={() => setState("state-userlogin")} 
						/>
						&nbsp; User Login
					</Tooltip>
				</Header>
	      <Layout>
	        <Sider style={{background: bgcolor}}>
						&nbsp;&nbsp;&nbsp;Choose your lesson!
						&nbsp;&nbsp;&nbsp;<p id="siamkan">&nbsp;&nbsp; </p>
					</Sider>
	        <Content >

						<Steps progressDot current={2} direction="vertical" style={{padding: "20px"}}>
				      <Step title="Finished" description="This is a description. This is a description." />
				      <Step title="Finished" description="This is a description. This is a description." />
				      <Step 
								title="In Progress" 
								description="This is a description. This is a description." 
								onClick={() => { newRandomCard(); setState("state-gametypeA");  }}
								id="handpointer"
							/>
				      <Step title="Waiting" description="This is a description." />
				      <Step title="Waiting" description="This is a description." />
				    </Steps>

					</Content>
	      </Layout>
				<Footer style={{ background: bgcolor, height: "100vh" }} >
					<Tooltip title="Search for Siamkan words!">
						&nbsp;&nbsp;&nbsp;
						<Button 
							style={{ background: "#222222" }}
							type="primary" 
							shape="circle" 
							icon={<SearchOutlined />}
							id="handpointer"
						/>
						&nbsp; Dictionary 
					</Tooltip>
					
				</Footer>
	    </Layout>,
		
		"state-gametypeA":
			<Layout style={{ background: bgcolor, height: "100vh"}}>
				<Header style={{ background: "#222222", color: "white"}} onClick={() => setState("state-lessonlist")}>
					
					<Tooltip title="Choose a different lesson.">
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<Button 
							style={{ background: "#222222", color: "#ffffff" }}
							type="primary" 
							shape="round" 
							icon={<LeftOutlined />} 
						/>
						&nbsp; Lesson List
					</Tooltip>
							
				</Header>
				<Content style={{ 
					background: bgcolor, 
					width: "70%",
					//height: "auto",
					//background: "#000000",
					
					"marginRight": "auto",
					"marginLeft": "auto",
					"marginTop": "50px",
					"marginBottom": "50px",
					/* margin: "auto" /**/
				}}>
					
					<CardTable 
						currCard={cardState}
						cardChoices={cardchoices}
						onCorrect={onCorrect}
					/>
					
				</Content>
				
				<Footer style={{ background: bgcolor }}>
	        
					
	        <Button 
						style={{ background: "#222222" }} 
						type="primary" 
						htmlType="submit" 
						onClick={() => newRandomCard()}
					>
	          New Card
	        </Button>
						&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{debugText}
				</Footer>
									
			</Layout>,
		
		"state-gametypeB":
			<h3>um nope thats okee</h3>	
	}
	
	
	
	
	
	return (
	  <div className="container" >
			{states[currState]}
		</div>
	);
}

export default App;
/*
					<Input
			      placeholder="Enter your username"
			      prefix={<UserOutlined className="site-form-item-icon" />}
			      suffix={
			        <Tooltip title="Previous Users:">
			          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
			        </Tooltip>
			      }
					/>
					<Input.Password placeholder="input password" />
			      
						
						<Form.Item
			        label="Username"
			        name="username"
							rules={[{required: true, message: 'Please input your username!',},]}
			      >

<h1> əs al xgui a </h1>
*/

