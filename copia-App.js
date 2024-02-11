import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { StyleSheet, Text, View, Image, TextInput, Pressable, FlatList, Modal } from 'react-native';
import carritoImage from './assets/carrito-de-compras.png';
import logoFulanos from './assets/logo-fulanos.png'

/* const DATA = [
  {
    name: "Maxi Buzos Adultos",
    id: 101,
  },
  {
    name: "Maxi Buzos Kids",
    id: 102,
  },
  {
    name: "Remerones Adultos",
    id: 201,
  },
  {
    name: "Remerones Kids",
    id: 202,
  },
  {
    name: "Vestidos Adultos",
    id: 301,
  },
  {
    name: "Vestidos Kids",
    id: 302,
  },
  
]
 */
export default function App() {
  
  const [inputValue, setInputValue] = useState('')
  const [cartItems, setCartItems] = useState([])
  const [modalVisible, setModalVisible] = useState(false)
  const [itemSelected, setItemSelected] = useState(null)

  const handleInputChange = (value) => setInputValue(value)
  const handleModal = (id) => {
    setModalVisible(true);
    setItemSelected(id);
  }
  const addItem = () => {
    const newItem = {
      name: inputValue,
      id: new Date().getTime()
    }
    setCartItems([...cartItems, newItem])
  }

  const removeItem = () => {
    const filteredArray = cartItems.filter((item)=> item.id !== itemSelected)
    setCartItems(filteredArray);
    setModalVisible(false)
  }


  const RemoveModal = () => {
    return (
    <Modal animationType="slide" transparent visible={modalVisible}>
      <View style={styles.modalContainer}>
        <Text>¿Querés eliminar este producto?</Text>
        <Pressable onPress={()=> setModalVisible(false)}>
          <Text>No</Text>
          </Pressable>
        <Pressable onPress={removeItem}>
          <Text>Sí</Text>
        </Pressable>
      </View>
    </Modal>
    )
  }

  return (
    <View style={styles.container}>
      <RemoveModal />
      <View style={{
        flexDirection: 'row', 
        justifyContent: 'center', 
        gap: 8, 
        alignItems: 'center',
        }}>
        <Image style={{width: 50, height: 50}} source={logoFulanos}/>
        <Text>CART</Text>
        <Image style={{width: 50, height: 50}} source={carritoImage}/>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'center'}}>
        <TextInput 
        onChangeText={handleInputChange} 
        value={inputValue} 
        style={styles.input} 
        placeholder='Ingrese un producto'
        />
          <Pressable onPress={addItem}>
            <Text style={{fontSize: 40}}>+</Text>
          </Pressable>
      </View>
        
        <View style={styles.productList}>
          <FlatList 
          data={cartItems}
          renderItem={({item})=> (
            <View style={{width: 400, flexDirection: "row", justifyContent: "center"}}>
              <Text style={styles.product}>{item.name}</Text>
               <Pressable onPress={()=> handleModal(item.id)}>
                  <Text style={{fontSize: 20}}>🚮</Text>
               </Pressable>
            </View>
          )}
          keyExtractor={(item) => item.id}
          />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ededed', 
    flex: 1,
    paddingHorizontal: 14,
    paddingTop: Constants.statusBarHeight
  },
  modalContainer:{
    height: 200,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    }, 
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    alignItems: "center",
  },
  product: {
    color: "#3f3f41",
    fontSize: 20, 
    fontWeight: "bold", 
    padding: 4
  },
  productList: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    gap: 10,
  },
  input:{
    borderColor: 'gray', 
    borderWidth: 1, 
    paddingVertical: 10, 
    paddingHorizontal: 20, 
    borderRadius: 5, 
    width: "90%",
  },
  inputContainer: 
    {flexDirection: "row"},
})