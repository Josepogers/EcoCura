import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../types/types";

type TopPragaProps = {
  ImageProp: any;
  titleProp: keyof RootStackParamList;
  description: string;
  onPress?: () => void;
};

const TopPraga = ({ ImageProp, titleProp, description }: TopPragaProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity onPress={() => navigation.navigate(titleProp)}>
      <View style={{ flexDirection: "row", height: 100, width: 100 }}>
        <Image source={ImageProp} style={{ width: 100, height: 100 }} />
        <View>
          <Text>{titleProp}</Text>
          <Text>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export { TopPraga };