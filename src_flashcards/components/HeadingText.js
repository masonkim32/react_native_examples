import React, { Component } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";

import { fonts, scalingFactors } from "./../styles/fonts";


let { width } = Dimensions.get("window");

class HeadingText extends Component {
  static displayName = "HeadingText";

  render() {
    return (
      <Text style={[this.props.style, fonts.big, scaled.big]}>
        {this.props.children}
      </Text>
    );
  }
}

var scaled = StyleSheet.create({
  big: {
    fontSize: width / scalingFactors.big
  },
});

export default HeadingText;