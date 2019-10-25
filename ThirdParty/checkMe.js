import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Button, Icon, Left, Body, Right } from 'native-base';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return <AppLoading />;
    }
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?cs=srgb&dl=cold-daylight-glacier-1366919.jpg&fm=jpg'}} />
                <Body>
                  <Text>Dylan Chen</Text>
                  <Text note>I'm an iOS Developer at Gesture</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?cs=srgb&dl=color-depth-of-field-environment-1591447.jpg&fm=jpg'}} style={{height: 200, width: null, flex: 1}}/>
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

