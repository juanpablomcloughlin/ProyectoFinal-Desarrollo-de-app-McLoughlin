import { Pressable, StyleSheet, Text, View, Image } from "react-native";
import { useSelector } from "react-redux";
import { Entypo } from '@expo/vector-icons';
import { colors} from '../global/colors'

const MyProfile = ({ navigation }) => {
  const { profileImage, imageCamera } = useSelector((state) => state.authReducer.value);

  return (
    <View style={styles.container}>
      {(profileImage || imageCamera) ? (
        <Image
          source={{ uri: profileImage || imageCamera }}
          resizeMode="cover"
          style={styles.image}
        />
      ) : (
        <Entypo name="user" size={100} color="black" /> 
      )}
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Image Selector")}
      >
        <Text style={styles.text}>Add profile image</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Location Selector")}
      >
        <Text style={styles.text}>My address</Text>
      </Pressable>
    </View>
  );
};

export default MyProfile;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 15,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  button: {
    width: "80%",
    elevation: 10,
    backgroundColor: colors.gris_fondo,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  text: {
    fontFamily: "AbeezeeRegular",
    fontSize: 18,
    color: "white",
  },
});