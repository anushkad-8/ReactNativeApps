import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.HeadingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
            <Text>RED</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
            <Text>BLUE</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
            <Text>GREEN</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    HeadingText:{
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:10

    },
    container:{
        flex:1,
        flexDirection:'row',
        padding:8
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:4,
        margin:8,
        color:'#FFFFFF'
    },
    cardOne:{
            backgroundColor: '#EA425C',
            
    },
    cardTwo:{
        backgroundColor: '#2475B0',
        
    },
    cardThree:{
        backgroundColor: '#A3CB37',
       
    }
})