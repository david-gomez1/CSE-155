import { Animated, View, Text, StyleSheet, Button, AppRegistry } from 'react-native';
import App from '../App';
import React, { Component } from "react";
//import { StackNavigator } from "react-navigation";
//import {Button} from "../App";

class FadeInView extends React.Component {
    state = {
        fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
    }

    componentDidMount() {
        Animated.timing(                  // Animate over time
            this.state.fadeAnim,            // The animated value to drive
            {
                toValue: 1,                   // Animate to opacity: 1 (opaque)
                duration: 750,              // Make it take a while
            }
        ).start();                        // Starts the animation
    }

    render() {
        let { fadeAnim } = this.state;

        return (
            <Animated.View                 // Special animatable View
        style={{
        ...this.props.style,
                opacity: fadeAnim,         // Bind opacity to animated value
        }}
    >
        {this.props.children}
    </Animated.View>
    );
    }
}


class screen2 extends React.Component {
    render() {
        return (
            <View style={styles.container}>
            <FadeInView style={{width:400, height:600, backgroundColor:'powderblue'}}>
    <Text style={styles.red}>
            This is the screen2
        </Text>
        <Button onPress={() => this.props.navigation.navigate('Home')} title="Go to Home">
            </Button>
            </FadeInView>
            </View>
    );
    }
}

export default screen2;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});






/*render(){
    const { navigate } = this.props.navigation
    return {
        <View>
            <Button
                onPress={{() => navigate('Chat')}
                title="Chat"
            />
        </View>
    }
}*/

// AppRegistry.registerComponent('navigation',() => ProfileScreen);
//
// let MyTransition = (index, position) => {
//     const inputRange = [index - 1, index, index + 1];
//     const opacity = position.interpolate({
//         inputRange,
//         outputRange: [.8, 1, 1],
//     });
//
//     const scaleY = position.interpolate({
//         inputRange,
//         outputRange: ([0.8, 1, 1]),
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
//
// let TransitionConfiguration = () => {
//     return {
//         transitionSpec: {
//             duration: 750,
//             easing: Easing.out(Easing.poly(4)),
//             timing: Animated.timing,
//             useNativeDriver: true,
//         },
//         screenInterpolator: (sceneProps) => {
//             const { layout, position, scene } = sceneProps;
//
//             // const thisSceneIndex = scene.index
//             // const width = layout.initWidth
//             //
//             // const translateX = position.interpolate({
//             //     inputRange: [thisSceneIndex - 1, thisSceneIndex],
//             //     outputRange: [width, 0],
//             // })
//             const {index} = scene;
//
//             return MyTransition(index, position);
//         }
//     }
// };
//
//
// const AppNavigator = StackNavigator(AppScenes, {
//     transitionConfig: TransitionConfiguration
// });
//
