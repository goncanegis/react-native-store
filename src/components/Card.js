import React from "react"
import {
  Image,
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native"

export const Card = ({ product, onSelect }) => {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: product.image }} />
        <View style={styles.bodyContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {product.title}
          </Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    margin: 10,
    flexDirection: "row",
    padding: 5,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  bodyContainer: {
    padding: 5,
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  price: {
    textAlign: "right",
    fontSize: 16,
    fontStyle: "italic",
  },
})
