import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import ZestyMap from '@base/ZestyMap/ZestyMap';
import { observer } from 'mobx-react';
import { useRootStore } from '@contexts/RootStoreContext';
import MapView, { Marker } from 'react-native-maps';
import { app_images } from '../../../assets';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@constant/screen-dimension';
import * as Location from 'expo-location';


const Delivery = () => {
  const { userStore } = useRootStore();

//   console.log(
//     'userStore?.userCurrentLocation?.coords?.latitude',
//     userStore?.userCurrentLocation?.coords?.latitude,
//   );
// userStore.getUserCurrentLocation()

    useEffect(() => {
        if(Location.PermissionStatus){}
    },[])

  return (
    <View style={{ flex: 1 }}>
      <MapView
    //   provider='google'
        zoomEnabled
        // followsUserLocation
        // showsUserLocation
        loadingEnabled
        zoomControlEnabled
        // showsCompass
        userInterfaceStyle="dark"
        rotateEnabled
        scrollEnabled
        initialRegion={{
          latitude: userStore?.userCurrentLocation?.coords?.latitude
            ? Number(userStore?.userCurrentLocation?.coords?.latitude)
            : 0,
          longitude: userStore?.userCurrentLocation?.coords?.longitude
            ? Number(userStore?.userCurrentLocation?.coords?.longitude)
            : 0,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        style={styles.map}
      >
        {/* <Marker draggable
        title='user'
          coordinate={{
            latitude: userStore?.userCurrentLocation?.coords?.latitude
              ? Number(userStore?.userCurrentLocation?.coords?.latitude)
              : 0,
            longitude: userStore?.userCurrentLocation?.coords?.longitude
              ? Number(userStore?.userCurrentLocation?.coords?.longitude)
              : 0,
          }}
          icon={{uri: app_images.locationMarker}}
          pinColor='red'
        /> */}

        <Marker
          draggable
          title="restaurant"
          coordinate={{
            latitude: 26.8858,
            longitude: 81.0396,
          }}
        //   icon={{ uri: app_images.locationMarker }}
          pinColor="green"
        />

        <Marker
            // icon={{uri: app_images.locationMarker}}
          draggable
          title="driver"
          coordinate={{
            latitude: 26.884,
            longitude: 81.0392,
          }}
          pinColor="blue"
        />

        

        <Marker
          draggable
          title="user"
          coordinate={{
            latitude: 26.8887,
            longitude: 81.059,
          }}
        //   icon={{ uri: app_images.locationMarker }}
          pinColor="red"
        />
      </MapView>
    </View>
  );
};

export default observer(Delivery);

const styles = StyleSheet.create({
  map: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  mapPadding: {
    top: 10,
    bottom: 10,
    right: 10,
    left: 10,
  },
});
