import React, { Component } from 'react';
import { Alert, Animated, AppRegistry, Button, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation';
import FadeInView from 'react-native-fade-in-view';

// import HomeScreen from './screens/HomeScreen'
// import screen1 from './screens/screen1'
// import screen2 from './screens/screen2'
import Button1 from './screens/Button1'
import Button2 from './screens/Button2'
import Button3 from './screens/Button3'
import Button4 from './screens/Button4'
import Button5 from './screens/Button5'
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
                <Text style={styles.title}>{"\n"}CSE 155 mini review!</Text>
                

                <Text>Speed: {this.state.speedCount}</Text>

                <View style={{
                  padding:10,
                  borderRadius: 6,
                  height:60,
                  width: "60%",
                  justifyContent: 'space-between',
                  marginBottom:100,
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowRadius:20,
                  backgroundColor:'Blue',
                  flexDirection:'row'
                }}>
                <Button1 onPress={() => {
                        this.props.navigation.navigate('firstScreen',
                            {
                                speedCount: 0
                            });
                    }
                    }
                    title="speed 1"
                />
                <Button2 onPress={() => {
                        this.props.navigation.navigate('firstScreen',
                            {
                                speedCount: 500
                            });
                    }
                    }
                    title="500"
                />
                <Button3 onPress={() => {
                        this.props.navigation.navigate('firstScreen',
                            {
                                speedCount: 750
                            });
                    }
                    }
                    title="750"
                />
                <Button4 onPress={() => {
                        this.props.navigation.navigate('firstScreen',
                            {
                                speedCount: 10000
                            });
                    }
                    }
                    title="1300"
                />
                <Button5 onPress={() => {
                        this.props.navigation.navigate('firstScreen',
                            {
                                speedCount: 200
                            });
                    }
                    }
                    title="1600"
                />
                </View>
            </View>
        );
    }
}

class screen1 extends React.Component {
    constructor() {
        super()
        this.state = {
            speedCount2: 50
        };
    }
    setSpeed1 = () => {
        this.setState({ speedCount2: 10000});
        //this.setState((prevState) => ({ 'speedCount': prevState.speedCount +1}))
    }
    setSpeed2 = () => {
        this.setState({ speedCount2: 250});
        //this.setState((prevState) => ({ 'speedCount': prevState.speedCount +1}))
    }
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
          //Copy from here  
                <FadeInView
                    duration={speedCount}
                    //change width and style if needed
                    style={{width:358, height:630}}
                >

                <View style={styles.container}>
                   <Text style={styles.text}>{"\n"}start putting review questions on here about anything</Text>
                    <View style={{
                  padding:10,
                  borderRadius: 6,
                  height:60,
                  width: "60%",
                  justifyContent: 'space-between',
                  marginBottom:50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  shadowRadius:20,
                  backgroundColor:'Blue',
                  flexDirection:'row'
                }}>
                <Button1 onPress={() => {
                        this.props.navigation.navigate('secondScreen',
                            {
                                speedCount: 0
                            });
                    }
                    }
                    title="speed 1"
                />
                <Button2 onPress={() => {
                        this.props.navigation.navigate('secondScreen',
                            {
                                speedCount: 500
                            });
                    }
                    }
                    title="500"
                />
                <Button3 onPress={() => {
                        this.props.navigation.navigate('secondScreen',
                            {
                                speedCount: 750
                            });
                    }
                    }
                    title="750"
                />
                <Button4 onPress={() => {
                        this.props.navigation.navigate('secondScreen',
                            {
                                speedCount: 1300
                            });
                    }
                    }
                    title="1300"
                />
                <Button5 onPress={() => {
                        this.props.navigation.navigate('secondScreen',
                            {
                                speedCount: 1600
                            });
                    }
                    }
                    title="1600"
                />
                </View>
            
                </View>
            </FadeInView>
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

//styles for page 
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(32,53,70)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: "bold",
    fontFamily: "monospace",
    fontSize: 40,
    color: "white",
    marginBottom: 350,
    marginTop: 40,
    textAlign:"center",
  },

  text:{
     fontWeight: "bold",
    fontFamily: "monospace",
    fontSize: 20,
    color: "white",
    marginBottom: 350,
    marginTop: 40,
    textAlign:"center",

  }
})

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
