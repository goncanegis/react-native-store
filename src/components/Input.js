import React from "react"
import { Image, Text, View, StyleSheet, TextInput } from "react-native"

export const Input = ({ placeholder, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} onChangeText={onChangeText} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
  },
})
