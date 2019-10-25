import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { BUtton, Button } from 'native-base';


var itemArray = new Array(9).fill('empty');
export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isCross: false,
      winMessage: '',
    };
  }

  drawItem = itemNumber => {
    if (itemArray[itemNumber] === 'empty') {
      itemArray[itemNumber] = this.state.isCross;
      this.setState({ isCross: !itemArray[itemNumber] }, () => {});
    }

    this.winGame();
  }

  chooseItemIcon = itemNumber => {
    if (itemArray[itemNumber] !== 'empty') {
      return itemArray[itemNumber] ? 'cross': 'circle';
    } else {
      return 'pencil';
    }
  }

  chooseItemColor = itemNumber => {
    if (itemArray[itemNumber] !== 'empty') {
      return itemArray[itemNumber] ? 'red': 'green';
    } else {
      return 'black';
    }
  }

  resetGame = () => {
    itemArray.fill('empty');
    this.setState({ winMessage: ''});
    // force update to the component
    this.forceUpdate();
  }

  winGame = () => {
    if ((itemArray[0] !== 'empty') && (itemArray[0] == itemArray[1]) && (itemArray[1] == itemArray[2])) {
      this.setState({ winMessage: (itemArray[0]? 'cross': 'circle') .concat(' won!')});
    } else if ((itemArray[3] !== 'empty') && (itemArray[3] == itemArray[4]) && (itemArray[4] == itemArray[5])) {
      this.setState({ winMessage: (itemArray[3]? 'cross': 'circle') .concat(' won!')});
    } else if ((itemArray[6] !== 'empty') && (itemArray[6] == itemArray[7]) && (itemArray[7] == itemArray[8])) {
      this.setState({ winMessage: (itemArray[6]? 'cross': 'circle') .concat(' won!')});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.grid}>
          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(0)} >
                <Entypo name={this.chooseItemIcon(0)} size={50} color={this.chooseItemColor(0)}/>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(1)} >
                <Entypo name={this.chooseItemIcon(1)} size={50} color={this.chooseItemColor(1)}/>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(2)} >
                <Entypo name={this.chooseItemIcon(2)} size={50} color={this.chooseItemColor(2)}/>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(3)} >
                <Entypo name={this.chooseItemIcon(3)} size={50} color={this.chooseItemColor(3)}/>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(4)} >
                <Entypo name={this.chooseItemIcon(4)} size={50} color={this.chooseItemColor(4)}/>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(5)} >
                <Entypo name={this.chooseItemIcon(5)} size={50} color={this.chooseItemColor(5)}/>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(6)} >
                <Entypo name={this.chooseItemIcon(6)} size={50} color={this.chooseItemColor(6)}/>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(7)} >
                <Entypo name={this.chooseItemIcon(7)} size={50} color={this.chooseItemColor(7)}/>
              </TouchableOpacity>
            </View>
            <View style={styles.item}>
              <TouchableOpacity onPress={() => this.drawItem(8)} >
                <Entypo name={this.chooseItemIcon(8)} size={50} color={this.chooseItemColor(8)}/>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text style = {styles.winMessage }>{this.state.winMessage}</Text>
        <Button full rounded primary style = { styles.button } onPress = {() => this.resetGame()}>
          <Text style = { styles.btnText }>Reset Game</Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  grid: {

  },
  row: {
    flexDirection: 'row',
  },
  item: {
    borderWidth: 2,
    borderColor: '#000',
    padding: 30,
  },
  winMessage: {
    padding: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  button: {
    margin: 20,
    padding: 10,
  },
  btnText: {
    color: '#FFF',
    fontWeight: 'bold',
  }
})