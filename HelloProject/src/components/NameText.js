import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";


export default class NameText extends Component{
  render(){
    return <Text style = { styles.textStyle }>{this.props.name}</Text>;
  }
}

const styles = StyleSheet.create({
  textStyle: {
    color: "#FFFFFF",
    fontSize: 22,
    backgroundColor: "orange",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    overflow: "hidden",
    marginTop: 5,
  }
})