import { useState } from "react";
import Home from "./src/screens/Home";
import ItemlListCategory from "./src/screens/ItemlListCategory";
import { useFonts } from "expo-font";
import { fonts } from "./src/global/fonts";
import { StatusBar, View, StyleSheet } from "react-native";
import { colors } from "./src/global/colors";


export default function App () {

  const [categorySelected, setCategorySelected] = useState('')
  const [fontsLoaded] = useFonts(fonts)

  if(!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {categorySelected ? (
      <ItemlListCategory category={categorySelected} />
      ) : (
        <Home setCategorySelected={setCategorySelected} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: colors.naranja_100,
    alignItems: "center"
  },
});