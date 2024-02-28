import { FlatList, Text, View } from "react-native";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";

function Categories( {navigation} ) {
  const categories = useSelector(state=> state.shopReducer.value.categories)

  return (
    <View>
      <FlatList
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem navigation={navigation} category={item} />
        )}
        keyExtractor={(category) => category}
      />
    </View>
  );
}

export default Categories;