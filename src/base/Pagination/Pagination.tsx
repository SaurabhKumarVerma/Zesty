import { Animated, Easing, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { app_color } from '../../themes/color'

interface IPagination<T> {
  data: T[],
  scrollX: Animated.Value
}

const Pagination = <T,>(props: IPagination<T>) => {
  const {width} = useWindowDimensions()
  const{scrollX} = props
  return (
    <View style={styles.container}>
      {
        props?.data.map((_,index) => {
          const inputRange = [((index - 1 ) * width), (index * width), ((index + 1) * width) ]
          const currentPageWidth = scrollX.interpolate({
            inputRange,
            outputRange: [10,40,10],
            extrapolate: 'clamp',
            easing: Easing.linear,
            
          })

          const opacity = scrollX.interpolate({
             inputRange,
            outputRange: [0.2,1,0.2],
            extrapolate: 'clamp',
            easing: Easing.linear
          })
          return(
            <Animated.View style={[styles.dot, {width: currentPageWidth, opacity}]} key={index.toString()}/>
          )
        })
      }
    </View>
  )
}

export default Pagination

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 64,
  },
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: app_color.white,
    marginHorizontal: 8,
    alignSelf: 'center'
  }
})