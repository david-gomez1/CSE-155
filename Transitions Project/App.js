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

    // setSpeed1 = () => {
    //     this.setState({ speedCount: 10000});
    //     //this.setState((prevState) => ({ 'speedCount': prevState.speedCount +1}))
    // }
    // setSpeed2 = () => {
    //     this.setState({ speedCount: 250});
    //     //this.setState((prevState) => ({ 'speedCount': prevState.speedCount +1}))
    // }
    // setSpeed3 = () => {
    //     this.setState({ speedCount: 500});
    //     //this.setState((prevState) => ({ 'speedCount': prevState.speedCount +1}))
    // }
    // setSpeed4 = () => {
    //     this.setState({ speedCount: 250});
    //     //this.setState((prevState) => ({ 'speedCount': prevState.speedCount +1}))
    // }
    // setSpeed5 = () => {
    //     this.setState({ speedCount: 50});
    //     //this.setState((prevState) => ({ 'speedCount': prevState.speedCount +1}))
    // }

    render() {
        return(
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
                        <Button onPress={() => {
                            this.props.navigation.navigate('secondScreen',
                                {
                                    speedCount: 0
                                });
                        }
                        }
                                 title="start"
                        />
                       
                    </View>

                </View>
        );
    }
}

class screen1 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
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
                                    speedCount: 150
                                });
                        }
                        }
                                 title="speed 1"
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('secondScreen',
                                {
                                    speedCount: 250
                                });
                        }
                        }
                                 title="500"
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('secondScreen',
                                {
                                    speedCount: 375
                                });
                        }
                        }
                                 title="750"
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('secondScreen',
                                {
                                    speedCount: 500
                                });
                        }
                        }
                                 title="1300"
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('secondScreen',
                                {
                                    speedCount: 750
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
            <FadeInView
                duration={speedCount}
                //change width and style if needed
                style={{width:358, height:630}}
            >

                <View style={styles.container}>
                    <Text style={styles.text}>{"\n"}screen2</Text>
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
                            this.props.navigation.navigate('thirdScreen',
                                {
                                    speedCount: 150
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('thirdScreen',
                                {
                                    speedCount: 250
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('thirdScreen',
                                {
                                    speedCount: 375
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('thirdScreen',
                                {
                                    speedCount: 500
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('thirdScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}

class screen3 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
            <FadeInView
                duration={speedCount}
                //change width and style if needed
                style={{width:358, height:630}}
            >

                <View style={styles.container}>
                    <Text style={styles.text}>{"\n"}three</Text>
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
                            this.props.navigation.navigate('fourthScreen',
                                {
                                    speedCount: 150
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('fourthScreen',
                                {
                                    speedCount: 250
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('fourthScreen',
                                {
                                    speedCount: 375
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('fourthScreen',
                                {
                                    speedCount: 520
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('fourthScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}

class screen4 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
            <FadeInView
                duration={speedCount}
                //change width and style if needed
                style={{width:358, height:630}}
            >

                <View style={styles.container}>
                    <Text style={styles.text}>{"\n"}four</Text>
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
                            this.props.navigation.navigate('fifthScreen',
                                {
                                    speedCount: 150
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('fifthScreen',
                                {
                                    speedCount: 250
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('fifthScreen',
                                {
                                    speedCount: 375
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('fifthScreen',
                                {
                                    speedCount: 520
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('fourteenScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}

class screen5 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
            <FadeInView
                duration={speedCount}
                //change width and style if needed
                style={{width:358, height:630}}
            >

                <View style={styles.container}>
                    <Text style={styles.text}>{"\n"}five</Text>
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
                            this.props.navigation.navigate('sixthScreen',
                                {
                                    speedCount: 150
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('sixthScreen',
                                {
                                    speedCount: 250
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('sixthScreen',
                                {
                                    speedCount: 375
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('sixthScreen',
                                {
                                    speedCount: 520
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('sixthScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}



class screen6 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
            <FadeInView
                duration={speedCount}
                //change width and style if needed
                style={{width:358, height:630}}
            >

                <View style={styles.container}>
                    <Text style={styles.text}>{"\n"}six</Text>
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
                            this.props.navigation.navigate('seventhScreen',
                                {
                                    speedCount: 150
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('seventhScreen',
                                {
                                    speedCount: 250
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('seventhScreen',
                                {
                                    speedCount: 375
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('seventhScreen',
                                {
                                    speedCount: 520
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('seventhScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}


class screen7 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
            <FadeInView
                duration={speedCount}
                //change width and style if needed
                style={{width:358, height:630}}
            >

                <View style={styles.container}>
                    <Text style={styles.text}>{"\n"}seven</Text>
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
                            this.props.navigation.navigate('eighthScreen',
                                {
                                    speedCount: 150
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('eighthScreen',
                                {
                                    speedCount: 250
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('eighthScreen',
                                {
                                    speedCount: 375
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('eighthScreen',
                                {
                                    speedCount: 520
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('eighthScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}




class screen8 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
            <FadeInView
                duration={speedCount}
                //change width and style if needed
                style={{width:358, height:630}}
            >

                <View style={styles.container}>
                    <Text style={styles.text}>{"\n"}eight</Text>
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
                            this.props.navigation.navigate('ninthScreen',
                                {
                                    speedCount: 150
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('ninthScreen',
                                {
                                    speedCount: 250
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('ninthScreen',
                                {
                                    speedCount: 375
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('ninthScreen',
                                {
                                    speedCount: 520
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('ninthScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}

class screen9 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
            <FadeInView
                duration={speedCount}
                //change width and style if needed
                style={{width:358, height:630}}
            >

                <View style={styles.container}>
                    <Text style={styles.text}>{"\n"}nine</Text>
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
                            this.props.navigation.navigate('tenthScreen',
                                {
                                    speedCount: 150
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('tenthScreen',
                                {
                                    speedCount: 250
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('tenthScreen',
                                {
                                    speedCount: 375
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('tenthScreen',
                                {
                                    speedCount: 520
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('tenthScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>

        );
        
    }

}

class screen10 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
            <FadeInView
                duration={speedCount}
                //change width and style if needed
                style={{width:358, height:630}}
            >

                <View style={styles.container}>
                    <Text style={styles.text}>{"\n"}10</Text>
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
                            this.props.navigation.navigate('ellevenScreen',
                                {
                                    speedCount: 150
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('ellevenScreen',
                                {
                                    speedCount: 250
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('ellevenScreen',
                                {
                                    speedCount: 375
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('ellevenScreen',
                                {
                                    speedCount: 520
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('ellevenScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}

class screen11 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
            <FadeInView
                duration={speedCount}
                //change width and style if needed
                style={{width:358, height:630}}
            >

                <View style={styles.container}>
                    <Text style={styles.text}>{"\n"}11</Text>
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
                            this.props.navigation.navigate('twelveScreen',
                                {
                                    speedCount: 150
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('twelveScreen',
                                {
                                    speedCount: 250
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('twelveScreen',
                                {
                                    speedCount: 375
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('twelveScreen',
                                {
                                    speedCount: 520
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('twelveScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}

class screen12 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
            <FadeInView
                duration={speedCount}
                //change width and style if needed
                style={{width:358, height:630}}
            >

                <View style={styles.container}>
                    <Text style={styles.text}>{"\n"}12</Text>
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
                            this.props.navigation.navigate('thirteenScreen',
                                {
                                    speedCount: 150
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('thirteenScreen',
                                {
                                    speedCount: 250
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('thirteenScreen',
                                {
                                    speedCount: 375
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('thirteenScreen',
                                {
                                    speedCount: 520
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('thirteenScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}

class screen13 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
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
                            this.props.navigation.navigate('fourteenScreen',
                                {
                                    speedCount: 0
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('fourteenScreen',
                                {
                                    speedCount: 500
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('fourteenScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('fourteenScreen',
                                {
                                    speedCount: 1300
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('fourteenScreen',
                                {
                                    speedCount: 1600
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}

class screen14 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
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
                            this.props.navigation.navigate('fifteenScreen',
                                {
                                    speedCount: 0
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('fifteenScreen',
                                {
                                    speedCount: 500
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('fifteenScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('fifteenScreen',
                                {
                                    speedCount: 1300
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('fifteenScreen',
                                {
                                    speedCount: 1600
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}

class screen15 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
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
                            this.props.navigation.navigate('sixteenScreen',
                                {
                                    speedCount: 0
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('sixteenScreen',
                                {
                                    speedCount: 500
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('sixteenScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('sixteenScreen',
                                {
                                    speedCount: 1300
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('sixteenScreen',
                                {
                                    speedCount: 1600
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}

class screen16 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
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
                            this.props.navigation.navigate('seventeenScreen',
                                {
                                    speedCount: 0
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('seventeenScreen',
                                {
                                    speedCount: 500
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('seventeenScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('seventeenScreen',
                                {
                                    speedCount: 1300
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('seventeenScreen',
                                {
                                    speedCount: 1600
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}

class screen17 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
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
                            this.props.navigation.navigate('eighteenScreen',
                                {
                                    speedCount: 0
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('eighteenScreen',
                                {
                                    speedCount: 500
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('eighteenScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('eighteenScreen',
                                {
                                    speedCount: 1300
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('eighteenScreen',
                                {
                                    speedCount: 1600
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}

class screen18 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
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
                            this.props.navigation.navigate('nineteenScreen',
                                {
                                    speedCount: 0
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('nineteenScreen',
                                {
                                    speedCount: 500
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('nineteenScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('nineteenScreen',
                                {
                                    speedCount: 1300
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('nineteenScreen',
                                {
                                    speedCount: 1600
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}

class screen19 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
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
                            this.props.navigation.navigate('twentyScreen',
                                {
                                    speedCount: 0
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('twentyScreen',
                                {
                                    speedCount: 500
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('twentyScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('twentyScreen',
                                {
                                    speedCount: 1300
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('twentyScreen',
                                {
                                    speedCount: 1600
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}

class screen20 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
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
                            this.props.navigation.navigate('twentyoneScreen',
                                {
                                    speedCount: 0
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('twentyoneScreen',
                                {
                                    speedCount: 500
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('twentyoneScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('twentyoneScreen',
                                {
                                    speedCount: 1300
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('twentyoneScreen',
                                {
                                    speedCount: 1600
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}

class screen21 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
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
                            this.props.navigation.navigate('twentytwoScreen',
                                {
                                    speedCount: 0
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('twentytwoScreen',
                                {
                                    speedCount: 500
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('twentytwoScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('twentytwoScreen',
                                {
                                    speedCount: 1300
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('twentytwoScreen',
                                {
                                    speedCount: 1600
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}

class screen22 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
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
                            this.props.navigation.navigate('twentythreeScreen',
                                {
                                    speedCount: 0
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('twentythreeScreen',
                                {
                                    speedCount: 500
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('twentythreeScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('twentythreeScreen',
                                {
                                    speedCount: 1300
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('twentythreeScreen',
                                {
                                    speedCount: 1600
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}

class screen23 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
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
                            this.props.navigation.navigate('twentyfourScreen',
                                {
                                    speedCount: 0
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('twentyfourScreen',
                                {
                                    speedCount: 500
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('twentyfourScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('twentyfourScreen',
                                {
                                    speedCount: 1300
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('twentyfourScreen',
                                {
                                    speedCount: 1600
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}

class screen24 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
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
                            this.props.navigation.navigate('twentyfiveScreen',
                                {
                                    speedCount: 0
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('twentyfiveScreen',
                                {
                                    speedCount: 500
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('twentyfiveScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('twentyfiveScreen',
                                {
                                    speedCount: 1300
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('twentyfiveScreen',
                                {
                                    speedCount: 1600
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}

class screen25 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
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
                            this.props.navigation.navigate('twentysixScreen',
                                {
                                    speedCount: 0
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('twentysixScreen',
                                {
                                    speedCount: 500
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('twentysixScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('twentysixScreen',
                                {
                                    speedCount: 1300
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('twentysixScreen',
                                {
                                    speedCount: 1600
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}

class screen26 extends React.Component {
    render() {
        const { navigation } = this.props
        const speedCount = navigation.getParam('speedCount');

        return (
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
                            this.props.navigation.navigate('endScreen',
                                {
                                    speedCount: 0
                                });
                        }
                        }
                        />
                        <Button2 onPress={() => {
                            this.props.navigation.navigate('endScreen',
                                {
                                    speedCount: 500
                                });
                        }
                        }
                        />
                        <Button3 onPress={() => {
                            this.props.navigation.navigate('endScreen',
                                {
                                    speedCount: 750
                                });
                        }
                        }
                        />
                        <Button4 onPress={() => {
                            this.props.navigation.navigate('endScreen',
                                {
                                    speedCount: 1300
                                });
                        }
                        }
                        />
                        <Button5 onPress={() => {
                            this.props.navigation.navigate('endScreen',
                                {
                                    speedCount: 1600
                                });
                        }
                        }
                        />
                    </View>

                </View>
            </FadeInView>
        );
    }
}

class LastScreen extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>Done!</Text>
            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        //Main: App,
        Home: HomeScreen,
        firstScreen: screen1,
        secondScreen: screen2,
        thirdScreen: screen3,
        fourthScreen:screen4,
        fifthScreen: screen5,
        sixthScreen:screen6,
        seventhScreen:screen7,
       eighthScreen:screen8,
        ninthScreen:screen9,
        tenthScreen:screen10,
        ellevenScreen:screen11,
        twelveScreen:screen12,
        
        thirteenScreen: screen13,
        fourteenScreen: screen14,
        fifteenScreen: screen15,
        sixteenScreen: screen16,
        seventeenScreen: screen17,
        eighteenScreen: screen18,
        nineteenScreen: screen19,
        twentyScreen: screen20,
        twentyoneScreen: screen21,
        twentytwoScreen: screen22,
        twentythreeScreen: screen23,
        twentyfourScreen: screen24,
        twentyfiveScreen: screen25,
        twentysixScreen: screen26,
        endScreen: LastScreen
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
