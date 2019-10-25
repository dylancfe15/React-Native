import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Audio } from 'expo-av';

const listBackgroundColors = {
    1: '#01CBC6',
    2: '#8B78E6',
    3: '#AE1438',
    4: '#2475B0',
    5: '#30336B',
    6: '#0A3D62',
    7: '#26ae60',
    8: '#10A881',
    9: '#218F76',
    10: '#DFAF2B',
}

const soundList = {
    one: require('./assets/one.wav'),
    two: require('./assets/two.wav'),
    three: require('./assets/three.wav'),
    four: require('./assets/four.wav'),
    five: require('./assets/five.wav'),
    six: require('./assets/six.wav'),
    seven: require('./assets/seven.wav'),
    eight: require('./assets/eight.wav'),
    nine: require('./assets/nine.wav'),
    ten: require('./assets/ten.wav'),
}

export default class App extends Component {

    playSound = async number => {
        const soundObject = new Audio.Sound();
        try{
            let path = soundList[number]
            await soundObject.loadAsync(path);
            await soundObject
            .playAsync()
            .then( async playbackStatus  => {
                setTimeout(() => {
                    soundObject.unloadAsync();
                }, playbackStatus.playableDurationMillis)
            })
            .catch(error => {
                console.log(error);
            });
        }catch (error) {
            console.log(error);
        }
    };

    render() {
        return ( 
            <ScrollView style = { styles.container } >
                <View style = { styles.gridContainer }>
                    <Image style = { styles.logo } source = { require('./assets/logo.png')} />
                    <View style = { styles.rowContainer }>
                        <TouchableOpacity  style = { [{ backgroundColor: listBackgroundColors [1] }, styles.item] } onPress = {() => { this.playSound('one'); }}>
                            <Text style = { styles.itemText }>One</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style = { [{ backgroundColor: listBackgroundColors [2] }, styles.item] } onPress = {() => { this.playSound('two'); }}>
                            <Text style = { styles.itemText }>Two</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style = { [{ backgroundColor: listBackgroundColors [3] }, styles.item] } onPress = {() => { this.playSound('three'); }}>
                            <Text style = { styles.itemText }>Three</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style = { [{ backgroundColor: listBackgroundColors [4] }, styles.item] } onPress = {() => { this.playSound('four'); }}>
                            <Text style = { styles.itemText }>Four</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style = { [{ backgroundColor: listBackgroundColors [5] }, styles.item] } onPress = {() => { this.playSound('five'); }}>
                            <Text style = { styles.itemText }>Five</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style = { [{ backgroundColor: listBackgroundColors [6] }, styles.item] } onPress = {() => { this.playSound('Six'); }}>
                            <Text style = { styles.itemText }>Six</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style = { [{ backgroundColor: listBackgroundColors [7] }, styles.item] } onPress = {() => { this.playSound('seven'); }}>
                            <Text style = { styles.itemText }>Seven</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style = { [{ backgroundColor: listBackgroundColors [8] }, styles.item] } onPress = {() => { this.playSound('eight'); }}>
                            <Text style = { styles.itemText }>Eight</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style = { [{ backgroundColor: listBackgroundColors [9] }, styles.item] } onPress = {() => { this.playSound('nine'); }}>
                            <Text style = { styles.itemText }>Nine</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    gridContainer: {
        flex: 1,
        padding: 5,
    },
    logo: {
        alignSelf: 'center',
        marginTop: 15,
    },
    rowContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    item: {
        height: 110,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 2,
        width: '33.3%',
        borderColor: '#FFF',
        borderWidth: 2,
        borderRadius: 55,
    },
    itemText: {
        color: '#FFF',
        fontSize: 20,
        
    }
});