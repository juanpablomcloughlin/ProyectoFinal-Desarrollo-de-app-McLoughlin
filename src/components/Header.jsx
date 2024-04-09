import { Text, View, StyleSheet, Pressable } from "react-native";
import { colors } from "../global/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { deleteSession } from "../db";

function Header({ title }) {
  const { localId, user } = useSelector((state) => state.authReducer.value);
  const dispatch = useDispatch();

  const onLogout = async () => {
    dispatch(logout());
    const deletedSession = await deleteSession({ localId });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {user && (
        <Pressable style={styles.logoutIcon} onPress={onLogout}>
          <MaterialIcons name="logout" size={24} color="white" />
        </Pressable>
      )}
    </View>
  );
}
export default Header;

const styles = StyleSheet.create({
  container: {
    height: 90,
    width: "100%",
    backgroundColor: colors.gris_fondo,
    justifyContent: "center",
    alignItems: "center",
  },
    text:{
      fontSize: 30,
      color: colors.naranja_100,
      textAlign: 'center',
      fontWeight: 'bold',
    },
    logoutIcon: {
      position: "absolute",
      right: 20,
    },
})