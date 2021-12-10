import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  buscar:{
    position:"absolute",
    top: 20,
    left: 15,

  },
  sacola:{
    position:"absolute",
    top: 20,
    left: 370,
  },

  input: {
    height: 40,
    width: "85%",
    borderWidth: 1,
    marginTop:10,
    marginBottom: 350,
    padding: 20,
    marginRight: 60,
},

 carrossel: {
  flex: 1,
  width:'100%', 
  height: 400,
   
 },
 circulo: {
  width: 70, 
  height: 70,
  marginLeft: 20,
  marginRight: 20,
  borderRadius: 70/2,     
 },
 fontecircle:{
   fontSize: 11,
   marginLeft: 20,
   marginRight: 30, 
   marginTop:-70,
   maxWidth: 100, 
   },
   anuncio:{
     marginTop: 480,
     textAlign: 'center',
     alignItems: 'center',
     justifyContent: 'center',
     position: 'absolute',
   },
  
});
