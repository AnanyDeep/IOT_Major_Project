// Import Start Here ##############################################################
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
// import Icon from "react-native-vector-icons/FontAwesome";
// Import End Here ##############################################################

export default function CardScreen(props) {
  return (
    <View style={[styles.cardStyle, { backgroundColor: props.bcolor }]}>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={props.pic} />
      </View>
      <Text style={styles.tempText}>{props.value}</Text>
      <Text style={styles.bottomText}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cardStyle: {
    paddingHorizontal: 30,
    paddingVertical: 40,
    marginTop: 30,
    borderRadius: 20,
    elevation: 20,
  },
  tempText: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
    color: "#FFF",
  },
  iconContainer: {
    alignItems: "center",
  },
  icon: {
    height: 60,
    width: 60,
  },
  bottomText: {
    fontWeight: "700",
    color: "#FFF",
  },
});
