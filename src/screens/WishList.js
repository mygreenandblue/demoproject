import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import styles from './loginStyle'

export default function WishList() {
  const UselessTextInput = (props) => {
    return (
      <TextInput
        {...props}
      />
    );
  }
    return (
        <View style={{ padding: 20 }}>
          <Text style={{ textAlign: 'center' }}>Your Wishlist</Text>
          <Text style={{ marginTop:5 }}>Frayed Distressed Denim Shorts</Text>
          <View style={{ flexDirection: "column" }}>
           <View style={{ flexDirection: "row" }}>
            <View style={{ }}>
            <Image source={require('./img/img1.jpg')}
                    style={{ width: 120, height: 180, marginTop: 15 }} />
                    </View> 
                    <View>
                    <Text style={{ marginTop:25, marginLeft:20 }}>SKU#:2000431903</Text>
                    <TouchableOpacity
          style={{
            marginTop: 50,
            backgroundColor: '#d3d3d3',
            width:220,
            height: 40,
            marginLeft: 20
         }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center', padding: 8 }}>Remove from Wishlist</Text>
         </TouchableOpacity>
                    </View>

            </View>
            <UselessTextInput
             numberOfLines={1}
             style={{padding: 0,
             borderBottomColor: 'grey',
             borderBottomWidth: 1,
            }}
            />
            <Text style={{ marginTop: 25 }}>Frayed Distressed Denim Shorts</Text>
            <View style={{ flexDirection: "row" }}>
            <View style={{ }}>
            <Image source={require('./img/img1.jpg')}
                    style={{ width: 120, height: 180, marginTop: 15 }} />
                    </View> 
                    <View>
                    <Text style={{ marginTop:15, marginLeft:20, fontSize:16 }}>$31.99</Text>
                    <Text style={{ marginTop:5, marginLeft:20 }}>SKU#:2000443147031</Text>
                    <Text style={{ marginTop:5, marginLeft:20 }}>Color: CAMEl</Text>
                    <Text style={{ marginTop:5, marginLeft:20 }}>Size: XS</Text>
                    <TouchableOpacity
          style={{
            marginTop: 20,
            backgroundColor: '#d3d3d3',
            width:220,
            height: 40,
            marginLeft: 20
         }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center', padding: 8 }}>Remove from Wishlist</Text>
         </TouchableOpacity>
                    </View>

            </View>
          </View>
        </View>
    )
}
