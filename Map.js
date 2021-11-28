import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native'; 
import{ Button } from'react-native-elements';
import MapView, { Marker} from'react-native-maps'; 


export default function map({ route, navigation }){

    const{ address } = route.params;

      const [initial, setInitial]=useState({
        latitude: 60.200692,
        longitude: 24.934302,
        latitudeDelta: 0.0322,
        longitudeDelta: 0.0221
      })

      const [region, setRegion]=useState(initial);

      useEffect (() => {
        fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=3JIT9JdCuHOBuHA8jsz6eLzHUoceyCUT&location=${address}`)
        .then(response => response.json())
        .then(responseData => {
          console.log(responseData.results[0].locations[0].displayLatLng.lat);
          setRegion({
          latitude: responseData.results[0].locations[0].displayLatLng.lat,
          longitude: responseData.results[0].locations[0].displayLatLng.lng,
          latitudeDelta: 0.0322,
          longitudeDelta: 0.0221
      })
        })
      },[])  

    

    return (
    <View>
        <MapView
        style={styles.map}
        region={region}
        provider="google"
        >
        <Marker
          coordinate={region}
          draggable={true}
          onDragStart={(e)=> {
            console.log('Started', e.nativeEvent.coordinate)
          }}
          onDragEnd={(e)=> {
            setPin({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude
            })
          }}
          title={address}
        />
        </MapView>

        <Button buttonStyle={{ width: 300 }} onPress={() => navigation.navigate('MY PLACES')} title="Save the place" /> 
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
  },
  textinput: {
    width: 300,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,

  }
});





  