import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { withNavigation } from 'react-navigation';

class Home extends React.Component {

    static navigationOption = {
        title: 'Photo Clicker'
    }

    render() {
        let photo = this.props.navigation.getParam('photo','empty')
        return (
            <View style={styles.container}>
                <Image resizeMode = 'center' style = {styles.imageHolder} 
                    source = {
                        photo === 'empty' ? require('../assets/email.png') : photo
                    }
                />
                <Button title = 'Take Photo' style = {styles.button}
                    onPress = {() => {
                        this.props.navigation.navigate('CameraPage')
                    }}
                />
            </View>
        )
    }
}

export default withNavigation(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageHolder: {
      alignSelf: 'center',
      margin: 20,
      height: 500,
  },
  button: {
      margin: 20,
  }
});
