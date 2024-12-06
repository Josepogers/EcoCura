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
import { FontAwesome } from "@expo/vector-icons";

export function Home({ navigation }: any) {
  const [searchQuery, setSearchQuery] = useState("");
  const [favoritos, setFavoritos] = useState<number[]>([]);
  const pragas = [
    {
      id: 1,
      name: "Lagarta Cartucho",
      description:
        "As lagartas recém eclodidas raspam as folhas e se alojam no cartucho, onde se observa seus excrementos. Elas destroem rapidamente as folhas e, ao atingir o cartucho, podem comprometer o desenvolvimento completo da planta, especialmente em condições de seca.",
      combat:
        "Controle biológico com parasitoides como Trichogramma spp., que parasitam os ovos da lagarta, e aplicação de Bacillus thuringiensis (Bt) para matar larvas jovens. Usar inseticidas seletivos como clorantraniliprole apenas quando necessário. Praticar manejo integrado de pragas (MIP) com rotação de culturas e eliminação de restos culturais. Monitorar com armadilhas luminosas para identificar o início da infestação.",
      crop: "Milho, Soja, Algodão,Feijão, Sorgo, Arroz, Tomate",
      image: require("../../assets/lagarta-cartucho.jpeg"),
    },
    {
      id: 2,
      name: "Pulgão",
      description:
        "Insetos pequenos, de coloração verde, preta ou amarela, que se alimentam da seiva das plantas. Causam folhas enrugadas, deformadas e enfraquecidas, além de serem vetores de várias doenças virais.",
      combat:
        "Introduzir inimigos naturais como joaninhas e crisopídeos, que se alimentam dos pulgões. Pulverizar óleo de neem ou sabão inseticida para sufocar os insetos. Eliminar ervas daninhas e hospedeiras ao redor da área afetada. Usar controle biológico com larvas de Chrysoperla carnea.",
      crop: "Soja, feijão, alface, entre outras", // Cultura que a praga ataca
      image: require("../../assets/PULGAO.jpg.webp"),
    },
    {
      id: 3,
      name: "Mosca Branca",
      description:
        "Pequeno inseto alado que se alimenta da seiva das folhas, causando amarelamento, enfraquecimento e queda das folhas. Além de prejudicar a planta diretamente, a mosca branca é vetor de viroses que afetam diversas culturas.",
      combat:
        "Pulverizar óleo mineral para interromper a reprodução e sufocar os ovos. Introduzir predadores como Encarsia formosa, que parasitam as pupas da mosca branca. Instalar armadilhas adesivas amarelas para capturar adultos. Realizar rotação de culturas para evitar proliferação.",
      crop: "Tomate, pepino, algodão",
      image: require("../../assets/moscabranca.jpg"),
    },
    {
      id: 4,
      name: "Broca do Café",
      description:
        "Pequeno besouro que perfura os grãos de café, reduzindo a qualidade e o rendimento da produção. A infestação pode comprometer severamente a comercialização, especialmente em mercados que exigem alta qualidade.",
      combat:
        "Coleta e destruição de grãos infestados manualmente. Uso de armadilhas com feromônios (etanol e metanol) para capturar os adultos. Aplicação de Beauveria bassiana, fungo que infecta e mata o besouro. Realizar monitoramento constante para agir rapidamente ao identificar os primeiros sinais.",
      crop: "Café",
      image: require("../../assets/brocadocafe.jpg"),
    },
    {
      id: 5,
      name: "Percevejo",
      description:
        "Inseto sugador que se alimenta da seiva de folhas, caules e frutos. Causa manchas escuras, deformações e quedas prematuras, comprometendo a qualidade e o desenvolvimento da cultura.",
      combat:
        "Uso de armadilhas com feromônios para atrair percevejos. Aplicação de inseticidas biológicos ou químicos seletivos, como lambda-cialotrina, apenas quando necessário. Eliminação de restos culturais e ervas daninhas para reduzir o habitat do percevejo. Monitoramento contínuo com amostragens semanais.",
      crop: "Feijão, soja, milho, tomate",
      image: require("../../assets/percevejo.jpeg"),
    },
    {
      id: 6,
      name: "Mosca das Frutas",
      description:
        "Inseto que deposita ovos dentro das frutas, onde as larvas se desenvolvem, causando apodrecimento e queda prematura dos frutos.",
      combat:
        "Uso de armadilhas com feromônios para captura dos adultos. Coleta e destruição de frutos infectados para evitar o desenvolvimento de novas gerações. Aplicação de iscas tóxicas específicas ao redor das plantas afetadas. Manter o solo limpo e livre de restos de frutos caídos.",
      crop: "Manga, laranja, maçã, abacaxi", // Cultura que a praga ataca
      image: require("../../assets/moscadasfrutas.webp"),
    },
    {
      id: 7,
      name: "Ácaro",
      description:
        "Pequenos aracnídeos que atacam principalmente as folhas, provocando descoloração, manchas prateadas e queda precoce das folhas. Podem se multiplicar rapidamente em condições quentes e secas.",
      combat:
        "Aplicação de acaricidas seletivos para controlar populações. Introdução de ácaros predadores como Phytoseiulus persimilis, que se alimentam de ácaros-praga. Manutenção da umidade elevada para reduzir a taxa de reprodução dos ácaros. Monitoramento contínuo para detecção precoce.",
      crop: "Tomate, morango, pepino, feijão", // Cultura que a praga ataca
      image: require("../../assets/acaro.webp"),
    },
    {
      id: 8,
      name: "Gorgulho",
      description:
        "Insetos que atacam principalmente raízes, caules e sementes. Eles perfuram tecidos vegetais, causando prejuízos graves ao sistema radicular e comprometendo o crescimento.",
      combat:
        "Uso de armadilhas com feromônios para captura dos adultos. Tratamento preventivo das sementes com inseticidas específicos antes do plantio. Realizar aração profunda do solo para expor larvas e adultos aos predadores naturais.",
      crop: "Feijão, soja, arroz, milho", // Cultura que a praga ataca
      image: require("../../assets/gorgulho.jpeg"),
    },
    {
      id: 9,
      name: "Besouro da Batata",
      description:
        "Inseto que se alimenta das folhas da batata, provocando desfolha severa e redução no rendimento da cultura, especialmente durante a fase de crescimento.",
      combat:
        "Rotação de culturas com espécies não hospedeiras para interromper o ciclo. Aplicação de inseticidas botânicos como piretrina. Controle biológico com predadores naturais, como joaninhas e crisopídeos.",
      crop: "Batata",
      image: require("../../assets/besourodabatata.webp"),
    },
    {
      id: 10,
      name: "Bicho Mineiro",
      description:
        "Larva de mariposa que ataca as folhas, perfurando-as e formando galerias ou minas, o que reduz a capacidade fotossintética da planta, enfraquecendo-a gradualmente.",
      combat:
        "Uso de controle biológico com parasitoides como *Stenomesius japonicus* e aplicação de inseticidas específicos como abamectina. Promover a adubação equilibrada para fortalecer a planta contra ataques.",
      crop: "Café, tomate, feijão", // Cultura que a praga ataca
      image: require("../../assets/bichomineiro.webp"),
    },
    {
      id: 11,
      name: "Cochonilha",
      description:
        "Insetos sugadores que se fixam nas plantas e secretam substâncias cerosas, formando crostas brancas. Causam enfraquecimento da planta e favorecem o surgimento de fumagina.",
      combat:
        "Pulverizar óleo mineral ou óleo de neem para sufocar as cochonilhas. Introduzir predadores naturais como a joaninha *Cryptolaemus montrouzieri*. Limpar manualmente as partes afetadas com algodão embebido em álcool.",
      crop: "Citrus, feijão, tomate, café",
      image: require("../../assets/cochonilha.jpg"),
    },
    {
      id: 12,
      name: "Formiga Cortadeira",
      description:
        "Formigas que cortam folhas e as levam para seus ninhos, onde cultivam fungos como fonte de alimento. Podem desfolhar rapidamente plantas inteiras.",
      combat:
        "Uso de iscas granuladas com formicidas específicos. Destruição dos ninhos com aplicação direta de produtos químicos. Plantio de espécies repelentes como citronela ao redor das culturas",
      crop: "Soja, milho, feijão, cana-de-açúcar",
      image: require("../../assets/formigacortadeira.webp"),
    },

    {
      id: 14,
      name: "Tetranychus urticae (Ácaro Vermelho)",
      description:
        "Ácaro que suga a seiva das plantas, causando descoloração nas folhas e enfraquecimento das culturas.",
      combat:
        "Aplicação de acaricidas específicos, como o miticida abamectina. Controle biológico com ácaros predadores, como *Phytoseiulus persimilis*. Manter a umidade das plantas elevada para reduzir a infestação.",
      crop: "Café, tomate, pepino",
      image: require("../../assets/acarovermelho.jpeg"),
    },
    {
      id: 15,
      name: "Lagarta da espiga de milho",
      description:
        "Larvas da mariposa que atacam o milho, danificando as espigas e reduzindo o rendimento da colheita.",
      combat:
        "Uso de armadilhas com feromônios para capturar adultos. Aplicação de Bacillus thuringiensis (Bt) nas plantas para controlar as larvas. Implementar práticas de rotação de culturas.",
      crop: "Milho",
      image: require("../../assets/lagartadaespigademilho.jpg"),
    },
    {
      id: 16,
      name: "Nematóides",
      description:
        "Vermes microscópicos que atacam as raízes das plantas, prejudicando a absorção de nutrientes e água.",
      combat:
        "Uso de nematicidas específicos. Prática de rotação de culturas e plantio de espécies resistentes. Adição de matéria orgânica ao solo para melhorar a saúde das raízes.",
      crop: "Feijão, soja, tomate, cenoura",
      image: require("../../assets/nematodos.webp"),
    },
  ];

  const handleFavoritar = (praga: any) => {
    if (favoritos.includes(praga.id)) {
      const novosFavoritos = favoritos.filter((id) => id !== praga.id);

      setFavoritos(novosFavoritos);
    } else {
      setFavoritos([...favoritos, praga.id]);
    }
  };

  const filteredPragas = pragas
    .filter((praga) =>
      praga.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .slice(0, 17);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pragas Agrícolas</Text>

      <TextInput
        style={styles.searchBar}
        placeholder="Buscar praga..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <ScrollView style={styles.scrollView}>
        <TouchableOpacity
          style={styles.favoritosButton}
          onPress={() =>
            navigation.navigate("Favoritos", { favoritos, pragas })
          }
        >
          <Text style={styles.favoritosButtonText}>Ver Favoritos</Text>
        </TouchableOpacity>

        {filteredPragas.map((praga) => (
          <View key={praga.id} style={styles.pragaContainer}>
            <Image source={praga.image} style={styles.pragaImage} />
            <View style={styles.textContainer}>
              <Text style={styles.pragaName}>{praga.name}</Text>
            </View>
            <TouchableOpacity onPress={() => handleFavoritar(praga)}>
              <FontAwesome
                name={favoritos.includes(praga.id) ? "heart" : "heart-o"}
                size={24}
                color="red"
                style={styles.favoritoIcon}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Praga detalhes", { praga })}
              style={styles.detailsButton}
            >
              <Text style={styles.detailsButtonText}>Ver Detalhes</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: "#333",
  },
  searchBar: {
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 8,
    borderColor: "#DDD",
    borderWidth: 1,
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
  },
  favoritosButton: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },
  favoritosButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  pragaContainer: {
    flexDirection: "row",
    backgroundColor: "#FFF",
    borderRadius: 8,
    marginVertical: 8,
    padding: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  pragaImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  pragaName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  favoritoIcon: {
    marginLeft: 10,
  },
  detailsButton: {
    marginLeft: 10,
    backgroundColor: "#007BFF",
    padding: 8,
    borderRadius: 5,
  },
  detailsButtonText: {
    color: "#FFF",
    fontSize: 14,
  },
});
