import React from "react"
import { Image, Text, View, StyleSheet, Dimensions } from "react-native"
import { useFetch } from "../hooks/useFetch"
import { API_URL } from "@env"
import { Loading } from "../components/Loading"
import { Error } from "../components/Error"

export const Detail = ({ route }) => {
  const { id } = route.params
  const { loading, error, data } = useFetch(`${API_URL}/${id}`)

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: data.image }} />
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.price}>${data.price}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: 10,
  },
  bodyContainer: {
    padding: 10,
  },
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 3,
    resizeMode: "contain",
  },
  title: {
    fontWeight: "bold",
    fontSize: 22,
  },
  description: {
    color: "#999",
  },
  price: {
    fontStyle: "italic",
    alignSelf: "flex-end",
    fontWeight: "bold",
  },
})
