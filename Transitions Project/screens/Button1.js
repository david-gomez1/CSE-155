import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Button1 = (props) => {
        return (
            <Button title="Speed 1"
                onPress={() => props.onPress()}
            />
        );
}


export default Button1;