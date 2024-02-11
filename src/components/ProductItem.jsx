import { StyleSheet, Text } from "react-native";
import Card from "./Card";

const ProductItem = ({product}) => {
  return (
    <>
      <Card style={{marginVertical: 20}}>
        <Text style={styles.text}>{product.title}</Text>
        {/* Debo chequear en el Power Point para ponerle onda */}
      </Card>
    </>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
    text:{
        fontSize: 25,
        textAlign: 'center'
    }
})