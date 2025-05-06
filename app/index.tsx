import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}> Hello World</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:"center",
    alignContent:"center",
    backgroundColor:"blue",
  },
  text: {
    color:"white",
    fontSize:20,
    textAlign:"center",
  },
});