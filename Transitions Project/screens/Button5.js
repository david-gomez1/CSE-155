import React, { Component } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const Button5 = (props) => {
        return (
            <Button title="Add Speed"
                onPress={() => props.onPress()}
            />
        );
}


export default Button5;