import { StyleSheet, View, Pressable, ActivityIndicator, Image, Linking } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import SubmitButton from "../components/SubmitButton";
import { useLoginMutation } from "../services/authService";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { loginSchema } from "../validations/loginSchema";
import { insertSession } from "../db";
import StyledText from "../styledComponents/StyledText";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [triggerSignin, result] = useLoginMutation();

  const dispatch = useDispatch();

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result.data));
      insertSession({
        email: result.data.email,
        localId: result.data.localId,
        token: result.data.idToken
      })
      .then((result) => {
      })
      .catch((error) => {
      });
    }
  }, [result]);

  const handleImagePress = () => {
    Linking.openURL("https://www.fulanosunderwear.com")
  }

  const onSubmit = () => {
    try {
      loginSchema.validateSync({ password, email });
      triggerSignin({ email, password });
    } catch (err) {
      switch (err.path) {
        case "email":
          setErrorMail(err.message);
          break;
        case "password":
          setErrorPassword(err.message);
          break;
        default:
          break;
      }
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={handleImagePress}>
        <Image style={styles.image} borderRadius={20} source={require("../../assets/logo-fulanos.png")} />
      </Pressable>
      <InputForm label={"Email"} fontsize={20} error={errorMail} onChange={setEmail} />
      <InputForm
        label={"Password"}
        error={errorPassword}
        onChange={setPassword}
        isSecure={true}
      />
      {result.isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <SubmitButton title={"Login"} onPress={onSubmit} />
      )}
      <Pressable onPress={() => navigation.navigate("Signup")}>
        <StyledText>No tenés usuario? Ir al registro</StyledText>
      </Pressable>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 20,
    marginTop: 50,
  },
  image: {
    width: 150, 
    height: 150, 
    resizeMode: "contain", 
  },
});
