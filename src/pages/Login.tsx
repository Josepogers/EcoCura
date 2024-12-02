import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ImageBackground,
} from "react-native";

const LoginScreen = ({ navigation }: any) => {
  const [nameUser, setnameUser] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (nameUser === "") {
      Alert.alert("Erro", "O nome de usuário não pode estar vazio!");
    } else if (password === "") {
      Alert.alert("Erro", "senha não pode estar vazia!");
    } else {
      Alert.alert("Sucesso", `Bem-vindo, ${nameUser}!`);
      navigation.navigate("GetStart");
    }
  };
  const handleConvidado = () => {
    navigation.navigate("GetStart");
  };

  return (
    <ImageBackground
      source={{ uri: "https://www.todaysbestphotos.com/forest_background.jpg" }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Bem-vindo!</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome de usuário"
          placeholderTextColor="#88b04b"
          value={nameUser}
          onChangeText={setnameUser}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#88b04b"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("CriarConta")}
        >
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleConvidado}>
          <Text style={styles.buttonText}>Continuar sem login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    width: "85%",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#88b04b",
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    color: "#333",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export { LoginScreen };
