import { Text, View, StyleSheet } from "react-native";
import { colors } from "../global/colors";

function Header({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container:{
      backgroundColor: colors.gris_fondo,
      width: "100%",
      paddingVertical: 8
    },
    text:{
      fontSize: 30,
      color: colors.naranja_100,
      textAlign: 'center',
      fontWeight: 'bold',
    },
})