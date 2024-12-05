import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TutorialScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Qual a Praga?</Text>

      <View style={styles.content}>
        <Text style={styles.text}>
          Bem-vindo ao *Qual a Praga?*! Aqui você encontrará informações sobre
          as principais pragas agrícolas.
        </Text>
        <Text style={styles.text}>
          Na tela inicial, você verá uma lista com as pragas mais comuns. Se
          precisar de uma praga específica, use a barra de pesquisa.
        </Text>
        <Text style={styles.text}>
          Basta digitar o nome para encontrar rapidamente a praga que está
          procurando.
        </Text>
        <Text style={styles.text}>
          Você também pode favoritar pragas! Basta clicar no ícone de coração ao
          lado do nome de uma praga para adicioná-la aos seus favoritos. Você
          poderá acessá-las facilmente mais tarde na seção de "Favoritos".
        </Text>
      </View>

      <Button
        title="Entendi, vamos começar!"
        onPress={() => navigation.navigate("Home")} // Redireciona para a tela inicial
        color="#28a745"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#4CAF50",
  },
  content: {
    marginBottom: 30,
  },
  text: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default TutorialScreen;
