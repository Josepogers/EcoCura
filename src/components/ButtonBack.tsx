import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

import { styles } from "../styles/ButtonBack";

export function ButtonBack({ navigation }: any) {
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate("GetStart")}
        style={styles.buttonVoltar}
      >
        <Text style={{ color: "#fff", fontSize: 30 }}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
