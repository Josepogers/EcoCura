import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export function PragaDetalhes({ route }: any) {
  const { praga } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{praga.name}</Text>
      <Image source={praga.image} style={styles.image} />
      <Text style={styles.description}>{praga.description}</Text>
      <Text style={styles.combatTitle}>Formas de Combate:</Text>
      <Text style={styles.combat}>{praga.combat}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#E9F5E6" },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2F4F2F",
    marginBottom: 10,
  },
  image: { width: "100%", height: 200, resizeMode: "cover", marginBottom: 20 },
  description: { fontSize: 16, color: "#2F4F2F", marginBottom: 20 },
  combatTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#88b04b",
    marginBottom: 10,
  },
  combat: { fontSize: 16, color: "#2F4F2F" },
});
