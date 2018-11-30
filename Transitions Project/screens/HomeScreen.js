import { Animated, View, Text, StyleSheet, Button, AppRegistry } from 'react-native';
import App from '../App';
import React, { Component } from "react";
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
                duration: 10000,              // Make it take a while
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


class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <FadeInView style={{width:400, height:600, backgroundColor:'powderblue'}}>
                    <Text style={styles.red}>
                        This is the HomeScreen
                    </Text>
                    <Button onPress={() => this.props.navigation.navigate('Profile')} title="Go to Profile"/>
                </FadeInView>
            </View>
        );
    }
}



export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});





//AppRegistry.registerComponent('navigation',() => App);

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


