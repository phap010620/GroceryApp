import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { color } from '../../untils/Color'
import { useNavigation } from '@react-navigation/native'
import TextInput from '../TextInput'

const Search = ({ showSearch, showBack, title, showLogout, back, onSearch, keyword }) => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  }
  const [showInput, setShowInput] = useState(false);
  const onClick = () => {
    setShowInput(!showInput);
  }
  const handleLogout = () => {
    navigation.navigate('Splash');
  }

  return (
    <View>
      <View style={styles.container}>
        {showBack ? (
          <TouchableOpacity  >
            <Image
              style={styles.img2}
              source={require('../../assets/icons/back.png')}
            />
          </TouchableOpacity>
        ) : showSearch ? (
          <TouchableOpacity onPress={onClick} >
            <Image
              style={styles.img}
              source={require('../../assets/icons/search.png')}
            />
          </TouchableOpacity>
        ) : back ? (
          <TouchableOpacity onPress={goBack} >
            <Image
              style={styles.img3}
              source={require('../../assets/icons/back3.png')}
            />
          </TouchableOpacity>
        ) : <View style={{ width: 24 }}></View>
        }
        <Text style={styles.text}>{title}</Text>
        {showLogout ? (
          <TouchableOpacity onPress={handleLogout} >
            <Image
              style={styles.img4}
              source={require('../../assets/icons/logout.png')}
            />
          </TouchableOpacity>
        ) : <View style={{ width: 24 }}></View>
        }
      </View>
      {
        showInput ? (
          <TextInput onChangeText={onSearch} value={keyword} placehoder="Type your keyword ..." />
        ) : null
      }
    </View>
  )
}


export default Search

const styles = StyleSheet.create({
  img4: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginLeft: 10,
  },
  img3: {
    width: 9,
    height: 20,
    marginTop: 10,
    marginEnd: 30,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: color.black,
    flex: 1,
    textAlign: 'center',
    marginTop: 10,
  },
  img: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginLeft: 10,
  },
  img2: {
    width: 100,
    height: 100,

  }
})