import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import OrderItem from '../components/OrderItem';
import { useGetOrdersQuery } from '../services/shopService';
import StyledText from '../styledComponents/StyledText';
import StyledView from '../styledComponents/StyledView';

const Orders = () => {
  const { data, isLoading, error } = useGetOrdersQuery();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Cargando órdenes...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <StyledView cardContainer>
        <StyledText general>Error al cargar las órdenes</StyledText>
      </StyledView>
    );
  }

  const ordersArray = data ? Object.entries(data).map(([orderId, orderInfo]) => ({
    id: orderId,
    ...orderInfo,
  })) : [];

  return (
    <StyledView container>
      {ordersArray.length === 0 ? (
        <StyledText general>No hay órdenes disponibles</StyledText>
      ) : (
        <FlatList
          data={ordersArray}
          renderItem={({ item }) => <OrderItem order={item} />}
          keyExtractor={(item) => item.id}
        />
      )}
    </StyledView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Orders;
