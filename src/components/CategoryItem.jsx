import { Pressable, StyleSheet, Text } from "react-native";
import Card from "./Card";

const CategoryItem = ({ category, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("ItemListCategories", {category}) }>
      <Card style={{ marginVertical: 20 }}>
        <Text style={styles.text}>{category}</Text>
      </Card> 
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
    text:{
        fontFamily: 'AbeezeeRegular',
        fontSize: 25,
        textAlign: 'center'
    }
})