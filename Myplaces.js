import React, { useState } from 'react';
import { View, Text } from 'react-native'; 
import{ Input, Button } from'react-native-elements';

export default function myplaces({ route, navigation }){

    const{ place } = route.params; 

    const [address, setAddress]=useState(''); 

    
    return (
    <View>
        <Input placeholder='Type the address'
        onChangeText={(address) => setAddress(address)}
        value={address}/>  
        <Button buttonStyle={{ width: 300 }} onPress={() => navigation.navigate('MAP', {address: address})} title="Show on a map" /> 
        <Text>{place}</Text>
    </View>

    )
}; 