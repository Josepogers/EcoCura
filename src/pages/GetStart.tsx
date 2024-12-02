import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, Button } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { styles } from "../styles/GetStart";
import { ButtonBack } from "../components/ButtonBack";

const backgroundImage = require("../../assets/background.webp");

const GetStart = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Image
          source={backgroundImage}
          style={{ width: "100%", height: "100%" }}
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.buttonGetStart}
        >
          <Text style={{ color: "#fff", fontSize: 30 }}>GetStart</Text>
        </TouchableOpacity>
        <ButtonBack navigation={navigation} />
      </View>
    </View>
  );
};

export { GetStart };
