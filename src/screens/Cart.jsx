import { useEffect, useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import CartITem from '../components/CartITem';
import allCartItems from "../data/cart.json";
import { usePostOrderMutation } from '../services/shopService';
import { useSelector } from 'react-redux';

const Cart = () => {

    const cartItems  = useSelector((state) => state.cartReducer.value.items);
    const total = useSelector((state) => state.cartReducer.value.total);
    const [triggerPost, result] = usePostOrderMutation()
    const confirmCart = ()=>{
      triggerPost({total, cartItems, user: "loggedUser"})
    }


    return (
      <View>
        {cartItems.length > 0 ? (
          <>
            <FlatList
              data={cartItems}
              renderItem={({ item }) => <CartITem item={item} />}
              keyExtractor={(cartItem) => cartItem.id}
            />
            <Text>Total: ${total}</Text>
            <Pressable onPress={confirmCart}>
              <Text>
                Confirm
              </Text>
            </Pressable>
          </>
        ) : (
          <Text>No hay productos agregados</Text>
        )}
      </View>
    );
  };
  

export default Cart

const styles = StyleSheet.create({})