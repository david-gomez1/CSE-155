import React, { Component } from 'react';
import { Alert, Animated, AppRegistry, Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import FadeInView from 'react-native-fade-in-view';

// import HomeScreen from './screens/HomeScreen'
// import screen1 from './screens/screen1'
// import screen2 from './screens/screen2'
import Button1 from './screens/Button1'
import Button2 from './screens/Button2'
// import Button3 from './Button3'
// import Button4 from './Button4'
// import Button5 from './Button5'

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
// class FadeInView extends React.Component {
//
//     state = {
//         fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
//     }
//
//     componentDidMount() {
//         Animated.timing(                  // Animate over time
//             this.state.fadeAnim,            // The animated value to drive
//             {
//                 toValue: 1,                   // Animate to opacity: 1 (opaque)
//                 duration: this.state.speedCount,              // Make it take a while
//             }
//         ).start();                        // Starts the animation
//     }
//
//     render() {
//         let { fadeAnim } = this.state;
//
//         return (
//             <Animated.View                 // Special animatable View
//                 style={{
//                     ...this.props.style,
//                     opacity: fadeAnim,         // Bind opacity to animated value
//                 }}
//             >
//                 {this.props.children}
//             </Animated.View>
//         );
//     }
// }

// class FadeInView extends React.Component {
//     state = {
//         fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
//     }
//
//     componentDidMount() {
//         Animated.timing(                  // Animate over time
//             this.state.fadeAnim,            // The animated value to drive
//             {
//                 toValue: 1,                   // Animate to opacity: 1 (opaque)
//                 duration: this.state.speedCount,              // Make it take a while
//             }
//         ).start();                        // Starts the animation
//     }
//
//     render() {
//         let { fadeAnim } = this.state;
//
//         return (
//             <Animated.View                 // Special animatable View
//                 style={{
//                     ...this.props.style,
//                     opacity: fadeAnim,         // Bind opacity to animated value
//                 }}
//             >
//                 {this.props.children}
//             </Animated.View>
//         );
//     }
// }

class HomeScreen extends React.Component {
    constructor() {
        super()
        this.state = {
            speedCount: 50
        };
    }

    setSpeed1 = () => {
        this.setState({ speedCount: 10000});
        //this.setState((prevState) => ({ 'speedCount': prevState.speedCount +1}))
    }
    setSpeed2 = () => {
        this.setState({ speedCount: 250});
        //this.setState((prevState) => ({ 'speedCount': prevState.speedCount +1}))
    }
    setSpeed3 = () => {
        this.setState({ speedCount: 500});
        //this.setState((prevState) => ({ 'speedCount': prevState.speedCount +1}))
    }
    setSpeed4 = () => {
        this.setState({ speedCount: 250});
        //this.setState((prevState) => ({ 'speedCount': prevState.speedCount +1}))
    }
    setSpeed5 = () => {
        this.setState({ speedCount: 50});
        //this.setState((prevState) => ({ 'speedCount': prevState.speedCount +1}))
    }

    render() {
        return(
            <View style={styles.container}>
                <Text>HomeScreen</Text>
                <Button
                    onPress={() => {
                        this.props.navigation.navigate('firstScreen',
                            {
                                speedCount: this.state.speedCount
                            });
                    }
                    }
                    title="Go to Screen 1"
                />

                <Text>Speed: {this.state.speedCount}</Text>

                <Button1 onPress = {this.setSpeed1}/>
                <Button2 onPress = {this.setSpeed2}/>
            </View>
        );
    }
}

class screen1 extends React.Component {
    setSpeed1 = () => {
        this.setState({ speedCount: 10000});
        //this.setState((prevState) => ({ 'speedCount': prevState.speedCount +1}))
    }
    setSpeed2 = () => {
        this.setState({ speedCount: 250});
        //this.setState((prevState) => ({ 'speedCount': prevState.speedCount +1}))
    }
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
            <View style={styles.container}>
                <FadeInView
                    duration={speedCount}
                    style={{width:400, height:600, backgroundColor:'powderblue'}}
                >
                    <Text>Screen 1</Text>
                    <Button
                        onPress={() => {
                            this.props.navigation.navigate('secondScreen',
                                {
                                    speedCount: this.props.speedCount
                                });
                        }
                        }
                        title="Go to Screen 2"
                    />
                    <Text>Speed: {speedCount}</Text>

                    <Button1 onPress = {this.setSpeed1}/>
                    <Button2 onPress = {this.setSpeed2}/>
                </FadeInView>
            </View>
        );
    }
}

class screen2 extends React.Component {

    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');
        return (
            <View style={styles.container}>
                <FadeInView
                    duration={speedCount}
                    style={{width:400, height:600, backgroundColor:'powderblue'}}
                >
                    <Text>Screen 2</Text>
                    <Button
                        onPress={() => this.props.navigation.navigate('Home')}
                        title="Go to HomeScreen"
                    />
                </FadeInView>
            </View>
        );
    }
}






const AppNavigator = createStackNavigator(
    {
        //Main: App,
        Home: HomeScreen,
        firstScreen: screen1,
        secondScreen: screen2
    },
    {
        initialRouteName: "Home"
    }
);

export default createAppContainer(AppNavigator);

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

