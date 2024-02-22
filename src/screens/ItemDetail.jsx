import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import allProducts from '../data/products.json'

const ItemDetail = ({navigation, route}) => {
  const [product, setProduct] = useState(null);

  const {id} = route.params

  useEffect(() => {
    const productFinded = allProducts.find((product) => product.id === id);
    setProduct(productFinded)
  }, [id]);

  return product ? (
    <View>
      <Text>{product.title}</Text>
    </View>
  ) : (<Text>Cargando...</Text>
  )
}

export default ItemDetail

const styles = StyleSheet.create({})