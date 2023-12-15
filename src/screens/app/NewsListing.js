import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import Search from '../../components/home/Search'
import { color } from '../../untils/Color'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const NewsListing = () => {
  const [images, setimages] = useState([]);
  const [loading, setloading] = useState(false);



  //hiện lên modal chọn ảnh trong thư viện hoặc chụp ảnh

  const chooseFile = async () => {
    setloading(true);
    const result = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    }, (response) => {
      console.log('response', response);
    });
    if (result?.assets?.length) {
      setimages(list => [...list, ...result.assets]);
      setloading(false);
    }
    console.log('images', images);
    // const result = await launchCamera({
    //   mediaType: 'photo',
    //   includeBase64: false,
    //   maxHeight: 200,
    //   maxWidth: 200,
    // }, (response) => {
    //   console.log('response', response);
    // });

  }
  const deleteImage = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setimages(newImages);
  }
  return (
    <View style={styles.container}>
      <Search title="Create a new listing" back />
      <Text style={styles.text}>Upload photos</Text>
      <View style={styles.containerImg}>
        <TouchableOpacity onPress={chooseFile} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        {images.map((item, index) => (
          <View key={index}>
            <TouchableOpacity onPress={deleteImage} style={styles.delete}>
            <Image style={styles.delete} source={require('../../assets/icons/delete.png')} />
            </TouchableOpacity>
            <Image
            source={{ uri: item.uri }}
            style={{ width: 100, height: 100, marginStart: 10, borderRadius: 10 }}
          />
          </View>
        ))
        }
        { loading ? (
        <ActivityIndicator style={styles.acti} />
      ) : null }
      </View>
      
    </View>
  )
}

export default NewsListing

const styles = StyleSheet.create({
  acti: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginStart: 40
  },
  delete: {
    position: 'absolute',
    width: 30,
    height: 30,
    right: -5,
    bottom: 43,
    zIndex: 1
  },
  containerImg: {
    flexDirection: 'row',
    marginTop: 10
  },
  buttonText: {
    width: 30,
    height: 30,
    backgroundColor: color.grey,
    borderRadius: 40,
    color: '#fff',
    fontSize: 20,
    alignSelf: 'center',
    paddingStart: 9,


  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: color.light,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: '500',
    marginTop: 24,
    marginBottom: 20,
    color: color.primary
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20
  }
})