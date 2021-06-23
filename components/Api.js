import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Api() {
  const [temp, settemp] = useState(null);
  const [humi, sethumi] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      const URL = `http://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=689598a631215186016e69e4e651ddfd`;
      const response = await fetch(URL);
      const resJson = await response.json();
      settemp(Math.floor(resJson.main.temp));
      sethumi(resJson.main.humidity);
    };
    fetchApi();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: "orange" }}>{temp}℃</Text>
      {/* <Text style={{ fontSize: 20 }}>{humi} %</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
