import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/types";

type TopPragaProps = {
  ImageProp: any;
  titleProp: string;
  description: string;
  navigation: any;
};

const TopPraga = ({
  ImageProp,
  titleProp,
  description,
  navigation,
}: TopPragaProps) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(titleProp)}>
      <View style={styles.container}>
        <Image source={ImageProp} style={styles.image} />
        <Text style={styles.title}>{titleProp}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FFFA",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "#2E8B57",
  },
  description: {
    marginTop: 5,
    fontSize: 14,
    color: "#6B8E23",
  },
});

export { TopPraga };
