import React from "react";
import { View, TextInput } from "react-native";

import { styles } from "../styles/Home";
import { ButtonBack } from "../components/ButtonBack";
import { TopPraga } from "../components/TopPragas";
import { SearchBar } from "../components/SearchBar";

const PragaImage = require("../../assets/praga.jpg");

export function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <SearchBar />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
            marginBottom: 20,
          }}
        >
          <TopPraga
            ImageProp={PragaImage}
            titleProp="GetStart"
            description="Praga A"
          />
          <TopPraga
            ImageProp={require("../../assets/background.webp")}
            titleProp="GetStart"
            description="Praga C"
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <TopPraga
            ImageProp={PragaImage}
            titleProp="GetStart"
            description="Praga D"
          />
          <TopPraga
            ImageProp={PragaImage}
            titleProp="GetStart"
            description="Praga D"
          />
        </View>
      </View>
      <ButtonBack navigation={navigation} />
    </View>
  );
}
