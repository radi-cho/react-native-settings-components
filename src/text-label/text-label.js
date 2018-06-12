import React, { Component } from "react";
import { StyleSheet, Text, View, Platform, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";

class SettingsTextLabel extends Component {
  static props = {
    container: PropTypes.object,
    containerStyle: ViewPropTypes ? ViewPropTypes.style : View.propTypes.style,
    titleProps: PropTypes.object,
    titleStyle: Text.propTypes.style,
    title: PropTypes.string.isRequired
  };

  static defaultProps = {
    container: {},
    containerStyle: {},
    titleProps: {},
    titleStyle: {}
  };

  render() {
    const {
      container,
      containerStyle,
      titleProps,
      titleStyle,
      title
    } = this.props;

    return (
      <View {...container} style={containerStyle}>
        <Text {...titleProps} style={[styles.defaultTitleStyle, titleStyle]}>
          {title}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  defaultTitleStyle: {
    borderWidth: 0,
    color: Platform.OS === "ios" ? "#424246" : "#111",
    fontSize: Platform.OS === "ios" ? 8 : 9.5,
    padding: 16,
    paddingTop: 1,
    paddingBottom: 8
  }
});

export default SettingsTextLabel;
