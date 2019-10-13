import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity, Image} from 'react-native';

export default class App extends React.Component{

  constructor() {
    super();
    this.state = {
      randomColor: null
    };
  }

  getRandomColor = () => {
    return (
      'rgb(' +
      Math.floor((Math.random() * 256)) +
      ',' + 
      Math.floor((Math.random() * 256)) +
      ',' + 
      Math.floor((Math.random() * 256)) +
      ')'
    )
  }

  myButtonPressed = () => {
    this.setState({ randomColor: this.getRandomColor() })
  }

  render(){
    return (
      <View style={[styles.container, { backgroundColor: this.state.randomColor }]}>
        <TouchableOpacity
          onPress={this.myButtonPressed}
        >
          <Image 
            source={{
              uri: 'https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png'
            }} 
            style={{width: 300, height: 300}} 
        />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    backgroundColor: '#BB2CD9',
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: '#FFFFFF',
    borderRadius: 10,
    overflow: 'hidden',
  }
});
