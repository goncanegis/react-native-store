import {
  ActivityIndicator,
  Image,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native"
import { API_URL } from "@env"
import { Card } from "../components/Card"
import { useFetch } from "../hooks/useFetch"
import { Loading } from "../components/Loading"
import { Error } from "../components/Error"

export const Products = ({ navigation }) => {
  const { data, loading, error } = useFetch(API_URL)

  const handleProductSelect = (id) => {
    navigation.navigate("DetailPage", { id })
  }

  const renderProduct = ({ item }) => (
    <Card product={item} onSelect={() => handleProductSelect(item.id)} />
  )

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error />
  }

  return (
    <SafeAreaView>
      <FlatList data={data} renderItem={renderProduct} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})
