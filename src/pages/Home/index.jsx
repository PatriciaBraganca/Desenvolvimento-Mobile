import React from 'react';
import { Text, View, Image, TextInput } from 'react-native';
import { styles } from './styles';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Home() {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}  placeholder="     busque no Riachuelo"/>
      <Text style={styles.buscar}><Ionicons name="search" size={24} color="black" /></Text>
      <Text style={styles.sacola}><MaterialCommunityIcons name="shopping-outline" size={24} color="black" /></Text>
      
      
      <View style={{flex:1, marginTop: -340, flexWrap: 'no-wrap', alignContent: 'space-around', justifyContent: "space-around", flexDirection: 'row'}}>

      <Image style={styles.circulo} source={require('../../img/img2.png') }  /> 
      
      <Image style={styles.circulo} source={require('../../img/img31.jpg') }  />
      
      <Image style={styles.circulo} source={require('../../img/img41.jpg') }  />
      
      <Image style={styles.circulo} source={require('../../img/img51.jpg') }  />
      </View>

      <View style={{flex:1, marginTop: -340, flexWrap: 'no-wrap', alignContent: 'space-between', justifyContent: "center", flexDirection: 'row'}}>
      <Text style={ styles.fontecircle}>WHATSAPP </Text>
      <Text style={ styles.fontecircle}>FEMININO </Text>
      <Text style={ styles.fontecircle}>MASCULINO</Text>
      <Text style={ styles.fontecircle}>    CASA</Text>
      </View>

     <View style={ styles.anuncio}>
      <Image style={styles.carrossel} source={require('../../img/img1.jpeg') } resizeMode="contain" />

      <Text>NOVIDADES</Text>

      <Image style={styles.carrossel} source={require('../../img/img61.jpeg') } resizeMode="contain" />
      <Text>Macacão Feminino Alça Fina Amarração Bege Escuro AK by...</Text>
      <Text>R$ 179,90</Text>
      </View>      
      
    </View>
  );
}
