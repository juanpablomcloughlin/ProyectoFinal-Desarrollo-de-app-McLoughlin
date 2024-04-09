import { Pressable, StyleSheet } from "react-native";
import Card from "./Card";
import {colors} from "../global/colors";
import { useDispatch } from "react-redux";
import { setCategorySelected } from "../features/shop/shopSlice";
import StyledText from "../styledComponents/StyledText";

const CategoryItem = ({ category, navigation }) => {
  const dispatch = useDispatch()
  
  return (
    <Pressable onPress={() => {
      dispatch(setCategorySelected(category))
      navigation.navigate("ItemListCategories", {category}) }}>
      <Card style={ styles.cardContainer}>
        <StyledText categoryCard>{category}</StyledText>
      </Card> 
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 30,
    marginTop: 20,
    marginVertical: 10,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.naranja_100,
    borderRadius: 10,
  }
})