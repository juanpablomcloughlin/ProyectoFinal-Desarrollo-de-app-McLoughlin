import { StyleSheet, View } from "react-native";
import {colors} from "../global/colors";

const styles = StyleSheet.create({
itemCart:{
    margin:10,
    flex:1,
    height:100,
    backgroundColor: colors.header,
    padding: 10,
    borderRadius:10,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
    },
cardContainer: {
        marginHorizontal: 30,
        marginTop: 20,
        marginVertical: 10,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      }
})

export default function StyledView({itemCart, cardContainer, children, ...props}){ 
const viewStyles = [
    styles.general,
    itemCart && styles.itemCart,
    cardContainer && styles.cardContainer,
];
return <View style={[viewStyles, { ...props }]}>{children}</View>
}