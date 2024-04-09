import { Image, Pressable, StyleSheet, useWindowDimensions } from "react-native";
import Card from "./Card";
import { useEffect, useState } from "react";
import {colors} from "../global/colors";
import StyledText from "../styledComponents/StyledText";

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
      <Pressable style={styles.cardContainer} onPress={() => navigation.navigate("ItemDetail", {id: product.id})}>
        <Card
          style={{
            marginVertical: 20,
            flexDirection: "row",
            alignItems: "center",
            gap: 10
          }}
        >
          <StyledText productCard width="60%">{product.title}</StyledText>
          <Image style={styles.image} source={{uri: product.images}} />
        </Card>
      </Pressable>
    </>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
   cardContainer: {
      marginHorizontal: 30,
      marginTop: 20,
      marginVertical: 10,
      padding: 20,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.naranja_100,
      borderRadius: 20,
    },
    text:{
        fontSize: 25,
        textAlign: 'center',
        width: '60%'
    },
    image:{
        width: 100,
        height: 100,
        borderRadius: 20,
    }
})