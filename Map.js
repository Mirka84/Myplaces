import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, View } from 'react-native'; 
import{ Button } from'react-native-elements';
import MapView, { Marker } from'react-native-maps'; 


export default function map({ route, navigation }){

    const{ address } = route.params;

    const initial = {
      latitude: 60.200692,
      longitude: 24.934302,
      latitudeDelta: 0.0322,
      longitudeDelta: 0.0221
    };
  
    const [region, setRegion]=useState(initial);  
    
    const [place, setPlace]=useState('');

    const getAddress = async () => {
      const url=`http://www.mapquestapi.com/geocoding/v1/address?key=3JIT9JdCuHOBuHA8jsz6eLzHUoceyCUT&location=${address}`;
     
      try {
        const response = await fetch(url);
        const data = await response.json();
        
        
        const { lat, lng }=data.results[0].locations[0].latLng;
        console.log(place);
        setRegion({...region, latitude: lat, longitude: lng})
        
        setPlace(data.results[0].providedLocation.location);
        
      } catch (e) {
        Alert.alert('Error fetching data');
      }
      
    } 

    useEffect(() => { getAddress() }, []); 



  
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={region}
        >
          <Marker
            coordinate={region}
            title={address}
          />
        </MapView>

        <Button buttonStyle={{ width: 300 }} onPress={() => navigation.navigate('MY PLACES', {place: place})} title="Save the place" /> 
    </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      paddingTop:StatusBar.currentHeight,
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map: {
      flex: 1,
      width: "100%",
      height: "100%"
    }
  });
