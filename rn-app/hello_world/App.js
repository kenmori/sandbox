/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";
import { Button, Alert, Platform, StyleSheet, Text, View } from "react-native";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.base}>
        <Text style={styles.title}>Hello!!</Text>
        <Button title="Click" onPress={this.doAction} />
      </View>
    );
  }
  doAction = () => {
    Alert.alert("you clicked!!");
  };
}

const styles = StyleSheet.create({
  base: {
    backgroundColor: "white",
    padding: 30
  },
  title: {
    padding: 10,
    color: "red",
    textAlign: "center",
    fontSize: 60,
    fontWeight: "bold"
  }
});
