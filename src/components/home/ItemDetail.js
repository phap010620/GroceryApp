import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native'
import React, { useState } from 'react'
import { color } from '../../untils/Color';
import Search from './Search';

const ItemDetail = ({ route, navigation }) => {
  const [isChecked, setisChecked] = useState('false');
  const onCheck = () => {
    setisChecked(!isChecked);
  }

  const product = route.params || {};
  console.log(product);

  //liên hệ với người bán với sdt
  const onContact = () => {
    const phone = "0981649752"
    //số điện thoại
    const url = `tel:${phone}`;
    //gửi sms
    // const url = `sms:${phone}`;
    Linking.openURL(url);
    //gửi email
    // const email = "thp010620@gmail.com"
    // const url1 = `mailto:${email}`;
    // Linking.openURL(url1);

  }
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <Image style={styles.back} source={require('../../assets/icons/back.png')} />
        </TouchableOpacity>
        <Image style={styles.img} source={{ uri: product.image }} />
      </View>
      <View style={styles.container2}>
        <Text style={styles.text}>{product.title}</Text>
        <Text style={styles.text2}>{product.price}</Text>
        <Text style={styles.text3}>{product.description}</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={onCheck} style={styles.containerImg} >
          {
            isChecked ? <Image style={styles.img1} source={require('../../assets/icons/bookmark.png')} /> : <Image style={styles.img1} source={require('../../assets/icons/bookmark_active.png')} />
          }
        </TouchableOpacity>
        <TouchableOpacity onPress={onContact} style={{ backgroundColor: color.primary, left: 20, width: 260, height: 60, borderRadius: 10, marginRight: 40, }}>
          <Text style={{ color: color.white, fontSize: 20, fontWeight: "bold", textAlign: "center", marginTop: 15 }}>Contact Seller</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default ItemDetail

const styles = StyleSheet.create({
  container3: {
    borderWidth: 1,
    borderColor: color.black,
  },
  img1: {
    width: 30,
    height: 30,
    top: 15,
    alignSelf: 'center',
    tintColor: color.primary

  },
  containerImg: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    backgroundColor: '#e8e8e8',
    marginLeft: 20,
    boderwidth: 1,
    borderColor: color.ligtbBrown,
  },
  footer: {
    flexDirection: "row",
    top: 280,
    justifyContent: "space-between"

  },
  container: {
    flex: 1,
    backgroundColor: color.white,
  },
  back: {
    marginTop: 10,
    marginLeft: 4,
    position: "absolute",
    zIndex: 1,
    borderRadius: 10,
    width: 90,
    height: 90,
    padding: 5,
  },
  container2: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: color.white,
    position: "absolute",
    top: 400,
    width: "100%",
    height: "50%",

  },

  text3: {
    fontSize: 15,
    fontWeight: "300",
    marginLeft: 20,
    marginTop: 10,
    marginRight: 20,
    color: color.black
  },

  text2: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 10,
    color: color.black
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 20,
    color: color.black
  },
  img: {
    width: "100%",
    height: 451,
  }
})