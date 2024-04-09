import { StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import AuthStack from './AuthStack'
import TabNavigator from './TabNavigator'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { useGetProfileImageQuery, useGetUserLocationQuery } from '../services/shopService'
import { setProfileImage, setUserLocation } from '../features/auth/authSlice'
import { fetchSession } from '../db'

const MainNavigator = () => {

    const {user, localId} = useSelector(state => state.authReducer.value)
    const {data} = useGetProfileImageQuery(localId)
    const { data: location } = useGetUserLocationQuery(localId)
    
    const dispatch = useDispatch();

    useEffect(() => {
      (async () => {
        try{
          const session = await fetchSession()
          if (session?.rows.length) {
            const user = session.rows._array[0];
            dispatch(setUser(user));
          }
        } catch (error) {
        }
      })()
    }, [])
  
    useEffect(()=> {
      if(data) {
        dispatch(setProfileImage(data.image))
      }
      if(location){
        dispatch(setUserLocation(location))
      }
    }, [data, location]) 

    return (
        <NavigationContainer>{user ? <TabNavigator /> : <AuthStack />}</NavigationContainer>
)}

export default MainNavigator

const styles = StyleSheet.create({})