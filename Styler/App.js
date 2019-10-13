import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'space-around', alignItems: 'stretch', marginTop: 50}}> 
      <View style={{ width: 100, height: 100, backgroundColor: '#123456'}}></View>
      <View style={{ height: 100, backgroundColor: '#7890AB'}}></View>
      <View style={{ width: 100, height: 100, backgroundColor: '#FEDCBA'}}></View>
    </View>
  );
}


