import { Text, StyleSheet } from "react-native";
import {colors} from "../global/colors";

const styles = StyleSheet.create({
    general: {
        fontFamily: 'AbeezeeRegular',
        fontSize: 16,
        color: colors.gris_fondo,
        textAlign: "center"
    },
    italic: {
        fontFamily: "AbeezeeItalic"
    },
    categoryCard: {
        fontSize: 26
    },
    productCard: {
        fontSize: 22
    },
    title: {
        textStyles: "bold",
    }
})

export default function StyledText({children, italic, title, categoryCard, productCard, ...props}) {
    const textStyles = [
        styles.general,
        italic && styles.italic,
        title && styles.title,
        categoryCard && styles.categoryCard,
        productCard && styles.productCard,
    ];
    return <Text style={[textStyles, { ...props }]}>{children}</Text>
}