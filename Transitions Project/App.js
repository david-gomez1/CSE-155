import React from 'react';
import { Alert, Animated, AppRegistry, Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

//import HomeScreen from './HomeScreen'
//import ProfileScreen from './ProfileScreen'
//import AccountScreen from './AccountScreen'

/*const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
}, {
    initialRoutName: 'Home',
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp)
*/

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.red}>
                    This is the HomeScreen
                </Text>
                <Button onPress={() => this.props.navigation.navigate('Profile')} title="Go to Profile"/>

            </View>
        );
    }
}

class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.red}>
                    This is the ProfileScreen
                </Text>
                <Button onPress={() => this.props.navigation.navigate('Home')} title="Go to Home">
                </Button>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator({
    Home: {screen: HomeScreen,},
    Profile: {screen: ProfileScreen,}
}, {
    transitionConfig
});


export default createAppContainer(AppNavigator);


/*export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style = {styles.red}>
            Hello world!
        </Text>
        <Button
          onPress={()=>{
            Alert.alert('You tapped the button!');
          }}
          title="Press Me"
         />
      </View>
    );
  }
}*/

const toIndex = 1
const position = new Animated.Value(0)
const scenes = [{ index: 0, ...scene0Data }, { index: 1, ...scene1Data }]

// call screenInterpolator with each scene.
// The return value is used to configure its transition
// animation style (translation, opacity, etc)

scenes.forEach(scene => {

    scene.style = screenInterpolator({
        index: toIndex,
        position: position,
        scene: scene, // <-- Each scene/route on the stack is configured separately
        scenes: scenes,
    })

})

// Transition animation takes place
Animated.timing(position, {
    toValue: toIndex,
}).start()


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    bigblue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    },
    red: {
        color: 'red',
    },
});

const transitionConfig = () => {
    return {
        transitionSpec: {
            duration: 750,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: sceneProps => {
            const { layout, position, scene } = sceneProps

            const thisSceneIndex = scene.index
            const width = layout.initWidth

            const translateX = position.interpolate({
                inputRange: [thisSceneIndex - 1, thisSceneIndex],
                outputRange: [width, 0],
            })

            return { transform: [ { translateX } ] }
        },
    }
}



