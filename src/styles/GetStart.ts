import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    height: "100%",
  },
  main: {
    height: "100%",
  },
  footer: {
    width: 400,
    height: 200,
    marginLeft: "1.5%",
    borderTopEndRadius: 100,
    borderTopStartRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    bottom: 0,
    position: "absolute",
  },
  buttonGetStart: {
    justifyContent: "center",
    alignItems: "center",
    width: 250,
    height: 100,
    backgroundColor: "#00FF00",
    borderRadius: 50,
  },
});

export { styles };
