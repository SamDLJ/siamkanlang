import React from 'react';
//import { useState } from 'react';
import { Form, Input, Checkbox, Button, Layout } from 'antd';
import '../App.css';

//const bgcolor = "#005522";
//var audio = new Audio('../sfx/a.m4a');
//audio.play();
const { Header, Footer, Sider, Content } = Layout;



function hashfunc(string) {
	//set variable hash as 0
	var hash = 0;
	// if the length of the string is 0, return 0
	if (string.length == 0) return hash;
	
	for (let i=0; i<string.length; i++)
	{
		let ch = string.charCodeAt(i);
		hash = ((hash << 5) - hash) + ch;
		hash = hash & hash;
	}
	
	return hash;
}

const UserLogin = ({ loginState }) => {
	
	//const [ currScreen, setScreen ] = useState("state-userlogin");
	
	var namehash = "";
	
	const chooseLogin = (isLogin) => {
		//console.log("UserLogin .chooseLogin() -> "+isLogin);
		
		//let xxx = hashfunc("marvin");
		//console.log(xxx);
		
		loginState(isLogin);
	}
	
	// --------- state-userlogin ------------
	const onFinish = (values) => {
	  console.log('Success:', values);
		
		
		// check values in database manager
		//setState("state-lessonlist");
	};

	const onFinishFailed = (errorInfo) => {
	  console.log('Failed:', errorInfo);
	};
	
	
	
	
	return (
		<div>
			<Layout style={{/*height: "100vh"*/}}>
			  <Header style={{background: "#222222", color: "white"}}></Header>
				<Layout>
					<Sider style={{background: "#222222", color: "white"}} />
					<Content style={{width: "auto",/*textAlign: "center"*/}}>
				
						<Form
				      name="basic"
				      labelCol={{span: 7,}}
				      wrapperCol={{span: 10,}}
				      initialValues={{remember: true,}}
				      onFinish={onFinish}
				      onFinishFailed={onFinishFailed}
				      autoComplete="off"
							style={{ padding: "30px", /*width: "500px", */ }}
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
				        wrapperCol={{offset: 7, span: 10,}}
				      >
				        <Checkbox>Remember me</Checkbox>
				      </Form.Item>

				      <Form.Item
				        wrapperCol={{
				          offset: 7,
				          span: 16,
								}}
									
				      >
				        <Button style={{ color: "ff2222" }} type="primary" htmlType="submit" onClick={() => {chooseLogin("state-lessonlist");}}>
				          Submit
				        </Button>
				      </Form.Item>
				    </Form>
				
					</Content>
					<Sider style={{background: "#222222", color: "white"}} />
				</Layout>
			  <Footer style={{background: "#222222", height: "100vh"}}></Footer>
			</Layout>,
		</div>
	);
}

export default UserLogin;






