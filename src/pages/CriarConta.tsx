import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export function CriarConta({ navigation }: any) {
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    if (!name || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
    } else {
      Alert.alert("Sucesso", `Conta criada para ${name}!`);
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome de usuário"
        placeholderTextColor="#88b04b"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#88b04b"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={{ color: "black", fontSize: 18, fontWeight: "bold" }}>
          Voltar pro Login
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E9F5E6",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2F4F2F",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 50,
    borderColor: "#88b04b",
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
