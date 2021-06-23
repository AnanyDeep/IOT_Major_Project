import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TabLayout(props) {
  return (
    <View>
      <View style={[styles.container, { backgroundColor: props.bgcolor }]}>
        <Text style={[styles.txt, { backgroundColor: props.bgcolor }]}>
          {props.name}
        </Text>
        <Text style={styles.txt}>{props.data}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    marginHorizontal: 10,
    paddingVertical: 20,
    marginTop: 20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  txt: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "700",
    paddingLeft: 50,
    paddingRight: 50,
  },
});
