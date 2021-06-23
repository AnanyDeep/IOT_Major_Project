import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
export default function InfoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Informatin here</Text>
      <Icon
        name="arrow-back-outline"
        size={50}
        color="orange"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
