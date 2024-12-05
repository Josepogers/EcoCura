import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styles } from "../styles/GetStart";
import { ButtonBack } from "../components/ButtonBack";

const backgroundImage = require("../../assets/background.webp");

const GetStart = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Imagem de fundo */}
      <View style={styles.main}>
        <Image
          source={backgroundImage}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
        {/* Nome do Aplicativo */}
        <View style={styles.overlay}>
          <Text style={styles.title}>Qual a Praga?</Text>
        </View>
      </View>

      {/* Rodapé com Botão */}
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Tutorial")}
          style={styles.buttonGetStart}
        >
          <Text style={styles.buttonText}>Começar</Text>
        </TouchableOpacity>
        <ButtonBack navigation={navigation} />
      </View>
    </View>
  );
};

export { GetStart };
