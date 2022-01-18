import React from "react"
import { Image, Text, View, StyleSheet } from "react-native"
import LottieView from "lottie-react-native"

export const Loading = (props) => {
  return (
    <LottieView source={require("../../assets/loading.json")} autoPlay loop />
  )
}

const styles = StyleSheet.create({})
