import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ZestyChip = () => {
  return (
    <View style={styles.container}>
      <Text>ZestyChip</Text>
    </View>
  )
}

export default ZestyChip

const styles = StyleSheet.create({
    container: {
        borderRadius: 16,
        borderWidth: 1,
        borderColor: '#878787'
    }
})