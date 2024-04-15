import React from 'react';
import { StyleSheet } from 'react-native';
import StyledView from '../styledComponents/StyledView';
import StyledText from '../styledComponents/StyledText';

const CartItem = ({ title, price, quantity }) => {
  return (
    <StyledView cardContainer>
      <StyledText>{title}</StyledText>
      <StyledText>Price: ${price}</StyledText>
      <StyledText>Quantity: {quantity}</StyledText>
    </StyledView>
  );
};


export default CartItem;

const styles = StyleSheet.create({ 
});
