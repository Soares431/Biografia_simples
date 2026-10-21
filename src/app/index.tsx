import { Text, View, Image, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("../../src/foto.jpg")} style={styles.foto} />
      <Text>Lucas da Sailva Soares</Text>
      <Text style={styles.paragrafo}>
        Sou estudante de TI da UNICAP e estagiario de TI na MC minhaconta, sou
        um cara calmo e simples
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  foto: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  paragrafo:{
     textAlign: "center",
  }
});
