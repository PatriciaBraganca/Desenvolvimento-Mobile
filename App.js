import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/pages/Home';
import Cartoes from './src/pages/Cartoes';
import Categorias from './src/pages/Categorias';
import Conta from './src/pages/Conta';
import Desejos from './src/pages/Desejos';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export default function App() {
  return (
    
    <NavigationContainer>
     
  
  <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'home') {
              iconName = focused
                ? 'home'
                : 'md-home-outline';
            } else if (route.name === 'categorias') {
              iconName = focused ? 'list-sharp' : 'ios-list';
          }else if (route.name === 'desejos') {
            iconName = focused ? 'heart-outline' : 'heart-outline';
        }else if (route.name === 'cartões') {
          iconName = focused ? 'card-outline' : 'card-outline';
      }else if (route.name === 'conta') {
        iconName = focused ? 'person-outline' : 'person-outline';
    }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'black',
          tabBarLabelStyle: {
            paddingBottom: 5,
          },
        })}
      >
    
    <Tab.Screen name="home" options={{ headerShown: false }} component={Home} />
    <Tab.Screen name="categorias" component={Categorias} />
    <Tab.Screen name="desejos" component={Desejos} />
    <Tab.Screen name="cartões" component={Cartoes} />
    <Tab.Screen name="conta" component={Conta} />
  </Tab.Navigator>
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
