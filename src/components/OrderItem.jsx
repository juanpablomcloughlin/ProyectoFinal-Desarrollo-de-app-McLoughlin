import React from 'react';
import { StyleSheet } from 'react-native';
import StyledText from '../styledComponents/StyledText';
import StyledView from '../styledComponents/StyledView';

const OrderItem = ({ order }) => {
  const { id, total } = order; 

  return (
    <StyledView cardContainer>
      <StyledText general>Order code: {id}</StyledText>
      <StyledText general>Total: ${total}</StyledText>
    </StyledView>
  );
};

const styles = StyleSheet.create({
});

export default OrderItem;