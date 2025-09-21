import React from 'react'
import MapView, { MapViewProps } from 'react-native-maps';


interface IZestyMap extends MapViewProps {

}

const ZestyMap = (props: IZestyMap) => {
  return (
    <MapView {...props}/>
  )
}

export default ZestyMap