import { Pressable, StyleSheet, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import InputForm from "../components/InputForm";
import { useSignUpMutation } from "../services/authService";
import SubmitButton from "../components/SubmitButton";
import { useDispatch } from "react-redux";
import { setUser } from "../features/auth/authSlice";
import { signupSchema } from "../validations/signupSchema";
import StyledText from "../styledComponents/StyledText";

const Signup = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [errorMail, setErrorMail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
  const [triggerSignup, result] = useSignUpMutation();

  const dispatch = useDispatch();

  const onSubmit = () => {
    
    try {
      setErrorMail("");
      setErrorPassword("");
      setErrorConfirmPassword("");

      signupSchema.validateSync({ password, confirmPassword, email });
      triggerSignup({ email, password });
    } catch (err) {
      switch (err.path) {
        case "email":
          setErrorMail(err.message);
          break;
        case "password":
          setErrorPassword(err.message);
          break;
        case "confirmPassword":
          setErrorConfirmPassword(err.message);
          break;
        default:
          break;
      }
    }
  };

  useEffect(() => {
    if (result.data) {
      dispatch(setUser(result.data));
    }
  }, [result]);

  return (
    <View style={styles.container}>
      <Image style={styles.image} borderRadius={20} source={require("../../assets/logo-fulanos.png")} />
      <InputForm label={"Email"} error={errorMail} onChange={setEmail} />
      <InputForm
        label={"Password"}
        error={errorPassword}
        onChange={setPassword}
        isSecure={true}
      />
      <InputForm
        label={"Confirm password"}
        error={errorConfirmPassword}
        onChange={setConfirmPassword}
        isSecure={true}
      />
      <SubmitButton title={"Register"} onPress={onSubmit} />
      <Pressable onPress={() => navigation.navigate("Login")}>
        <StyledText>Ya tenés cuenta? Ir al login</StyledText>
      </Pressable>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 20,
    marginTop: 50,
  },
  image: {
    width: 100, 
    height: 100, 
    resizeMode: "contain", 
  },
});