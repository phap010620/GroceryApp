import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Line = () => {
  return (
    <View>
      <View style={styles.line}></View>
    </View>
  )
}

export default React.memo(Line);

const styles = StyleSheet.create({
    line:{
        borderBottomWidth:1,
        borderBottomColor:'#D1D1D1',
        marginTop:20,
        marginBottom:20,
        width:90,
        marginStart:10,
        marginEnd:10,
    }
})