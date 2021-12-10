import React from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from './styles';
export default function Comprar({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="COMPRAR" 
      onPress={()=> navigation.navigate("Carrinho")} 
      />
     
    </View>
  );
}

