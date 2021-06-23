import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

export default function Header({ navigation }) {
  return (
    <View style={styles.header}>
      <Icon
        name="arrow-back-outline"
        size={50}
        color="orange"
        onPress={() => {
          navigation.navigate("Info");
        }}
      />
      <Icon name="arrow-forward-outline" size={50} color="orange" />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // backgroundColor: "pink",
    marginTop: Platform.OS === "android" ? 20 : 0,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  txt: {
    fontSize: 25,
    marginLeft: 10,
    marginRight: 10,
  },
});
