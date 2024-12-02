import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Header } from "../components/Header";

const pragas = [
  {
    id: 1,
    name: "Lagarta Cartucho",
    description:
      "As lagartas recém eclodidas raspam as folhas e se alojam no cartucho, onde se observa seus excrementos. Pela destruição do cartucho, principalmente na fase próxima ao florescimento, podem causar danos expressivos que se acentuam em períodos de seca. Os danos são maiores quando o ataque ocorre em plantas com 8 a 10 folhas.",
    combat:
      "Usar controle biológico, inseticidas específicos, evitar a destruição do cartucho.",
    image: require("../../assets/lagarta-cartucho.jpeg"),
  },
  {
    id: 2,
    name: "Pulgão",
    description:
      "Insetos pequenos que sugam a seiva das plantas, deixando-as enfraquecidas. Podem ser transmissores de doenças.",
    combat: "Inseticidas específicos, controle biológico com joaninhas.",
    image: require("../../assets/praga.jpg"),
  },
  {
    id: 3,
    name: "Mosca Branca",
    description:
      "Causa danos às folhas das plantas, deixando-as amareladas e fracas. A mosca branca também pode transmitir vírus.",
    combat: "Aplicar óleo mineral, controle biológico com predadores naturais.",
    image: require("../../assets/praga.jpg"),
  },
  {
    id: 4,
    name: "Broca do Café",
    description:
      "Ataca os grãos do café, causando danos significativos à produção. Pode prejudicar a qualidade do grão.",
    combat: "Controle cultural e químico, uso de armadilhas específicas.",
    image: require("../../assets/praga.jpg"),
  },
  {
    id: 5,
    name: "Percevejo",
    description:
      "Inseto sugador que danifica folhas e frutos, prejudicando a qualidade da colheita.",
    combat: "Uso de armadilhas, aplicação de inseticidas naturais.",
    image: require("../../assets/praga.jpg"),
  },
  {
    id: 6,
    name: "Catarininha",
    description:
      "Pequenos insetos que atacam as folhas das plantas, deixando manchas amareladas e enfraquecendo a planta.",
    combat:
      "Controle biológico com predadores naturais, uso de inseticidas específicos.",
    image: require("../../assets/praga.jpg"),
  },
  {
    id: 7,
    name: "Ácaro",
    description:
      "Pequenos aracnídeos que causam manchas nas folhas, prejudicando o crescimento da planta e enfraquecendo as culturas.",
    combat:
      "Aplicação de acaricidas, controle biológico com predadores naturais como ácaros fitoseídeos.",
    image: require("../../assets/praga.jpg"),
  },
  {
    id: 8,
    name: "Gorgulho",
    description:
      "Insetos que atacam raízes e caules das plantas, causando sérios danos ao sistema radicular.",
    combat:
      "Uso de armadilhas, tratamento com inseticidas específicos para gorgulhos.",
    image: require("../../assets/praga.jpg"),
  },
  {
    id: 9,
    name: "Besouro da Batata",
    description:
      "Inseto que se alimenta de folhas de batata, causando danos significativos à cultura, especialmente durante o crescimento.",
    combat:
      "Controle químico com inseticidas, rotação de culturas, uso de pesticidas naturais.",
    image: require("../../assets/praga.jpg"),
  },
  {
    id: 10,
    name: "Minador de Folhas",
    description:
      "Larvas de insetos que mineram as folhas, formando galerias que prejudicam a fotossíntese e o crescimento da planta.",
    combat:
      "Uso de inseticidas específicos, remoção manual das folhas infectadas.",
    image: require("../../assets/praga.jpg"),
  },
];

export function Home({ navigation }: any) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPragas = searchQuery
    ? pragas.filter((praga) =>
        praga.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : pragas.slice(0, 4); // Exibe 4 principais

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Header navigation={navigation} />

        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Pesquisar pragas..."
            placeholderTextColor="#88b04b"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <Text style={styles.title}>
          {searchQuery ? "Resultados da Pesquisa" : "Principais Pragas"}
        </Text>

        <View style={styles.pragasList}>
          {filteredPragas.map((praga) => (
            <TouchableOpacity
              key={praga.id}
              style={styles.pragaItem}
              onPress={() => navigation.navigate("PragaDetalhes", { praga })}
            >
              <Image source={praga.image} style={styles.pragaImage} />
              <Text style={styles.pragaTitle}>{praga.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E9F5E6", alignItems: "center" },
  scrollView: { width: "100%" },
  searchContainer: { alignItems: "center", marginVertical: 20 },
  searchBar: {
    width: "80%",
    height: 50,
    borderColor: "#88b04b",
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2F4F2F",
    textAlign: "center",
    marginVertical: 10,
  },
  pragasList: { width: "90%", alignSelf: "center" },
  pragaItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#CFE0C3",
    borderRadius: 8,
    marginVertical: 5,
  },
  pragaImage: { width: 50, height: 50, borderRadius: 25, marginRight: 15 },
  pragaTitle: { fontSize: 18, color: "#2F4F2F", fontWeight: "bold" },
});
