import { useState } from 'react';

import UserLogin from "./components/UserLogin";
import LessonList from "./components/LessonList";
import GameTypeA from "./components/GameTypeA";
import GameTypeB from "./components/GameTypeB";
import Lecture from "./components/Lecture";

import './App.css';


const App = () => {
	
	//first value is current state, second is the function used to update it
	//const [ currState, setState ] = useState("state-userlogin"); 
	const [ currState, setState ] = useState("state-lessonlist"); 
	//const [ currState, setState ] = useState("state-gametypeA"); 
	//const [ currState, setState ] = useState("state-vocabulary");
	//const [ currState, setState ] = useState("state-lecture"); 
	
	const [ currHealthState, setHealthState ] = useState({score: 0, health: 3});
	
	const [ userProgress, setUserProgress ] = useState(0);
	const [ prevProgress, setPrevProgress ] = useState(0);
	
	var isPrev = false;
	const changeLoginState = (login) => {
		//console.log("App .changeLoginState() -> "+login);
		setState(login);
	};
	
	const changeLessonState = (lesson, i) => {
		// if lesson is a number, then use that one. otherwise
		//console.log("App .changeLessonState() -> "+lesson+"   i: "+i);
		// make prevProgress the one you click on
		// lessonState
		if (i != userProgress) {
			//console.log("entering previous lesson....  "+lesson+"   i: "+i+"     userProgress: "+userProgress+"  ");
			setPrevProgress(i);
			isPrev = true;
		}	else {
			setPrevProgress(i);
			isPrev = false;
		}
		
		//console.log("prevProgress: "+prevProgress);
		setHealthState({score: 0, health: 3});
		setState(lesson);
	};
	
	const changeGameAState = (gameA) => {
		//console.log("App .changeGameAState() -> "+gameA);
		setState(gameA);
	};
	
	const changeGameBState = (gameB) => {
		//console.log("App .changeGameAState() -> "+gameB);
		setState(gameB);
	};
	
	const changeLectureState = (lecture, i) => {
		//console.log("App .changeLectureState() -> "+lecture);
		setState(lecture);
	};
	
	const updateProgress = (progress) => {
		if (progress) {
			//console.log("win! "+progress+"");
			
			if (progress == 2) {
				//console.log("updating lesson list");
				let updateProgress = userProgress + 1; // <- update lesson list item. not if prevLesson
				setUserProgress(updateProgress);
			}
			
			//console.log("win! next lesson");
			
		} else {
			//console.log("fail! redo lesson");
		}
		setState("state-lessonlist");
	}
	
	const setHealth = (s, h) => {
		setHealthState({score: s, health: h});
		
	};
	
	// * * * * * * * * *  use prevProgress in state-lecture state-vocabulary <-----------
	//											if the numbers dont match, then dont bother updating the 'finished' or 'success' hooks
	// node --max_old_space_size=8192
	
	const states = {
		"state-userlogin":
			<UserLogin loginState={changeLoginState}/>,
		
		"state-lessonlist":
			<LessonList lessonState={changeLessonState} lessonProgress={userProgress}/>,
		
		"state-lecture":
			<Lecture lectureState={changeLectureState} lectureProgress={userProgress} finished={updateProgress} prevProgress={prevProgress}/>,
		
		"state-vocabulary":
			<GameTypeA 
				gameAState={changeGameAState} 
				lessonProgress={userProgress} 
				success={updateProgress} 
				prevProgress={prevProgress}
				getHealthState={currHealthState}
				setHealthState={setHealth}
			/>,
		
		"state-sentences":
			<GameTypeB 
				gameBState={changeGameBState} 
				lessonProgress={userProgress} 
				success={updateProgress} 
				prevProgress={prevProgress} 
				getHealthState={currHealthState}
				setHealthState={setHealth}
			/>,
	}
	
	return (
	  <div className="container" >
			
			{states[currState]}
		</div>
	);
}

export default App;

/*










*/