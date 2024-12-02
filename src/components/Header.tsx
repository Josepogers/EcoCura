import React from "react";
import { View, Text } from "react-native";

import { styles } from "../styles/Header";

import { ButtonBack } from "./ButtonBack";

const Header = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <ButtonBack navigation={navigation} />
    </View>
  );
};

export { Header };
