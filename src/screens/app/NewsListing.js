import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator, KeyboardAvoidingView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Search from '../../components/home/Search'
import { color } from '../../untils/Color'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import TextInput from '../../components/TextInput';
import Button from '../../components/Button';
import { categories } from '../../data/categories';

const NewsListing = () => {
  const [images, setimages] = useState([]);
  const [loading, setloading] = useState(false);
  const [values, setvalues] = useState([]);

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
  const onChangeText = (value, key) => {
    setvalues((val) => ({ ...val, [key]: value }));
    console.log(values);
  }
  const onChangeText1 = (value, key) => {
    setvalues({ ...values, [key]: value })
    console.log(values);
  }

  return (

    <ScrollView  style={styles.container}>
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
        {loading ? (
          <ActivityIndicator style={styles.acti} />
        ) : null}
      </View>
      <View >
        <TextInput label="Title" value={values.title}
          onChangeText={(v) => onChangeText1(v, 'title')}
          placehoder="Listing Title" />
      </View>
      <View style={{ marginTop: 20 }}>
        <TextInput label="Category"
          placehoder="Select the category"
          value={values.category}
          onChangeText={(v) => onChangeText(v, 'category')}
          type="picker"
          options={categories} />
          
          
      </View>
      <View style={{ marginTop: 20 }}>
        <TextInput label="Price"
          placehoder="Enter price in USD"
          value={values.price}
          onChangeText={(v) => onChangeText(v, 'price')}
          keyboardType="numeric" />
      </View>
      <View style={{ marginTop: 20,marginBottom:20 }}>
        <TextInput style={styles.tera} placehoder="Tell us more..." label="Description"
          value={values.description} onChangeText={(v) => onChangeText(v, 'description')} multiline />
      </View>
      <View style={styles.btn}>
        <Button title="Post" />
      </View>
    </ScrollView>


  )
}

export default NewsListing

const styles = StyleSheet.create({
  btn: {
    marginRight: 13,
  },
  tera: {
    minHeight: 100,
    textAlignVertical: 'top',
    paddingTop: 12 //căn text trong textinput
  },
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
    marginTop: 10,
    marginBottom: 30,
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
    backgroundColor: '#fff',
    padding: 20,
    flex: 1

  }
})