import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Button2 = (props) => {
        return (
            <Button title="Speed 2"
                onPress={() => props.onPress()}
            />
        );
}


export default Button2;