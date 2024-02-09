import React, {useState}from 'react'



import { View, Text, TextInput, TouchableOpacity, StyleSheet}    from 'react-native'


     export default function app (){

      const [ga, setGa] = useState('')

      const [et, setEt] = useState('')



      function calculo(){



        const g = parseFloat(ga)

        const e = parseFloat(et)

        const r = g/e

        



        



        if ( r < 0.70){

          alert(   'Pariedade é  '  +   r.toFixed(3) + '  Compensando  Etanol' );

        }else{

          alert(   'Pariedade é  '  +  r.toFixed(3)  +  ' Compensando  Gasolina');
        }

       

      }





    return(


      <View style={estilo.capa}>
        
                                            <Text style={estilo.marca}> Shell </Text>
                                 <Text style={estilo.sub}>V-Power</Text>
                          <Text style={estilo.titulo}> Pariedade</Text>


      <TextInput
      
      placeholder='Etanol'

      value={ga}
      onChangeText={ (ga)=> setGa(ga)}
      keyboardType='numeric'
      style={estilo.entrada}


      
       

      

     
      
      >


      </TextInput>



      <TextInput
      style={estilo.entrada}
      
      placeholder='Gasolina'

        value={et}
        onChangeText={(et)=> setEt(et)}
        keyboardType='numeric'
      
      
      
      >


      </TextInput>


      <TouchableOpacity onPress={(calculo)} style={estilo.Bo}><Text style={estilo.textbo}>calcular</Text></TouchableOpacity>
      
      
      </View>  

  

    )


  }

  
    const estilo = StyleSheet.create({

         capa:{


          flex:1,
          justifyContent:"center",
          textAlign:"center",
          alignItems:"center",
         backgroundColor:"white",

          
          
          
          
         },

         Bo:{
          backgroundColor:'#f2502c',
          fontSize:20,
          width:340,
          alignItems:" center",
          padding:10,
          borderRadius:10,
          margin:20,
          
        
         },

         textbo:{
          color:"white",
          fontSize:20,
          textAlign:'center',
          

            

         },

         entrada:{
           
          backgroundColor:"#FDE767",
          
          width:380,
          right:50,
          color:"black",
          alignContent:"center",
          borderRadius:10,
          
          
          padding:10,
          margin:10,
          fontSize:20,
          marginLeft:110,


         },


         marca:{


          color:"#e81213",
          fontSize:60,

          
         },
         
         sub:{

          color:"#e81213",
          fontSize:40,
          margin:10,
        


         },

         titulo:{

          color:"black",
          fontSize:30,
          margin:40,
          
          

         }

         

    })