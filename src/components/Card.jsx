import { StyleSheet, View } from "react-native";
import React from "react";
import {colors} from "../global/colors";

const Card = ({children, style}) => {
  return (
    <View style={{...styles.container, ...style}}>
      {children}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    shadowColor: colors.gris_fondo,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 20,
  },
});