import { Image, Pressable, StyleSheet, Text, useWindowDimensions } from "react-native";
import Card from "./Card";
import { useEffect, useState } from "react";

const ProductItem = ({product, navigation}) => {
  const [isPortrait, setIsPortrait] = useState(true)
  const [isLandscape,setIsLandscape] = useState(false)

  const {width, height} = useWindowDimensions()

  useEffect(()=> {
    if(height > width) {
      setIsPortrait(true)
      setIsLandscape(false)
    } else {
      setIsPortrait(false)
      setIsLandscape(true)
    }
  }, [height, width])  

  return (
    <>
      <Pressable style={styles.card} onPress={() => navigation.navigate("ItemDetail", {id: product.id})}>
        <Card
          style={{
            marginVertical: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={width < 400 ? styles.textMin : styles.text}>{product.title}</Text>
          <Image style={styles.image} source={{uri: product.images}} />
        </Card>
      </Pressable>
    </>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
    card: {
      height: 100,
      padding: 20,
      margin: 15,
      borderWidth: 2,
      borderRadius: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 4
    },
    text:{
        fontSize: 20,
        textAlign: 'center',
        width: '70%'
    },
    textMin:{
      fontSize: 14,
      width: "70%"
    },
    image:{
        width: 70,
        height: 70
    }
})