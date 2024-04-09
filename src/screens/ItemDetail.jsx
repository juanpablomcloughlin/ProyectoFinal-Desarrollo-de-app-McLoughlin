import { Image, StyleSheet, Text, View, Pressable, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import allProducts from '../data/products.json'
import { colors } from '../global/colors';
import { useDispatch } from 'react-redux';
import { addItem } from "../features/shop/cartSlice";
import StyledText from '../styledComponents/StyledText';

const ItemDetail = ({navigation, route}) => {
  const [product, setProduct] = useState(null);
  const { id } = route.params;
  const dispatch = useDispatch();

  const onAddCart = () => {
    if (product) {
      dispatch(addItem({ ...product, quantity: 1 }));
      ToastAndroid.show(`${product.title} agregado al carrito`, ToastAndroid.SHORT);
    }
  };

  useEffect(() => {
    const productFinded = allProducts.find((product) => product.id === id);
    setProduct(productFinded);
  }, [id]);

  return (
    <View style={styles.main}>
      {product ? (
        <View style={styles.container}>
          <Image
            source={{ uri: product.images }}
            style={styles.image}
            resizeMode="cover"
          />
          <View style={styles.textContainer}>
            <StyledText general title productCard>{product.title}</StyledText>
            <StyledText general title productCard>${product.price}</StyledText>
            <Pressable style={styles.buy} onPress={onAddCart}>
              <Text style={styles.buyText}>Add to cart</Text>
            </Pressable>
          </View>
        </View>
      ) : (
        <View>
          <StyledText general>Cargando...</StyledText>
        </View>
      )}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: "100%",
  },
  container: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  image: {
    width: "90%",
    height: 400,
    marginVertical: 15,
    borderRadius: 15,
    padding: 10
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
  },
  buy: {
    padding: 10,
    marginTop: 20,
    borderRadius: 6,
    backgroundColor: colors.naranja_100,
  },
  buyText: {
    fontFamily: "AbeezeeRegular",
    fontSize: 18,
    color: colors.gris_fondo,
  },
});
