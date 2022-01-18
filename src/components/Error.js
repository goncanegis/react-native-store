import React from "react"
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native"
import LottieView from "lottie-react-native"

export const Error = (props) => {
  return (
    <LottieView source={require("../../assets/error.json")} autoPlay loop />
  )
}
