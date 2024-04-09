import React from 'react';
import { View, FlatList, StyleSheet, Pressable, ToastAndroid } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/CartItem';
import { clearCart } from '../features/shop/cartSlice';
import { colors } from '../global/colors';
import { usePostOrderMutation } from "../services/shopService";
import StyledText from '../styledComponents/StyledText';

const Cart = () => {
  const cartState = useSelector(state => state.cartReducer);
  const cartItems = cartState.items;
  const total = cartState.total;
  const [triggerPost] = usePostOrderMutation()
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleConfirmCart = () => {
    triggerPost({ total, cartItems, user: "loggedUser"})
    ToastAndroid.show('Orden confirmada con éxito', ToastAndroid.SHORT);
    dispatch(clearCart());
    };


    return (
      <View style={styles.container}>
        {cartItems.length > 0 ? (
          <>
            <FlatList
              data={cartItems}
              renderItem={({ item }) => (
                <CartItem
                  title={item.title} 
                  price={item.price}
                  quantity={item.quantity}
                />
              )}
              keyExtractor={item => item.title.toString()}
            />
            <StyledText categoryCard>Total: ${total}</StyledText>
            <View style={styles.buttonContainer}>
              <Pressable style={styles.button} onPress={handleClearCart}>
                <StyledText title productCard>Delete cart</StyledText>
              </Pressable>
              <Pressable style={styles.button} onPress={handleConfirmCart}>
                <StyledText title productCard>Confirm order</StyledText>
              </Pressable>
            </View>
          </>
        ) : (
          <StyledText productCard>There are no products in the cart</StyledText>
        )}
      </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  button: {
    backgroundColor: colors.naranja_100,
    padding: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
});

export default Cart;
