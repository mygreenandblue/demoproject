import React from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import styles from './loginStyle'


export default function Login() {
  
    
  
    const UselessTextInput = (props) => {
      return (
        <TextInput
          {...props}
        />
      );
    }

    return (
        <View style={{padding: 20}}> 
          
          <Text style={{ textAlign: 'center' }}>Profile</Text>
          <UselessTextInput
       
        numberOfLines={1}
        style={{padding: 0,
          borderBottomColor: 'grey',
          borderBottomWidth: 1,}}
      />
          <Text style={{ marginTop: 15, fontWeight: 'bold', fontSize: 16, marginLeft: 15, marginTop:25 }}>Order Tracking</Text>
          <UselessTextInput
        multiline
        numberOfLines={1}
        style={{padding: 0,
          borderBottomColor: 'grey',
          borderBottomWidth: 1,
          }}
      />
          <Text style={{ marginTop: 15, fontWeight: 'bold', fontSize: 16, marginLeft: 15, marginTop:25 }}>Manage Password</Text>
          <UselessTextInput
        multiline
        numberOfLines={1}
        style={{padding: 0,
          borderBottomColor: 'grey',
          borderBottomWidth: 1,}}
      />
          <Text style={{ marginTop: 15, fontWeight: 'bold', fontSize: 16, marginLeft: 15, marginTop:25 }}>Address Book</Text>
          <UselessTextInput
        multiline
        numberOfLines={1}
        style={{padding: 0,
          borderBottomColor: 'grey',
          borderBottomWidth: 1,}}
      />
          <Text style={{ marginTop: 15, fontWeight: 'bold', fontSize: 16, marginLeft: 15, marginTop:25 }}>Notifications</Text>
          <UselessTextInput
        multiline
        numberOfLines={1}
        style={{padding: 0,
          borderBottomColor: 'grey',
          borderBottomWidth: 1,}}
      />

          <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: 50 }}>NEED HELP?</Text>
          <TouchableOpacity
          style={{
            marginTop: 15,
            backgroundColor: '#fff',
            padding: 15,
            borderWidth: 1,
            width: "60%",
            marginLeft: '20%'
         }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center', }}>Contact Us</Text>
         </TouchableOpacity>
         <TouchableOpacity
          style={{
            marginTop: 60,
            backgroundColor: '#fff',
            padding: 15,
            borderWidth: 1,
         }}>
          <Text style={{ fontWeight: 'bold', fontSize: 16, textAlign: 'center', }}>Sign Out</Text>
         </TouchableOpacity>
        </View>
    )
}