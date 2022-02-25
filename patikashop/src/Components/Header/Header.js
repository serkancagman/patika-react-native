import React from 'react'
import { View, StyleSheet,Text } from 'react-native'

const Header = () => {
  return (
    <Text style={styles.header}>PATIKASTORE</Text>
  )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 30,
        margin: 10,
        fontWeight: 'bold',
        color: 'purple',
    }
})

export default Header