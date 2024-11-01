import React from "react";
import { View, TextInput } from "react-native";

import { styles } from "../styles/SearchBar";

export function SearchBar() {
  return (
    <>
      <TextInput
        placeholder="Pesquisar"
        clearButtonMode="always"
        style={styles.SearchBar}
      />
    </>
  );
}
