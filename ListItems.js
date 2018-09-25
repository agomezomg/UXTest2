import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import * as firebase from 'firebase';
import { database } from 'firebase';

var config = {
	apiKey: "AIzaSyDv4Ewr0ECv0y2Ccc00USGwIsflr4JVt0Y",
	authDomain: "examen1-ux.firebaseapp.com",
	databaseURL: "https://examen1-ux.firebaseio.com",
	projectId: "examen1-ux",
	storageBucket: "examen1-ux.appspot.com",
	messagingSenderId: "954549860096"
};
firebase.initializeApp(config);

export default class ListItems extends Component {
	constructor(){
		super()
		this.state = {
			list : []
		}
	}

	componentDidMount(){
		alert("entra al component did mount pero no hace nada")
		database().ref('/users').on('value', (snapshot)=> {
			alert("SOMETHING");
			let list = []
			snapshot.forEach(doc => {
				list.push(doc)
					this.setState({
					list : list
				})
			})
		});
	}

	render() {
		let data = this.state.list.map((doc,i)=> {
			if (!this.props.checker) {
				return (
					<Container key={i}>
						<Header />
						<Content>
							<Card>
								<CardItem>
									<Body>
										<Text>
											{doc.val().username}
										</Text>
									</Body>
								</CardItem>
							</Card>
						</Content>
					</Container>
				)
			}
		})
		return (
			<Container>
	        <Header />
	        <Content>
	          <Card>
	            <CardItem>
	              <Left>
	                <Thumbnail source={{uri: 'Image URL'}} />
	                <Body>
	                  <Text>NativeBase</Text>
	                  <Text note>GeekyAnts</Text>
	                </Body>
	              </Left>
	            </CardItem>
	            <CardItem cardBody>
	              <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
	            </CardItem>
	            <CardItem>
	              <Left>
	                <Button transparent>
	                  <Icon active name="thumbs-up" />
	                  <Text>12 Likes</Text>
	                </Button>
	              </Left>
	              <Body>
	                <Button transparent>
	                  <Icon active name="chatbubbles" />
	                  <Text>4 Comments</Text>
	                </Button>
	              </Body>
	              <Right>
	                <Text>11h ago</Text>
	              </Right>
	            </CardItem>
	          </Card>
	        </Content>
	    	</Container>
	);
  }
}