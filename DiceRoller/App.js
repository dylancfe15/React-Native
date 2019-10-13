import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { isRequired } from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType';

export default class App extends Component{
  constructor(){
    super();
    this.state = {
      uriL: require('./src/dice1.png'),
      uriR: require('./src/dice1.png'),
    };
  }

  getRandomValue = () => {
    return Math.floor(Math.random() * 6) + 1;
  }

  playButtonPressed = () => {
    var rNumberL = this.getRandomValue();
    var rNumberR = this.getRandomValue();

    var leftUri = require('./src/dice1.png');
    var rightUri = require('./src/dice1.png');

    switch (rNumberL){
      case 1: 
        leftUri = require('./src/dice1.png');
        break;
      case 2: 
        leftUri = require('./src/dice2.png');
        break;
      case 3: 
        leftUri = require('./src/dice3.png');
        break;
      case 4: 
        leftUri = require('./src/dice4.png');
        break;
      case 5: 
        leftUri = require('./src/dice5.png');
        break;
      case 6: 
        leftUri = require('./src/dice6.png');
        break;
      default: 
        leftUri = require('./src/dice6.png');
        break;
    }

    switch (rNumberR){
      case 1: 
        rightUri = require('./src/dice1.png');
        break;
      case 2: 
        rightUri = require('./src/dice2.png');
        break;
      case 3: 
        rightUri = require('./src/dice3.png');
        break;
      case 4: 
        rightUri = require('./src/dice4.png');
        break;
      case 5: 
        rightUri = require('./src/dice5.png');
        break;
      case 6: 
        rightUri = require('./src/dice6.png');
        break;
      default: 
        rightUri = require('./src/dice6.png');
        break;
    }

    this.setState({uriL: leftUri, uriR: rightUri});

  };

  render(){
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'stretch', justifyContent: 'space-between', paddingHorizontal: 10}}>
          <Image style={styles.diceImg} source={this.state.uriL} />
          <Image style={styles.diceImg} source={this.state.uriR} />
        </View>
        <TouchableOpacity onPress={this.playButtonPressed} >
          <Text style={styles.gameButton}>Play Game</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E74292',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gameButton: {
    marginTop: 30,
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden',
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderColor: '#FFF',
  },
  diceImg: {
    flex: 1, 
    flexDirection: 'row',
    marginHorizontal: 10,
    aspectRatio: 1,
  }
});
