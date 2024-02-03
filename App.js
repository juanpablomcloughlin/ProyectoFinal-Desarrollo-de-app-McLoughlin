import { StatusBar } from 'expo-status-bar';
<<<<<<< HEAD
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import carritoImage from './assets/carrito-de-compras.png'
=======
import { StyleSheet, Text, View } from 'react-native';
>>>>>>> 22d3d4bc4d13ee59de3f580b8a3f42ac6d41c190

export default function App() {
  return (
    <View style={styles.container}>
<<<<<<< HEAD
      <View style={{
        flexDirection: 'row', 
        justifyContent: 'center', 
        gap: 8, 
        alignItems: 'center'
        }}>
        <Text>CARRITO</Text>
        <Image style={{width: 50, height: 50}} source={carritoImage}/>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TextInput style={{
          borderColor: 'gray', 
          borderWidth: 1, 
          paddingVertical: 10, 
          paddingHorizontal: 20, 
          borderRadius: 5, 
          width: 300
        }} 
        placeholder='Ingrese un producto'
        />
          <Pressable>
            <Text style={{fontSize: 40}}>+</Text>
          </Pressable>
      </View>
        
        <View style={styles.productList}>
          <Text style= {styles.product}>Maxi Buzos</Text>
          <Text style= {styles.product}>Vestidos</Text>
          <Text style= {styles.product} >Remerones</Text>
        </View>
=======
      <Text>Hola, Coder!</Text>
      <StatusBar style="auto" />
>>>>>>> 22d3d4bc4d13ee59de3f580b8a3f42ac6d41c190
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    backgroundColor: '#ededed', 
    flex: 1,
    paddingHorizontal: 14,
  },
  product: {
    fontSize: 10, 
    fontWeight: "bold", 
    padding: 4
  },
  productList: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  }
})
=======
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
>>>>>>> 22d3d4bc4d13ee59de3f580b8a3f42ac6d41c190
