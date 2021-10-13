import React from 'react'
import { View, Text, FlatList, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Rating, AirbnbRating } from 'react-native-ratings';

const { height, width } = Dimensions.get('window');

export default function Product() {
  const UselessTextInput = (props) => {
    return (
      <TextInput
        {...props}
      />
    );
  }
  
    return (
    <View>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Image source={{uri: 'https://itcafe.vn/wp-content/uploads/2021/01/anh-gai-xinh-4.jpg'}}
        style={{width: 400, height: 350, }} />
      </View>

        <View>
        <Text style={{ fontWeight: '500', fontSize: 16, color: 'black', marginLeft: 20 }}>White Croptop</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5, marginLeft: 20 }}>
          <Text style={{ fontWeight: '600', marginRight: 10, fontSize: 18, color: '#ff4545' }}>$ 39.99</Text>
          <Text style={{ fontWeight: '600', fontSize: 16, textDecorationLine: 'line-through' }}>$ 49,99</Text>
          <Rating
          onFinishRating={() => { }}
          imageSize={20}
          style={{ paddingVertical: 10, marginLeft: 120 }}/>
          </View>
          <Text style={{ marginLeft: 20, fontSize: 12, color: '#ff4545', lineHeight: 18 }}>Up to 60% Off Almost Everything!</Text>
        </View>
        <UselessTextInput numberOfLines={1}style={{padding: 0, borderBottomColor: 'grey', borderBottomWidth: 1 }}/>

        <View style={{}}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
          style={{
            marginTop: 15,
            backgroundColor: '#ff4545',
            padding: 15,
            width: "90%",
         }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', color: 'white' }}>ADDED TO BAG</Text>
         </TouchableOpacity>
          </View>
          <View style={{ padding: 10, marginLeft: 10, flexDirection: 'row' }}>
        <View style={{
          height: 25, width: 25,
          backgroundColor: 'white', borderRadius: 25 / 2,
          borderWidth: 1, borderColor: '#4094e3',
          justifyContent: 'center', alignItems: 'center'
        }}>
          <View style={{ height: 20, width: 20, backgroundColor: '#4094e3', borderRadius: 10, }}></View>
        </View>
        <View style={{
          height: 25, width: 25, marginLeft: 5,
          backgroundColor: 'white', borderRadius: 25 / 2,
          justifyContent: 'center', alignItems: 'center'
        }}>
          <View style={{ height: 20, width: 20, backgroundColor: '#4094e3', borderRadius: 10, }}></View>
        </View>
        <View style={{
          height: 25, width: 25, marginLeft: 5,
          backgroundColor: 'white', borderRadius: 25 / 2,
          justifyContent: 'center', alignItems: 'center'
        }}>
          <View style={{ height: 20, width: 20, backgroundColor: '#4094e3', borderRadius: 10, }}></View>
        </View>
        </View>
        </View>
        
    </View>
  )
}