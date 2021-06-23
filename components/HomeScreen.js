// Import Start Here ##############################################################
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Platform,
} from "react-native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";
import Header from "../components/Header";
import CardScreen from "../components/CardScreen";
import TabLayout from "../components/TabLayout";
import Api from "../components/Api";
import firebase from "firebase";
import Firebase from "./Firebase";

// import LottieView from "lottie-react-native";
// Import End Here ##############################################################

// Define Start Here ##############################################################
import day from "../assets/Day.gif";
import night from "../assets/night.gif";

import sunny from "../assets/BS.gif";
import cloudy from "../assets/cloudsONLY.gif";
import sc from "../assets/SwC.gif";

const temperature = require("../assets/hot.png");
const humidity = require("../assets/humidity.png");
const gauge = require("../assets/gauge.png");
// Define End Here ##############################################################

export default function HomeScreen({ navigation }) {
  var d = new Date();
  var n = d.getHours();

  const [StatusH, setStatusH] = useState([]);
  const [StatusT, setStatusT] = useState([]);

  useEffect(() => {
    const myitemsH = firebase.database().ref("Humidity");
    myitemsH.on("value", (snapshot) => {
      let value = snapshot.val();
      setStatusH(value);
    });

    const myitemsT = firebase.database().ref("Temperature");
    myitemsT.on("value", (snapshot) => {
      let value = snapshot.val();
      setStatusT(value);
    });

    // const conn = firebase.database().ref("Connectivity");
    // conn.on("value", (snapshot) => {
    //   setConnectivity(Object.values(snapshot.val()));
    // });
  });

  // const plus = () => {
  //   firebase.database().ref().update({
  //     LED_STATUS0 : 1
  //   });
  // };

  // const minus  = () => {
  //   firebase.database().ref().update({
  //     LED_STATUS0 : 0
  //   });
  // };

  // const handleChange = (event, val) => {
  //   setState(val ? 0:1);
  // };

  // if (state) minus()
  // else plus()

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View>
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
      </View>
      <View style={styles.firstContainer}>
        {n >= 6 && n < 20 ? (
          <Image style={styles.cloudy} source={day} />
        ) : (
          <Image style={styles.cloudy} source={night} />
        )}
        <Text style={styles.cloudTemp}>
          <Api />
        </Text>
        <Text style={styles.tempName}>New Delhi</Text>
      </View>
      <View style={styles.cardStyle}>
        <CardScreen
          name="Humidity"
          bcolor="#00cec9"
          pic={humidity}
          value={StatusH}
        />
        <CardScreen
          name="Temperature"
          bcolor="#74b9ff"
          pic={
            StatusH >= 30 && StatusH <= 45
              ? cloudy
              : StatusH > 45 && StatusH <= 60
              ? sc
              : StatusH > 60 && StatusH <= 100
              ? sunny
              : false
          }
          value={`${StatusT}°C`}
        />
        <CardScreen name="Pressure" bcolor="#e84393" pic={gauge} value={0} />
      </View>
      <View>
        <TabLayout name="Wind 🍃" bgcolor="#ff7675" data="24" />
        <TabLayout name="Visibility " bgcolor="#00cec9" data="5.0" />
        <TabLayout name="Humidity" bgcolor="#74b9ff" data="32" />
        <TabLayout name="Temperature" bgcolor="#55efc4" data="30" />
      </View>
      <StatusBar style="dark" backgroundColor="skyblue" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cloudy: {
    height: 100,
    width: 100,
    borderRadius: 40,
  },
  firstContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  cloudTemp: {
    fontSize: 50,
    fontWeight: "700",
    textAlign: "center",
  },
  cardStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  tempName: {
    fontSize: 30,
    color: "orange",
  },
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
