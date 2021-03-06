import React, { useState } from 'react';
import { View, Text } from 'react-native'; 
import { FlatList } from 'react-native'; 
import{ Input, Button } from 'react-native-elements';


export default function myplaces({ navigation }){


    const [address, setAddress]=useState(''); 
    const [places, setPlaces]=useState([]); 

    const savePlaces = (address) => {
        console.log(address)
        setPlaces([...places, {key: String(places.length), text: address}]); 
    }

    
    return (
    <View>
        <Input placeholder='Type the address'
        onChangeText={(address) => setAddress(address)}
        value={address}/>  
        <Button buttonStyle={{ width: 300 }} onPress={() => navigation.navigate('MAP', { address, savePlaces })} onLongPress={()=>setAddress('')} title="Show on a map" />
        <FlatList
            data={places}
            renderItem={({ item }) => 
            <Text>{item.text}</Text>
          }
        />

    </View>

    )
}; 