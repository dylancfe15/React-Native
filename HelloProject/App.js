import React from "react";
import { View, Image, StyleSheet } from "react-native";
import NameText from './src/components/NameText';
import { requireNativeViewManager } from "@unimodules/core";

export default class App extends React.Component{
  render(){
    return (
      <View style = {styles.container }>
        <NameText name="Dylan"/>
        <Image source={require("./src/images/email.png")} />
        <Image source={{
          uri: 'https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png'
          }} 
          style={{width: 300, height: 300}} 
        />
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center"
  }
})