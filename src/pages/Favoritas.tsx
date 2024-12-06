import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

type Praga = { id: number; name: string; image: string };

export function Favoritos({ route, navigation }: any) {
  const { favoritos, pragas } = route.params;
  const pragasFavoritadas = pragas.filter((praga: Praga) =>
    favoritos.includes(praga.id)
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={pragasFavoritadas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("PragaDetalhes", { praga: item })
            }
            style={styles.pragaItem}
          >
            <Image source={item.image} style={styles.pragaImage} />
            <Text style={styles.pragaName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 20 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  pragaItem: { flexDirection: "row", alignItems: "center", marginVertical: 10 },
  pragaImage: { width: 50, height: 50, marginRight: 10 },
  pragaName: { fontSize: 18 },
});
