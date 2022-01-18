import React from "react"
import {
  Image,
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TextInput,
} from "react-native"
import { Button } from "../components/Button"
import { Formik } from "formik"
import { MaterialIcons } from "@expo/vector-icons"

//* MARK: - Body
export const Login = (props) => {
  //* MARK: - Functions
  const handleLogin = (values) => {
    console.log(values)
  }

  //* MARK: - Render
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../assets/login-logo.png")}
          style={styles.logo}
        />
      </View>

      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={handleLogin}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={styles.bodyContainer}>
            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                placeholder="Enter username"
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <MaterialIcons
                style={styles.icon}
                name="account-circle"
                size={24}
                color="lightgray"
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholder="Enter password"
                style={styles.input}
                secureTextEntry={true}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <MaterialIcons
                style={styles.icon}
                name="lock"
                size={24}
                color="lightgray"
              />
            </View>
            <Button onPress={handleSubmit} title="Login" />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  )
}

//* MARK: - Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#64b5f6",
    alignItems: "center",
  },
  logoContainer: {
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    height: Dimensions.get("window").height / 5,
    width: Dimensions.get("window").width,
    resizeMode: "contain",
  },
  bodyContainer: {
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    padding: 10,
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 7,
  },
  icon: {
    // flex: 1,
    margin: 10,
  },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    color: "#424242",
  },
})
