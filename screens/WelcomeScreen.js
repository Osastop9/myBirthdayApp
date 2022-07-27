import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

export default function RegistrationScreen() {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/regImage.jpg")}
    >
      <View style={styles.iconContainer}>
        <Text style={styles.blogo}>B</Text>
        <Text style={styles.logoText}>irthday Shout</Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton style={styles.loginButton} title={"Login"} />
        <AppButton title={"Register"} color="secondary" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    alignItems: "center",
    flex: 1,
    height: "100%",
    justifyContent: "flex-end",
    width: "100%",
  },
  blogo: {
    borderColor: colors.white,
    borderWidth: 3,
    color: colors.primary,
    fontSize: 100,
    fontWeight: "700",
  },
  buttonContainer: {
    marginBottom: 20,
    padding: 20,
    width: "100%",
  },
  container: {},
  iconContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 80,
    alignItems: "flex-end",
  },
  logoText: {
    color: colors.secondary,
    fontSize: 30,
    fontWeight: "600",
    marginBottom: 25,
    marginLeft: 5,
  },
});
