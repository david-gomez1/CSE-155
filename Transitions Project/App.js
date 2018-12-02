import React, { Component } from 'react';
import { Alert, Animated, AppRegistry, Button, StyleSheet, Text, View } from 'react-native';
import { StackNavigator, createStackNavigator, createAppContainer} from 'react-navigation';

import HomeScreen from './screens/HomeScreen'
import screen1 from './screens/screen1'
import screen2 from './screens/screen2'
/*const SimpleApp = StackNavigator({
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen },
}, {
    initialRoutName: 'Home',
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp)
*/
//-----------------testing--------------------------------
// let AppScenes = {
//     Home: HomeScreen,
//     Profile: ProfileScreen
// }
// let MyTransition = (index, position) => {
//     const inputRange = [index - 1, index, index + 1];
//     const outputRange = [.8, 1, 1];
//     const opacity = position.interpolate({
//         inputRange,
//         outputRange,
//     });
//
//     const scaleY = position.interpolate({
//         inputRange,
//         outputRange,
//     });
//
//     return {
//         opacity,
//         transform: [
//             {scaleY}
//         ]
//     };
// };
//
// let TransitionConfiguration = () => {
//     return {
//         // Define scene interpolation, eq. custom transition
//         screenInterpolator: (sceneProps) => {
//             const {position, scene} = sceneProps;
//             const {index} = scene;
//
//             return MyTransition(index, position);
//         }
//     }
// };
//
// const AppNavigator = createStackNavigator({
//     Home: HomeScreen,
//     Profile: ProfileScreen,
// }, {
//     initialRouteName: 'Home',
//
//     //transitionConfig: TransitionConfiguration
// });
//
// export default class App extends React.Component {
//     render() {
//         return (
//             <View>
//                 <AppNavigator/>
//             </View>
//         );
//     }
// }
// AppRegistry.registerComponent('MyApp', () => App);
//--------------------------------------------------------------

//-----------------working code-------------------------------



const AppNavigator = createStackNavigator({
    Home: HomeScreen,
    firstScreen: screen1,
    secondScreen: screen2
}, {
    //transitionConfig
});

const App = createAppContainer(AppNavigator);
export default App
//-----------------------------------------------------------

//--------------------------davids video thing----------------
// export default class App extends React.Compnent{
//     render() {
//         return(
//             <AppStackNavigator />
//         );
//     }
// }
// const AppStackNavigator = createStackNavigator({
//     Login:{
//         screen:LoginScreen
//     }
// })
//-------------------------------------------------------

const toIndex = 1
const position = new Animated.Value(0)
//const scenes = [{ index: 0, ...scene0Data }, { index: 1, ...scene1Data }]

// call screenInterpolator with each scene.
// The return value is used to configure its transition
// animation style (translation, opacity, etc)

//scenes.forEach(scene => {

//     scene.style = screenInterpolator({
//         index: toIndex,
//         position: position,
//         scene: scene, // <-- Each scene/route on the stack is configured separately
//         scenes: scenes,
//     })
//
//})

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

// const transitionConfig = () => {
//     return {
//         transitionSpec: {
//             duration: 750,
//             easing: Easing.out(Easing.poly(4)),
//             timing: Animated.timing,
//             useNativeDriver: true,
//         },
//         screenInterpolator: sceneProps => {
//             const { layout, position, scene } = sceneProps
//
//             const thisSceneIndex = scene.index
//             const width = layout.initWidth
//
//             const translateX = position.interpolate({
//                 inputRange: [thisSceneIndex - 1, thisSceneIndex],
//                 outputRange: [width, 0],
//             })
//
//             return { transform: [ { translateX } ] }
//         },
//     }
// }

