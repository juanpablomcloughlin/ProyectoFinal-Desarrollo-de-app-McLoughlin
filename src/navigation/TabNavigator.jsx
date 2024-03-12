import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopStack from '../navigation/ShopStack'
import CartStack from "./CartStack";
import { StyleSheet, Text, View, } from "react-native";
import { colors } from "../global/colors";
import { Entypo, Ionicons } from '@expo/vector-icons';
import OrdersStack from "./OrdersStack";
import MyProfileStack from "./MyProfileStack";

const TabNavigator = () => {
    const Tab = createBottomTabNavigator()

    return (
            <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar
            }}>
                <Tab.Screen name="ShopTab" component= {ShopStack} options={{
                    tabBarIcon: ({focused})=>{
                        return (
                            <View style={styles.tabContainer}>
                                <Entypo name="shop" size={24} color={focused ? "black" : "grey"} />
                                <Text style={{color: focused ? "black" : "grey"}}>Shop</Text>
                            </View>
                        )
                    }
                }} />
                <Tab.Screen name="CartTab" component= {CartStack} options={{
                    tabBarIcon: ({focused})=>{
                        return (
                            <View style={styles.tabContainer}>
                                <Entypo name="shopping-cart" size={24} color={focused ? "black" : "grey"} />
                                <Text style={{color: focused ? "black" : "grey"}}>Cart</Text>
                            </View>
                        )
                    }
                }} />
                <Tab.Screen name="OrdersTab" component= {OrdersStack} options={{
                    tabBarIcon: ({focused})=>{
                        return (
                            <View style={styles.tabContainer}>
                                <Entypo name="list" size={24} color="black" />
                                <Text style={{color: focused ? "black" : "grey"}}>Orders</Text>
                            </View>
                        )
                    }
                }} />
                <Tab.Screen name="MyProfileStack" component= {MyProfileStack} options={{
                    tabBarIcon: ({focused})=>{
                        return (
                            <View style={styles.tabContainer}>
                                <Ionicons name="person-circle-outline" size={24} color="black" />
                                <Text style={{color: focused ? "black" : "grey"}}>My Profile</Text>
                            </View>
                        )
                    }
                }} />
            </Tab.Navigator>
    )
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: colors.naranja_100,
        height: 70,
      },
      tabContainer: {
        justifyContent: "center",
        alignItems: "center",
      },
})