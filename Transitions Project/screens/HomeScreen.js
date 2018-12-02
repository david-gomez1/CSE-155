import { Animated, View, Text, StyleSheet, Button, AppRegistry } from 'react-native';
import App from '../App';
import React, { Component } from "react";
//import {Button} from "../App";
import Button1 from './Button1'
import Button2 from './Button2'
import Button3 from './Button3'
import Button4 from './Button4'
import Button5 from './Button5'


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
    constructor() {
        super()
        this.state = {
            speedCount: 0
        }
    }
    setSpeed1 = () => {
        this.setState({ speedCount: 1000});
        //this.setState((prevState) => ({ 'speedCount': prevState.speedCount +1}))
    }
    setSpeed2 = () => {
        this.setState({ speedCount: 750});
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

    // render() {
    //     return (
    //         <View style={styles.container}>
    //             <Button1 onPress = {this.addSpeed}/>
    //             <Text>{this.state.speedCount}</Text>
    //         </View>
    //     );
    // }
    render() {
        return (
            <View style={styles.container}>
                <FadeInView style={{width:400, height:600, backgroundColor:'powderblue'}}>
                    <Text style={styles.red}>
                        This is the HomeScreen
                    </Text>
                    <Button onPress={() => this.props.navigation.navigate('firstScreen')} title="Go to screen1"/>
                </FadeInView>
                <Text>{this.state.speedCount}</Text>

                <Button1 onPress = {this.setSpeed1}/>
                <Button2 onPress = {this.setSpeed2}/>
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


