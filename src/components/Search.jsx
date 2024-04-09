import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View, Text } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  const handleSearch = () => {
    if (!input.trim()) {
      setError("Ingrese un término de búsqueda");
    } else {
      setError("");
      onSearch(input.trim().toLowerCase());  
    }
  };

  const removeInput = () => {
    setInput("");
    setError("")
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={setInput}
          placeholder="Buscar producto..."
        />
        <Pressable onPress={handleSearch}>
          <AntDesign name="search1" size={25} color="black" />
        </Pressable>
        <Pressable onPress={removeInput}>
          <Entypo name="circle-with-cross" size={25} color="black" />
        </Pressable>
      </View>
      {error ? <Text style={styles.errorText}>{error}</Text> :null}
    </View>
  );
};

export default Search;


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    marginTop: 10,
    paddingHorizontal: 5,
    borderWidth: 1,
    borderRadius: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  iconButton: {
    padding: 10,
  },
});