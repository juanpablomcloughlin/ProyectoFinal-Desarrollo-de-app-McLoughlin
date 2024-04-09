import React, { useState, useEffect } from "react";
import { View, StyleSheet, Image, Pressable, Linking } from "react-native";
import Categories from "../components/Categories";  
import { useGetProductsByCategoryQuery } from "../services/shopService";

function Home({ navigation }) {
  const [products, setProducts] = useState([]);
  const { data: productsData } = useGetProductsByCategoryQuery("all");

  useEffect(() => {
    if (productsData) {
      const productsArray = Object.values(productsData);
      setProducts(productsArray);
    }
  }, [productsData]);

  const handleImagePress = () => {
    Linking.openURL("https://www.fulanosunderwear.com")
  }
  
  return (
    <View style={styles.container}>
      <Pressable onPress={handleImagePress}>
        <Image
          style={styles.image}
          borderRadius={20}
          source={require("../../assets/logo-fulanos.png")}
        />
      </Pressable>
      <Categories navigation={navigation} />
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: 150,
    height: 150,
    margin: 10,
  },
});