import React from 'react'
import { View, Text, FlatList, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function bag() {

    return (
    <View>
        <View style={{ flexDirection: 'row', height: 60, width: '100%', backgroundColor: '#262625', justifyContent: 'center', alignItems: 'center' }}>
             <Feather name="truck" size={20} color="#fff" />
             <Text style={{ color: '#fff', marginLeft: 5  }}>You've Earned Free Shipping!</Text>
        </View>

        <View style={{ height: '95%', width: '95%', borderWidth: 1, borderColor: '#ff4545', alignSelf: 'center', marginTop: 30 }}>
            <Text style={{ color: '#690517', marginLeft: 20, marginTop: 20 }}>Remove 1 unavailable items {"\n"} to continue.</Text>
            <TouchableOpacity
            style={{
              marginTop: 10, backgroundColor: '#690517', marginLeft: 20,
              justifyContent: 'center',alignItems: 'center', width: '30%', height: 35 }}>
            <Text style={{ color: '#fff' }}>Remove All</Text>
          </TouchableOpacity>
            <View style={{ height: '98%', width: '98%', borderWidth: 1, borderColor: '#ff4545', alignSelf: 'center', marginTop: 30 }}>
              <Text style={{ color: '#690517', marginLeft: 10, marginTop: 20 }}>Remove 1 unavailable items {"\n"} to continue.</Text>
              <TouchableOpacity
              style={{
              marginTop: 10, backgroundColor: '#690517', marginLeft: 10,
              justifyContent: 'center',alignItems: 'center', width: '30%', height: 35 }}>
              <Text style={{ color: '#fff' }}>Remove All</Text>
              </TouchableOpacity>
              <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginTop: 15, width: '94%', alignSelf: 'center' }}/>
              <Text style={{ marginTop:10, marginLeft: 10 }}>WESC Lets Get Weird Graphic Tee</Text>
              <View style={{ flexDirection: "row" }}>
                  <View>
                     <Image source={{uri: 'https://itcafe.vn/wp-content/uploads/2021/01/anh-gai-xinh-4.jpg'}}
                         style={{width: 130, height: 180, marginLeft:20, marginTop: 15 }} />
                  </View> 
                  <View>
                     <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15, marginLeft: 25 }}>
                        <Text style={{ fontWeight: '600', marginRight: 10, fontSize: 18, color: '#ff4545' }}>$ 32.00</Text>
                        <Text style={{ fontWeight: '600', fontSize: 16, textDecorationLine: 'line-through' }}>$ 79,98</Text>
                     </View>
                     <Text style={{ marginTop:5, marginLeft:25 }}>SKU#:2000443147031</Text>
                     <Text style={{ marginTop:5, marginLeft:25 }}>Color: WHITE/MULTI</Text>
                     <Text style={{ marginTop:5, marginLeft:25 }}>Size: M</Text>
                     <View style={{ flexDirection: 'row', marginLeft: 25, marginTop: 5 }}>
                        <Ionicons name="warning-outline" size={20} color="red" />
                        <Text style={{ color: '#ff4545', marginLeft: 5 }}> Out of Stock</Text>
                     </View>
                  </View>
                </View>
                <TouchableOpacity
                     style={{ marginTop: 15, backgroundColor: '#fcde19', padding: 15, width: '105%', alignSelf: 'center' }}>
                     <Text style={{ fontWeight: 'bold', fontSize: 14, color: '#000', textAlign: 'center' }}>PROCEED TO CHECKOUT</Text>
                </TouchableOpacity>
            </View>
        </View>  

    </View>    
    
  )
}
